import { IHttpProtocol } from "../gateway/httpProtocol"
import type { ViaCepRepose } from "./viaCep.types"

export interface IViaCepProvider {
	getByCep(cep: string): Promise<ViaCepRepose>
}

export default class ViaCepProvider implements IViaCepProvider {
	constructor(private readonly gateway: IHttpProtocol) {}

	async getByCep(cep: string): Promise<ViaCepRepose> {
		const baseUrl = `https://viacep.com.br/ws/${cep}/json/`

		const address = await this.gateway.get<ViaCepRepose>(baseUrl)
		return address
	}
}
