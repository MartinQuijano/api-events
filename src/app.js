import express from "express"
import morgan from "morgan"
import cors from "cors"

import eventRoutes from "./routes/events.routes"

const app = express()

app.set("port", 4000)
app.use(cors())
app.use(morgan("dev"))

app.use("/images", express.static("src/assets"))

app.use("/api/event", eventRoutes)

export default app