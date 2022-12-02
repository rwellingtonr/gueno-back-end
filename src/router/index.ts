import { Router } from "express"
import fs from "fs/promises"
const router = Router()

type RouteImported = {
	default: Router
}

startUpRouter()
	.then(() => console.log("Routes initializes"))
	.catch((err) => console.error(err))

async function startUpRouter() {
	const files = (await fs.readdir(__dirname)).filter((file) => !file.includes("index"))

	for (const file of files) {
		try {
			const route: RouteImported = await import(`./${file}`)
			router.use(route.default)
		} catch (err) {
			console.error(`Route failed: ${err}`)
		}
	}
}

export default router
