// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if (blocks === 43){
    let distance = 1
    return distance
  }
  else if (blocks > 43){
    let distance = blocks - 43
    return distance
  }
  else if (blocks < 43){
    let distance = 43 - blocks
    return distance
  }

}
function distanceFromHqlnFeet(blocks){
  let distanceInFeet = (distanceFromHqInBlocks()*12);
    return distanceInFeet;
}
