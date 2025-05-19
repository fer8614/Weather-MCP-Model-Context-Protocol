# Weather MCP

This project is an implementation of a Model Context Protocol (MCP) server that allows users to ask for the current weather and weather forecasts for any city. You can query the current weather conditions and get forecasts for up to 5 days.

## Features
- Ask for the current weather of any city in the world.
- Get the weather forecast for the next 5 days.
- Returns temperature, precipitation, and other weather details.
- Built as an MCP server using the `@modelcontextprotocol/sdk`.
- Code inspection is possible using the `@modelcontextprotocol/inspector`.

## How it Works
The MCP server exposes a tool called `fetch-weather`. When you provide the name of a city, the server:
1. Uses the Open-Meteo Geocoding API to obtain the latitude and longitude of the city.
2. Fetches current and forecast weather data (for 5 days) from the Open-Meteo Weather API.
3. Returns the weather data in a structured response.

## Code Inspection
You can inspect the MCP implementation using the inspector tool:

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
```

This command launches the MCP Inspector, allowing you to interactively explore the server and its available tools.

## Dependencies
The following dependencies are required and should be installed:

- `@modelcontextprotocol/sdk` (for MCP server implementation)
- `zod` (for schema validation)
- `tsx` (for running TypeScript files directly)

Install them using:

```bash
npm install @modelcontextprotocol/sdk zod tsx
```

## Usage
To start the MCP server, run:

```bash
npx -y tsx main.ts
```

You can then interact with the server using any MCP-compatible client or via the inspector as described above.

## Configuration in the Code Editor or Client

To allow your code editor or client to connect to and run the Weather MCP, you need to configure the `mcp_config.json` file (or the appropriate configuration system) as follows:

```json
{
  "mcpServers": {
    "Weather": {
      "command": "npx",
      "args": [
        "-y",
        "tsx",
        "/path/to/your/project/weather/main.ts"
      ]
    }
  }
}
```

Replace `/path/to/your/project/weather/main.ts` with the actual path to your MCP main file.

This will allow your editor or client to automatically detect and launch the Weather MCP server.

---

# Weather MCP

This project implements a Model Context Protocol (MCP) server that allows you to query the current weather and weather forecasts for any city. You can ask for the current weather and forecasts for up to 5 days.

## Features
- Query the current weather for any city worldwide.
- Get weather forecasts for the next 5 days.
- Returns temperature, precipitation, and other weather details.
- Built as an MCP server using `@modelcontextprotocol/sdk`.
- Code inspection available via `@modelcontextprotocol/inspector`.

## How it Works
The MCP server exposes a tool called `fetch-weather`. When you provide a city name, the server:
1. Uses the Open-Meteo Geocoding API to get the city's latitude and longitude.
2. Fetches current and 5-day forecast data from the Open-Meteo Weather API.
3. Returns the weather data in a structured format.

## Weather API Used
This project uses the weather API from [https://open-meteo.com/](https://open-meteo.com/). The Open-Meteo API provides free weather data, including current conditions and forecasts, which are used by the MCP server to respond to user queries about the weather in any city. All weather and forecast information returned by this project is sourced from Open-Meteo.

## Code Inspection
Inspect the MCP code using the inspector tool:

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
```

This command launches the MCP Inspector, allowing interactive exploration of the server and its tools.

## Dependencies
Required dependencies:
- `@modelcontextprotocol/sdk`
- `zod`
- `tsx`

Install with:

```bash
npm install @modelcontextprotocol/sdk zod tsx
```

## Usage
To start the MCP server:

```bash
npx -y tsx main.ts
```

You can interact with the server using any MCP-compatible client or the inspector as shown above.
