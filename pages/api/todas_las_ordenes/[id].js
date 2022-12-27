import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

    const prisma = new PrismaClient()
    if (req.method === 'DELETE') {
        const { id } = req.query

        const ordenActualizada = await prisma.orden.delete({
            where: {
                id: parseInt(id)
            }
        })
        res.status(200).json(ordenActualizada)
    }
}