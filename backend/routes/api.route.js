import {Router} from 'express'
import {AuthRoute} from "./apis/auth.route.js";

const router = Router();

router.use('/', AuthRoute)

export default router
