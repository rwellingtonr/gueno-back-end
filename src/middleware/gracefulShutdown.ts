import { serverHttp } from "../app"

function gracefulShutdown(event: string) {
	return serverHttp.close(() => {
		// close data base -- mongo ou sql
		// webSocket
		// Cache -- redis
		console.log(`Ending the server due to the ${event}`)

		process.kill(0)
	})
}

process.on("SIGTERM", gracefulShutdown)
process.on("SIGINT", gracefulShutdown)
