// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  let result = blocks - 42
  return result < 0? result*-1 : result
};

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) *264;
};

function distanceTravelledInFeet(blocks, endBlock){
  let distance = 0;
  distance = (endBlock - blocks) < 0? blocks - endBlock : endBlock - blocks;
  return distance * 264;
};

function calculatesFarePrice(blocks, endBlock){
  let fare = 0;
  let fareCode;
  distance = distanceTravelledInFeet(blocks, endBlock);
  if (distance <= 264){fareCode = 1};
  else if (distance > 400 && distance < 2000){fareCode = 2};
  switch(fareCode){
    case 1:
    fare = 0;
    break;
    case 2:
    fare =
  };
  return fare;



};
