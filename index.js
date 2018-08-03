// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  let result = blocks - 42
  return result < 0? result*-1 : result
};

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) *264;
};

function distanceTravelledInFeet(blocks, endBlock){
  return distanceFromHqInFeet(endBlock) - distanceFromHqInFeet(blocks);
};

function calculatesFarePrice(blocks, endBlock){
  let fare = 0;
  let fareCode;
  distance = distanceTravelledInFeet(blocks, endBlock);
  if (distance < 400){fareCode = 1};
  if (distance )

};
