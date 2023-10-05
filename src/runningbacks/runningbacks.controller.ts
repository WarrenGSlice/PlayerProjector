import { Request, RequestHandler, Response } from 'express';
import { RunningBack } from './runningbacks.model';
import * as RunningBackDAO from './runningbacks.dao';
import { OkPacket } from 'mysql';

export const readRunningBacks: RequestHandler = async (req: Request, res: Response) => {
    try {
        let runningBacks;
        let rbId = parseInt(req.query.rbId as string);

        console.log('rbId', rbId);
        if (Number.isNaN(rbId)) {
            runningBacks = await RunningBackDAO.readRunningBacks();
        } else {
            runningBacks = await RunningBackDAO.readRunningBacksById(rbId);
        }
        res.status(200).json(runningBacks);
    } catch (error) {
        console.error('[runningbacks.controller][readRunningBacks][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching running backs'});
    }
};

export const readRunningBacksByName: RequestHandler = async (req: Request, res: Response) => {
    try {
        const rbs = await RunningBackDAO.readRunningBacksByName(req.params.name);

        res.status(200).json(rbs);
    } catch (error) {
        console.error('[runningbacks.controller][readRunningBacksByName][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching running backs by name'});
    }
};

export const readRunningBacksBySearchTerm: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const rbs = await RunningBackDAO.readRunningBacksBySearchTerm('%' + req.params.search + '%');

        res.status(200).json(rbs);
    } catch (error) {
        console.error('[runningbacks.controller][readRunningBacksBySearchTerm][Error] ', error);
        res.status(500).json({message: 'There was an error when fetching running backs by search term'});
    }
};

export const readRunningBacksByAttempts: RequestHandler = async (req: Request, res: Response) => {
    try {
        let runningBacks;
        let rbId = parseInt(req.query.rbId as string);
        console.log('rbId', rbId);
        if (Number.isNaN(rbId)) {
            runningBacks = await RunningBackDAO.readRunningBacksByAttempts();
        } else {
            runningBacks = await RunningBackDAO.readRunningBacksByPoints();
        }
        res.status(200).json(runningBacks);
    } catch (error) {
        console.error('[runningbacks.controller][readRunningBacksByAttempts][Error] ', error);
        res.status(500).json({message:'There was an error when fetching running backs order by Attempts'});
    }
};

export const readRunningBacksByPoints: RequestHandler = async (req: Request, res: Response) => {
    try {
        let runningBacks;
        let rbId = parseInt(req.query.rbId as string);
        let rank = parseInt(req.query.rank as string);
        console.log('rbId', rbId);
        console.log('rank', rank);
        if (Number.isNaN(rbId)) {
            runningBacks = await RunningBackDAO.readRunningBacksByPoints();
        } else {
            runningBacks = await RunningBackDAO.readRunningBacksById(rank);
        }
        res.status(200).json(runningBacks);
    } catch (error) {
        console.error('[runningbacks.controller][readRunningBacksByAttempts][Error] ', error);
        res.status(500).json({message:'There was an error when fetching running backs order by Attempts'});
    }
};

export const createRunningBack: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await RunningBackDAO.createRunningBack(req.body);

        console.log('req.body', req.body);
        console.log('rb', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[runningbacks.controller][createRunningBack][Error] ', error);
        res.status(500).json({message: 'There was an error when creating a new running back'});
    }
};

export const updateRunningBack: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await RunningBackDAO.updateRunningBack(req.body);
        console.log('req.body', req.body);
        console.log('rb', okPacket);

        res.status(200).json(okPacket);
    }catch (error) {
        console.error('[runningbacks.controller][updateRunningBack][Error] ', error);
        res.status(500).json({message: 'There was an error when updating a running back'});
    }
};

export const deleteRunningBack: RequestHandler = async (req:Request, res: Response) => {
    try {
        let rbId = parseInt(req.params.rbId as string);

        console.log('rbId', rbId);
        if (!Number.isNaN(rbId)) {
            const response = await RunningBackDAO.deleteRunningBack(rbId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for rbId");
        }
    } catch (error) {
        console.error('[runningbacks.controller][deleteRunningBack][Error] ', error);
        res.status(500).json({message: 'There was an error when deleting a running back'});
    }
};