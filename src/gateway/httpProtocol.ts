import axios from "axios"

export interface IHttpProtocol {
	get<T>(url: string, option?: any): Promise<T>
}

export default class HttpProtocolGateway implements IHttpProtocol {
	async get<T>(url: string, option?: any): Promise<T> {
		const response = await axios.get(url, option)
		return response.data
	}
}
