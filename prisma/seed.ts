import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

  const password = await hash('S0p0rt3Ross0ft', 10);
  const soporteUser = await prisma.user.create({
    data: {
        name: 'soporte',
        email: 'soporte@rossotf.com.mx',
        password,
    },
  });

  console.log({ soporteUser });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });