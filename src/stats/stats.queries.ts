export const StatQueries = {
    createStat:`
        INSERT INTO careerstats (playerId, name, img, current_team, age, height, weight, 
                exp, college, year, team, gp, points, rank, att, rush_yd, rush_ypc, rush_td,
                tar, rec, rec_yd, rec_ypt, rec_ypc, rec_td, fum, lost) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `,
    readStats:`
        SELECT 
        playerId AS playerId, name AS name, img AS img, current_team AS currentTeam, age AS age, 
                height AS height, weight AS weight, exp AS exp, college AS college, 
                year AS year, team AS team, gp AS gp, points AS points, rank AS rank, 
                att AS att, rush_yd AS rushYd, rush_ypc AS rushYpc, rush_td AS rushTd, 
                tar AS tar, rec AS rec, rec_yd AS recYd, rec_ypt AS recYpt, 
                rec_ypc AS recYpc, rec_td AS recTd, fum AS fum, lost AS lost
        FROM heroku_2d306ce687fb51a.careerstats
    `,
    readStatsById:`
        SELECT playerId as playerId, name AS name, img AS img, current_team AS currentTeam, 
                age AS age, height AS height, weight AS weight, exp AS exp, college AS college,
                year AS year, team AS team, gp AS gp, points AS points, rank AS rank, 
                att AS att, rush_yd AS rushYd, rush_ypc AS rushYpc, rush_td AS rushTd, 
                tar AS tar, rec AS rec, rec_yd AS recYd, rec_ypt AS recYpt, 
                rec_ypc AS recYpc, rec_td AS recTd, fum AS fum, lost AS lost
        FROM heroku_2d306ce687fb51a.careerstats
        WHERE heroku_2d306ce687fb51a.careerstats.playerId = ?
        `,
    readStatsByName:`
        SELECT playerId as playerId, name AS name, img AS img, current_team AS currentTeam, 
            age AS age, height AS height, weight AS weight, exp AS exp, college AS college,
            year AS year, team AS team, gp AS gp, points AS points, rank AS rank, 
            att AS att, rush_yd AS rushYd, rush_ypc AS rushYpc, rush_td AS rushTd, 
            tar AS tar, rec AS rec, rec_yd AS recYd, rec_ypt AS recYpt, 
            rec_ypc AS recYpc, rec_td AS recTd, fum AS fum, lost AS lost
        FROM heroku_2d306ce687fb51a.careerstats
        WHERE heroku_2d306ce687fb51a.careerstats.name = ?
        `,
    updateStat:`
            UPDATE heroku_2d306ce687fb51a.careerstats
            SET name = ?, img =?, current_team = ?, age = ?, height = ?, weight = ?, 
                exp = ?, college = ?, year = ?, team = ?, gp = ?, points = ?, rank = ?, 
                att = ?, rush_yd = ?, rush_ypc = ?, rush_td = ?, tar = ?, rec = ?, 
                rec_yd = ?, rec_ypt = ?, rec_ypc = ?, rec_td = ?, fum = ?, lost = ?
            WHERE id = ?
    `,
    deleteStat:`
        DELETE FROM heroku_2d306ce687fb51a.careerstats
        WHERE playerId = ?
        `,
}