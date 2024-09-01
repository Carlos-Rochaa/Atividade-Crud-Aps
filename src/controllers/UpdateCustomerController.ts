import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

export class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, name, email, status } = request.body as {
      id: string;
      name?: string;
      email?: string;
      status?: boolean;
    };

    try {
      const updateCustomerService = new UpdateCustomerService();
      const result = await updateCustomerService.execute({ id, name, email, status });
      return reply.send(result);
    } catch (error) {
      if (error instanceof Error) {
    
        return reply.status(400).send({ message: error.message });
      } else {
      
        return reply.status(400).send({ message: "Erro desconhecido" });
      }
    }
  }
}
