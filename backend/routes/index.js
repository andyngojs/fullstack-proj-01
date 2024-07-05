import {StatusCodes} from "http-status-codes";
import APIRouter from "./api.route.js";

export default function Router(app) {
    app.get('/hello', (req, res) => {
        res.status(StatusCodes.OK).send('<h1>Hello World!</h1>');
    });

    app.use("/api", APIRouter)
}