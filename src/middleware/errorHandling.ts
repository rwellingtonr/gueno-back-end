import { Request, Response, NextFunction } from "express"

const errorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(`Error: ${err}`)

	if (err instanceof Error) return next(err)

	return res.status(500).send({ message: "Internal Server Error", error: err })
}

export default errorHandling
