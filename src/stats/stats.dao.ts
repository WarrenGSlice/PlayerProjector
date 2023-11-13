import { execute } from "../services/mysql.connector";
import { Stats } from "./stats.model";
import { StatQueries } from "./stats.queries";

export const readStats = async (playerId: number) => {
    return execute<Stats[]>(StatQueries.readStats,[playerId]);
};

export const createStat = async (stats: Stats, index: number, playerId: number) => {
    return execute(StatQueries.createStat,
        [playerId, stats.name, stats.img, stats.currentTeam, stats.age, stats.height, stats.weight, stats.exp,
            stats.college, stats.year, stats.team, stats.gp, stats.points,stats.rank, stats.att, stats.rushYd,
            stats.rushYpc, stats.rushTd, stats.tar, stats.rec, stats.recYd, stats.recYpt, stats.recYpc,
            stats.recTd, stats.fum, stats.lost]);
};

export const updateStat = async (stats: Stats) => {
    return execute<Stats[]>(StatQueries.updateStat,
        [stats.name, stats.img, stats.currentTeam, stats.age, stats.height, stats.weight, stats.exp, 
            stats.college, stats.year, stats.team, stats.gp, stats.points, stats.rank, stats.att, stats.rushYd,
            stats.rushYpc, stats.rushTd, stats.tar, stats.rec, stats.recYd, stats.recYpt, stats.recYpc, 
            stats.recTd, stats.fum, stats.lost, stats.playerId])
};