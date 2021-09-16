import express from "express"
import { loginRoute } from "../controllers/index.js"

const router = express.Router()

router.get("/", loginRoute)

export default router;