import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    var bcrypt = require('bcryptjs')

    var pass_hash

    bcrypt.genSalt(10, function(err , salt ) {
        bcrypt.hash("S0p0rt3Ross0ft", salt, function(err , hash ) {
            pass_hash = hash
        })
    })
    const admin = await prisma.users.upsert({
        where: { userId: 1 },
        update: {},
        create: {
            firstName: 'soporte',
            lastName: 'soporte',
            email: 'soporte@rossoft.com.mx',
            password: pass_hash
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        await prisma.$disconnect()
        process.exit(1)
    })