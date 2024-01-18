import { OkPacket } from "mysql";
import { execute } from '../services/mysql.connector';
import { RunningBack } from "./runningbacks.model";
import { runningBackQueries } from "./runningbacks.queries";

export const readRunningBacks = async () => {
    return execute<RunningBack[]>(runningBackQueries.readRunningBacks, []);
};

export const readRunningBacksById = async (rbId: number) => {
    return execute<RunningBack[]>(runningBackQueries.readRunningBacksById, [rbId]);
};

export const readRunningBacksByName = async (name: string) => {
    return execute<RunningBack[]>(runningBackQueries.readRunningBacksByName, [name]);
};

export const readRunningBacksBySearchTerm = async (search: string) => {
    return execute<RunningBack[]>(runningBackQueries.readRunningBacksBySearchTerm, [search]);
};

export const readRunningBacksByAttempts = async () => {
    return execute<RunningBack[]>(runningBackQueries.readRunningBacksByAttempts, []);
};

export const readRunningBacksByPoints = async () => {
    return execute<RunningBack[]>(runningBackQueries.readRunningBacksByPoints, []);
};

export const createRunningBack = async (runningback: RunningBack) => {
    return execute<OkPacket>(runningBackQueries.createRunningBack,
        [runningback.ranking, runningback.name, runningback.team, runningback.byeWeek,
        runningback.points, runningback.rushAttempts, runningback.rushYards, runningback.rushTds,
        runningback.recs, runningback.recYards, runningback.recTds, runningback.fum, runningback.fumLost,
        runningback.firstDowns, runningback.hundredGame, runningback.twoHundredGame, runningback.fourtyPlay,
        runningback.fourtyTd, runningback.passComp, runningback.passYards, runningback.passTds,
        runningback.targetShare, runningback.pointsGame]);
};

export const updateRunningBack = async (runningback: RunningBack) => {
    return execute<OkPacket>(runningBackQueries.updateRunningBack,
        [runningback.ranking, runningback.name, runningback.team, runningback.byeWeek, runningback.points,
        runningback.rushAttempts, runningback.rushYards, runningback.rushTds, runningback.recs,
        runningback.recYards, runningback.recTds, runningback.fum, runningback.fumLost, runningback.firstDowns, 
        runningback.hundredGame, runningback.twoHundredGame, runningback.fourtyPlay,
        runningback.fourtyTd, runningback.passComp, runningback.passYards, runningback.passTds,
        runningback.targetShare, runningback.pointsGame, runningback.rbId]);
};

export const deleteRunningBack = async (rbId: number) => {
    return execute<OkPacket>(runningBackQueries.deleteRunningBack, [rbId]);
};