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
  let distance = distanceFromHqInFeet(endBlock) - distanceFromHqInFeet(blocks);
  let fare;
  switch (distance){
  case <= 400:
    fare = 0;
    break;
  }
}
