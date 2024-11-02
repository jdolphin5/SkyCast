import { VisualCrossing } from "../models/visualCrossing.js";
import express, { Express, Request, Response, Router } from "express";

export const visualCrossingRouter: Router = express.Router({
    mergeParams: true
});

visualCrossingRouter.get("/", (req: Request, res: Response) => {
    VisualCrossing.find()
        .then((result: object) => {
            res.send(result);
        })
        .catch((err: Error) => {
            console.log(err);
        });
});

visualCrossingRouter.get("/:id", (req: Request, res: Response) => {
    const id: String = req.params.id;

    VisualCrossing.findById(id)
        .then((result: object | null) => {
            res.send(result);
        })
        .catch((err: Error) => {
            console.log(err);
        });
});
