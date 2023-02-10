import { Router } from "express"
import { methods as eventController } from "../controllers/event.controller"

const router = Router()

router.get("/", eventController.getEvent)

export default router