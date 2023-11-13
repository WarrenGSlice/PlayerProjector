import { execute } from "../services/mysql.connector";
import { Players } from "./players.model";
import { playerQueries } from "./players.queries";

export const readPlayers = async () => {
    return execute<Players[]>(playerQueries.readPlayers, []);
};