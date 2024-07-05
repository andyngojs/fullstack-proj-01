import {StatusCodes} from "http-status-codes";

class AuthController {
    login(req, res) {
        res.status(StatusCodes.OK).json({message: 'User already logged in'});
    }

    register(req, res) {
        res.status(StatusCodes.OK).json({message: 'User already registered'});
    }
}

export const authController = new AuthController();
