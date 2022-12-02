import { Request, Response } from "express"
import HttpProtocolGateway from "../../gateway/httpProtocol"
import ViaCepProvider from "../../provider/viaCep"
import GetCepController from "./getCepCotroller"
import GetCepService from "./getCepservice"

export const getCepFactory = () => {
	const provider = new ViaCepProvider(new HttpProtocolGateway())
	const service = new GetCepService(provider)
	const controller = new GetCepController(service)

	const get = () => async (req: Request, res: Response) => {
		return controller.handle(req, res)
	}

	return { get }
}
