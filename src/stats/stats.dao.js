"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStat = exports.readStatsByName = exports.readStatsById = exports.updateStat = exports.createStat = exports.readStats = void 0;
const mysql_connector_1 = require("../services/mysql.connector");
const stats_queries_1 = require("./stats.queries");
const readStats = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(stats_queries_1.StatQueries.readStats, []);
});
exports.readStats = readStats;
const createStat = (stats) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(stats_queries_1.StatQueries.createStat, [stats.name, stats.img, stats.currentTeam, stats.age, stats.height, stats.weight, stats.exp,
        stats.college, stats.year, stats.team, stats.gp, stats.points, stats.ranking, stats.att, stats.rushYd,
        stats.rushYpc, stats.rushTd, stats.tar, stats.rec, stats.recYd, stats.recYpt, stats.recYpc,
        stats.recTd, stats.fum, stats.lost]);
});
exports.createStat = createStat;
const updateStat = (stats) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(stats_queries_1.StatQueries.updateStat, [stats.name, stats.img, stats.currentTeam, stats.age, stats.height, stats.weight, stats.exp,
        stats.college, stats.year, stats.team, stats.gp, stats.points, stats.ranking, stats.att, stats.rushYd,
        stats.rushYpc, stats.rushTd, stats.tar, stats.rec, stats.recYd, stats.recYpt, stats.recYpc,
        stats.recTd, stats.fum, stats.lost, stats.playerId]);
});
exports.updateStat = updateStat;
const readStatsById = (playerId) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(stats_queries_1.StatQueries.readStatsById, [playerId]);
});
exports.readStatsById = readStatsById;
const readStatsByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(stats_queries_1.StatQueries.readStatsByName, [name]);
});
exports.readStatsByName = readStatsByName;
const deleteStat = (playerId) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, mysql_connector_1.execute)(stats_queries_1.StatQueries.deleteStat, [playerId]);
});
exports.deleteStat = deleteStat;
//# sourceMappingURL=stats.dao.js.map