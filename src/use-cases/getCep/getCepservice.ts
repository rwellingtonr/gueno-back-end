import { IViaCepProvider } from "../../provider/viaCep"

export default class GetCepService {
	constructor(private readonly provider: IViaCepProvider) {}

	async get(cep: string) {
		const address = await this.provider.getByCep(cep)

		return address
	}
}
