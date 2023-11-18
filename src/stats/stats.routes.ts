import { Router } from 'express';
import * as StatsController from './stats.controller';

const router = Router();
router.
    route('/stats').
    get(StatsController.readStats);

router.
    route('/stats/:name').
    get(StatsController.readStatsByName);

router.
    route('/stats').
    post(StatsController.createStat);

router.
    route('/stats').
    put(StatsController.updateStat);

router.
    route('/stats/:playerId').
    delete(StatsController.deleteStat);

export default router;