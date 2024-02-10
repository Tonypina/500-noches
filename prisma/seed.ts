import prisma from "../lib/prisma";

async function main() {
    var bcrypt = require('bcryptjs')

    var pass_hash

    bcrypt.genSalt(10, function(err , salt ) {
        bcrypt.hash("S0p0rt3Ross0ft", salt, function(err , hash ) {
            pass_hash = hash
        })
    })

    const user = await prisma.user.create({
        data: {
            name: 'soporte',
            email: 'soporte@rossoft.com.mx',
            password: pass_hash
        },
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