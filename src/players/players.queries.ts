export const playerQueries = {
    readPlayers:`
    SELECT
        DISTINCT name AS players
    FROM heroku_2d306ce687fb51a.runningbacks
    `
};