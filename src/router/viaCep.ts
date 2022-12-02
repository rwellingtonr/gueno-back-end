import { Router } from "express"
import { getCepFactory } from "../use-cases/getCep/getCepFactory"

const router = Router()
const cepRouter = Router()
const prefix = "/cep"
const viaCep = getCepFactory()

cepRouter.get("/:cep", viaCep.get())

router.use(prefix, cepRouter)

export default router
