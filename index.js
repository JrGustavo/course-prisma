import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main () {
   const newUser=  await prisma.user.create({
        data: {
            name: "Joe",
            email: "joe@gmail.com",
            lastname: "Alvarado"
        }
   })
    console.log(newUser );

}

main()