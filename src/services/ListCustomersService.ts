import prismaClient from "../prisma";

export class ListCustomersService{
  async execute() {
const customers = await prismaClient.customer.findMany();

return customers; 

  }
}