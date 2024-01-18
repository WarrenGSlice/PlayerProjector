export const runningBackQueries = {
    readRunningBacks: `
    SELECT
      RB_ID as rbId, RANKING as ranking, NAME as name, 
      TEAM as team, BYE_WEEK as byeWeek, POINTS as points,
      RUSH_ATTEMPTS as rushAttempts, RUSH_YARDS as rushYards, RUSH_TDS as rushTds,
      RECEPTIONS as recs, REC_YARDS as recYards, REC_TDS as recTds,
      FUM as fum, FUM_LOST as fumLost, FIRST_DOWNS as firstDowns,
      100_YARD_GAME as hundredGame, 200_YARD_GAME as twoHundredGame, 40_YARD_PLAY as fourtyPlay,
      40_YARD_TDS as fourtyTd, PASS_COMPLETED as passComp, PASS_YARDS as passYards,
      PASS_TDS as passTds, TARGET_SHARE as targetShare, POINTS_GAME as pointsGame
    FROM bhxhr5tkthkjr1rbfskg.runningbacks
    `,
readRunningBacksById: `
    SELECT
        RB_ID as rbId, RANKING as ranking, NAME as name, 
        TEAM as team, BYE_WEEK as byeWeek, POINTS as points,
        RUSH_ATTEMPTS as rushAttempts, RUSH_YARDS as rushYards, RUSH_TDS as rushTds,
        RECEPTIONS as recs, REC_YARDS as recYards, REC_TDS as recTds,
        FUM as fum, FUM_LOST as fumLost, FIRST_DOWNS as firstDowns,
        100_YARD_GAME as hundredGame, 200_YARD_GAME as twoHundredGame, 40_YARD_PLAY as fourtyPlay,
        40_YARD_TDS as fourtyTd, PASS_COMPLETED as passComp, PASS_YARDS as passYards,
        PASS_TDS as passTds, TARGET_SHARE as targetShare, POINTS_GAME as pointsGame 
    FROM bhxhr5tkthkjr1rbfskg.runningbacks
    WHERE bhxhr5tkthkjr1rbfskg.runningbacks.RB_ID = ?
    `,
readRunningBacksByName: `
    SELECT
        RB_ID as rbId, RANKING as ranking, NAME as name, 
        TEAM as team, BYE_WEEK as byeWeek, POINTS as points,
        RUSH_ATTEMPTS as rushAttempts, RUSH_YARDS as rushYards, RUSH_TDS as rushTds,
        RECEPTIONS as recs, REC_YARDS as recYards, REC_TDS as recTds,
        FUM as fum, FUM_LOST as fumLost, FIRST_DOWNS as firstDowns,
        100_YARD_GAME as hundredGame, 200_YARD_GAME as twoHundredGame, 40_YARD_PLAY as fourtyPlay,
        40_YARD_TDS as fourtyTd, PASS_COMPLETED as passComp, PASS_YARDS as passYards,
        PASS_TDS as passTds, TARGET_SHARE as targetShare, POINTS_GAME as pointsGame 
    FROM bhxhr5tkthkjr1rbfskg.runningbacks
    WHERE bhxhr5tkthkjr1rbfskg.runningbacks.NAME = ?
    `,
readRunningBacksBySearchTerm: `
    SELECT
        RB_ID as rbId, RANKING as ranking, NAME as name, 
        TEAM as team, BYE_WEEK as byeWeek, POINTS as points,
        RUSH_ATTEMPTS as rushAttempts, RUSH_YARDS as rushYards, RUSH_TDS as rushTds,
        RECEPTIONS as recs, REC_YARDS as recYards, REC_TDS as recTds,
        FUM as fum, FUM_LOST as fumLost, FIRST_DOWNS as firstDowns,
        100_YARD_GAME as hundredGame, 200_YARD_GAME as twoHundredGame, 40_YARD_PLAY as fourtyPlay,
        40_YARD_TDS as fourtyTd, PASS_COMPLETED as passComp, PASS_YARDS as passYards,
        PASS_TDS as passTds, TARGET_SHARE as targetShare, POINTS_GAME as pointsGame 
    FROM bhxhr5tkthkjr1rbfskg.runningbacks
    WHERE bhxhr5tkthkjr1rbfskg.runningbacks.NAME LIKE ?
    `,
readRunningBacksByAttempts: `
    SELECT
        RB_ID as rbId, RANKING as ranking, NAME as name, 
        TEAM as team, BYE_WEEK as byeWeek, POINTS as points,
        RUSH_ATTEMPTS as rushAttempts, RUSH_YARDS as rushYards, RUSH_TDS as rushTds,
        RECEPTIONS as recs, REC_YARDS as recYards, REC_TDS as recTds,
        FUM as fum, FUM_LOST as fumLost, FIRST_DOWNS as firstDowns,
        100_YARD_GAME as hundredGame, 200_YARD_GAME as twoHundredGame, 40_YARD_PLAY as fourtyPlay,
        40_YARD_TDS as fourtyTd, PASS_COMPLETED as passComp, PASS_YARDS as passYards,
        PASS_TDS as passTds, TARGET_SHARE as targetShare, POINTS_GAME as pointsGame 
    FROM bhxhr5tkthkjr1rbfskg.runningbacks
    ORDER BY RUSH_ATTEMPTS DESC
    `,
readRunningBacksByPoints: `
    SELECT
        RB_ID as rbId, RANKING as ranking, NAME as name, 
        TEAM as team, BYE_WEEK as byeWeek, POINTS as points,
        RUSH_ATTEMPTS as rushAttempts, RUSH_YARDS as rushYards, RUSH_TDS as rushTds,
        RECEPTIONS as recs, REC_YARDS as recYards, REC_TDS as recTds,
        FUM as fum, FUM_LOST as fumLost, FIRST_DOWNS as firstDowns,
        100_YARD_GAME as hundredGame, 200_YARD_GAME as twoHundredGame, 40_YARD_PLAY as fourtyPlay,
        40_YARD_TDS as fourtyTd, PASS_COMPLETED as passComp, PASS_YARDS as passYards,
        PASS_TDS as passTds, TARGET_SHARE as targetShare, POINTS_GAME as pointsGame 
    FROM bhxhr5tkthkjr1rbfskg.runningbacks
    ORDER BY POINTS DESC
    `,
createRunningBack: `
    INSERT INTO RUNNINGBACKS(RANKING, NAME, TEAM, BYE_WEEK, POINTS, RUSH_ATTEMPTS, 
        RUSH_YARDS, RUSH_TDS, RECEPTIONS, REC_YARDS, REC_TDS, FUM, 
        FUM_LOST, FIRST_DOWNS, 100_YARD_GAME, 200_YARD_GAME, 40_YARD_PLAY, 40_YARD_TDS, 
        PASS_COMPLETED, PASS_YARDS, PASS_TDS, TARGET_SHARE, POINTS_GAME)
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `,
updateRunningBack: `
    UPDATE bhxhr5tkthkjr1rbfskg.runningbacks
    SET RANKING = ?, NAME = ?, TEAM = ?, BYE_WEEK = ?, POINTS = ?, RUSH_ATTEMPTS = ?, 
        RUSH_YARDS = ?, RUSH_TDS = ?, RECEPTIONS = ?, REC_YARDS = ?, REC_TDS = ?, FUM = ?, 
        FUM_LOST = ?, FIRST_DOWNS = ?, 100_YARD_GAME = ?, 200_YARD_GAME = ?, 40_YARD_PLAY = ?, 40_YARD_TDS = ?, 
        PASS_COMPLETED = ?, PASS_YARDS = ?, PASS_TDS = ?, TARGET_SHARE = ?, POINTS_GAME = ?
    WHERE RB_ID = ?
    `,
deleteRunningBack: `
    DELETE FROM bhxhr5tkthkjr1rbfskg.runningbacks
    WHERE RB_ID = ?
    `,
};