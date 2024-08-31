import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCostumerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const {name, email} = request.body as {name: string, email: string};
   
    const customerService = new CreateCustomerService()
    const costumer = await customerService.execute({name, email}); 

    reply.send(costumer)
  }
}

export {CreateCostumerController}