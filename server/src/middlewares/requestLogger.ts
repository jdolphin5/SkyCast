import winston from "winston";
import expressWinston from "express-winston";
import { Request, Response } from "express";

export const logRequest = expressWinston.logger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({ filename: "logs/requests.log" })
    ],
    format: winston.format.json()
});
