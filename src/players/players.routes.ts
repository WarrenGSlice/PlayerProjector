import { Request, Response, Router } from 'express';
import * as PlayersController from './players.controller';

const router = Router();
router 
    .route('/players')
    .get(PlayersController.readPlayers);

export default router;