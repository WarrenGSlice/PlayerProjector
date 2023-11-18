import { Request, RequestHandler, Response } from 'express';
import { Stats } from './stats.model';
import * as StatsDAO from './stats.dao';
import { OkPacket } from 'mysql';

export const readStats: RequestHandler = async (req: Request, res: Response) => {
    try {
        let stats;
        let playerId = parseInt(req.query.playerId as string);

        console.log('playerId', playerId);
        if (Number.isNaN(playerId)) {
            stats = await StatsDAO.readStats();
        } else {
            stats = await StatsDAO.readStatsById(playerId);
        }
        res.status(200).json(stats);
    } catch (error) {
        console.error('[stats.controller][readStats][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching stats'});
    }
};

export const readStatsByName: RequestHandler = async (req: Request, res: Response) => {
    try {
        const rbs = await StatsDAO.readStatsByName(req.params.name);

        res.status(200).json(rbs);
    } catch (error) {
        console.error('[stats.controller][readStatsByName][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching stats by name'});
    }
};

export const createStat: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await StatsDAO.createStat(req.body);

        console.log('req.body', req.body);
        console.log('stat', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[stats.controller][createStats][Error] ', error);
        res.status(500).json({message: 'There was an error when creating a new career stat'});
    }
};

export const updateStat: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await StatsDAO.updateStat(req.body);
        console.log('req.body', req.body);
        console.log('stat', okPacket);

        res.status(200).json(okPacket);
    }catch (error) {
        console.error('[stats.controller][updateStat][Error] ', error);
        res.status(500).json({message: 'There was an error when updating a stat'});
    }
};

export const deleteStat: RequestHandler = async (req:Request, res: Response) => {
    try {
        let playerId = parseInt(req.params.playerId as string);

        console.log('playerId', playerId);
        if (!Number.isNaN(playerId)) {
            const response = await StatsDAO.deleteStat(playerId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for playerId");
        }
    } catch (error) {
        console.error('[stats.controller][deleteStat][Error] ', error);
        res.status(500).json({message: 'There was an error when deleting a stat'});
    }
};