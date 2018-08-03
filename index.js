// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  let result = blocks - 42
  return result < 0? result*-1 : result
};

function distanceFromHqlnFeet(blocks){
  let distanceInFeet = (distanceFromHqlnBlocks() * 264);
  return distanceInFeet;
};
