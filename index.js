// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  let result = blocks - 42
  return result < 0? result*-1 : result
};

function distanceFromHqInFeet(blocks){
  let difference = blocks - 42;
  let result = difference*264;
  return result < 0? result*-1 : result;
};
