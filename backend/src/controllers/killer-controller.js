import { StatusCodes } from 'http-status-codes';
import killerDB from '../helpers/killer-helper.js';

const getAllKillers = async (req, res, next) => {
    try {
        const allKillers = await killerDB.getAll();

        if (allKillers.length === 0) {
            const error = new Error("No killers found..");
            error.status = StatusCodes.BAD_REQUEST;
            throw error;
        }

        res.status(StatusCodes.OK).json({
            success: true,
            data: allKillers
        });
    } catch (error) {
        next(error);
    }
}

export default {
    getAllKillers
}