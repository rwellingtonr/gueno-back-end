import { Request, Response } from "express"
import GetCepService from "./getCepservice"

export default class GetCepController {
	constructor(private readonly service: GetCepService) {}

	async handle(req: Request, res: Response) {
		try {
			const { cep } = req.params
			const address = await this.service.get(cep)
			return res.status(200).send(address)
		} catch (err) {
			return res.status(err.status || 400).send(err)
		}
	}
}
