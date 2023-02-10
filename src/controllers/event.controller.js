import { getConnection } from "../database/database"

const getEvent = async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? req.query.pageSize : 0;
        const page = req.query.page ? req.query.page : 0;

        const connection = await getConnection()
        const amountOfResults = await connection.query(`SELECT COUNT(*) AS amountOfResults FROM event`)
        const results = await connection.query(`SELECT id, title, country, city, date, description, category, image_path FROM event LIMIT ${pageSize * page}, ${pageSize}`)

        const events = {
            results,
            amountOfResults: amountOfResults[0].amountOfResults
        }
        res.json(events)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methods = {
    getEvent
}