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

