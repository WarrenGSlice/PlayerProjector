import { Request, Response, RequestHandler } from "express";
import * as PlayerDao from './players.dao';

export const readPlayers: RequestHandler = async (req: Request, res: Response) => {
    try {
        const players = await PlayerDao.readPlayers();

        res.status(200).json(players);
    } catch (error) {
        console.error('[players.controller][ReadPlayers][Error]', error);
        res.status(500).json({message: 'There was an error when fetching players'});
    }
};