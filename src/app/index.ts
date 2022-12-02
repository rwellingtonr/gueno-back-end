import "dotenv/config"
import "../middleware/gracefulShutdown"
import express from "express"
import http from "http"
import router from "../router"
import errorHandling from "../middleware/errorHandling"

const app = express()
app.use(errorHandling)
app.use(router)

const serverHttp = http.createServer(app)

export { serverHttp }
