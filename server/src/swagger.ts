import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { Express, Request, Response } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SkyCast API",
            description:
                "API endpoints for a weather data app documented on swagger",
            contact: {
                name: "James Dolphin",
                email: "",
                url: "https://github.com/jdolphin5/skycast"
            },
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000/",
                description: "Local server"
            }
            /*
            {
                url: "<your live url here>",
                description: "Live server"
            }
            */
        ]
    },

    // looks for configuration in specified directories
    apis: ["./routes/*.ts"]
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app: Express, port: String | undefined) => {
    // Swagger Page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Documentation in JSON format
    app.get("/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
};

export default swaggerDocs;
