import db from '../database/db.js';

const killerDB = {
    async getAll() {
        const sql = 'SELECT * FROM Killers';
        const result = await db.query(sql);
        
        return result.rows;
    }
}

export default killerDB;