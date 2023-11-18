import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Stats } from "./stats.model";
import { StatQueries } from "./stats.queries";

export const readStats = async () => {
    return execute<Stats[]>(StatQueries.readStats,[]);
};

export const createStat = async (stats: Stats) => {
    return execute<OkPacket>(StatQueries.createStat,
        [stats.name, stats.img, stats.currentTeam, stats.age, stats.height, stats.weight, stats.exp,
            stats.college, stats.year, stats.team, stats.gp, stats.points,stats.rank, stats.att, stats.rushYd,
            stats.rushYpc, stats.rushTd, stats.tar, stats.rec, stats.recYd, stats.recYpt, stats.recYpc,
            stats.recTd, stats.fum, stats.lost]);
};

export const updateStat = async (stats: Stats) => {
    return execute<OkPacket>(StatQueries.updateStat,
        [stats.name, stats.img, stats.currentTeam, stats.age, stats.height, stats.weight, stats.exp, 
            stats.college, stats.year, stats.team, stats.gp, stats.points, stats.rank, stats.att, stats.rushYd,
            stats.rushYpc, stats.rushTd, stats.tar, stats.rec, stats.recYd, stats.recYpt, stats.recYpc, 
            stats.recTd, stats.fum, stats.lost, stats.playerId])
};

export const readStatsById = async (playerId: number) => {
    return execute<Stats[]>(StatQueries.readStatsById, [playerId]);
};

export const readStatsByName = async (name: string) => {
    return execute<Stats[]>(StatQueries.readStatsByName, [name]);
};

export const deleteStat = async (playerId: number) => {
    return execute<OkPacket>(StatQueries.deleteStat, [playerId]);
};