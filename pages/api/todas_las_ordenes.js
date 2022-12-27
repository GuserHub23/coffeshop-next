import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    const prisma = new PrismaClient()

    // OBTENER ORDENES
    const todas_las_ordenes = await prisma.orden.findMany()
    res.status(200).json(todas_las_ordenes)
}
