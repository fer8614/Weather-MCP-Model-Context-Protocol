import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// 1. Create server
// Pricipal Interface with MCP protocol
// Management comunication between clients and server.

const server = new McpServer({
    name: "demo",
    version: "1.0.0"
});

// 2. Define the tools
//Allow the LLM to perform actions through your server
server.tool(
    "fetch-weather", //Tool title
    "Tool to fetch the weather of a city", //Tool description
    // Tool parameters
    {
        city: z.string().describe("City name") 
    },
    // Tool function
    async ( {city } ) => {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
        const data = await response.json();
        
        if(data.length === 0){
            return {
                content: [
                    {
                        type: "text",
                        text: `No information found for the city of ${city}`
                    }
                ]
            }
        }

        const { latitude, longitude } = data.results[0];
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,precipitation,is_day,rain&past_days=5`)
        const weatherData = await weatherResponse.json();
        
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(weatherData, null, 2)
                }
            ]
        }
    }
)