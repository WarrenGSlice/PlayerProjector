import { Router } from 'express';
import * as RunningBacksController from './runningbacks.controller';

const router = Router();
router.
    route('/runningbacks').
    get(RunningBacksController.readRunningBacks);

router
    .route('/runningbacks/sort/attempts')
    .get(RunningBacksController.readRunningBacksByAttempts);

router
    .route('/runningbacks/sort/points')
    .get(RunningBacksController.readRunningBacksByPoints);

router.
    route('/runningbacks/:name').
    get(RunningBacksController.readRunningBacksByName);

router.
    route('/runningbacks/search/:search').
    get(RunningBacksController.readRunningBacksBySearchTerm);

router.
    route('/runningbacks').
    post(RunningBacksController.createRunningBack);

router.
    route('/runningbacks').
    put(RunningBacksController.updateRunningBack);

router.
    route('/runningbacks/:rbId').
    delete(RunningBacksController.deleteRunningBack);

export default router;