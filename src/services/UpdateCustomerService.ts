import prismaClient from "../prisma";

interface UpdateCustomerProps {
  id: string;
  name?: string;
  email?: string;
  status?: boolean;
}

class UpdateCustomerService {
  async execute({ id, name, email, status }: UpdateCustomerProps) {
    if (!id) {
      throw new Error("ID do cliente é obrigatório");
    }

    const findCustomer = await prismaClient.customer.findUnique({
      where: { id }
    });

    if (!findCustomer) {
      throw new Error("Cliente inexistente!");
    }

    
    const updatedCustomer = await prismaClient.customer.update({
      where: { id },
      data: { name, email, status }
    });

    return { customer: updatedCustomer };
  }
}

export { UpdateCustomerService };
