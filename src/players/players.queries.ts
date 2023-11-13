export const playerQueries = {
    readPlayers:`
    SELECT
        DISTINCT name AS players
    FROM playerprojector.runningbacks
    `
};