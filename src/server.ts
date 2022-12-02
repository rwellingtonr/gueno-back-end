import { serverHttp } from "./app"

serverHttp.listen(process.env.PORT, () => {
	console.log(`Server is running process ${process.pid} in the port: ${process.env.PORT}`)
})
