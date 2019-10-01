/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
  const basicProgramming = 500;
  const advancedProgramming = 800;
  let weeks = 0;

  if (knowsProgramming) {
    weeks = Math.ceil(advancedProgramming / config[focus]);
  } else {
    weeks =  Math.ceil((basicProgramming + advancedProgramming) / config[focus]);
  }

  return weeks;
};