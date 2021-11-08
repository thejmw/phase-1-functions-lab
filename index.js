// Code your solution in this file!

const HQ = 42
const oneBlockInFeet = 264

function distanceFromHqInBlocks(destination) {
    if (destination > HQ) {
        return destination - HQ
    } else if (destination < HQ) {
        return HQ - destination
    }
}

function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * oneBlockInFeet
}

function distanceTravelledInFeet(destination1 , destination2){
    if (destination1 < destination2){
        return (destination2 - destination1) * oneBlockInFeet
    } else if (destination1 > destination2) {
        return (destination1 - destination2) * oneBlockInFeet
    }
}


function calculatesFarePrice(start, destination) {
    let totalFeetTraveled = distanceTravelledInFeet(start, destination)
    
    if (totalFeetTraveled <= 400) {
        return 0
    } else if (totalFeetTraveled > 400 && totalFeetTraveled <= 2000){
        const distanceInFeet = totalFeetTraveled - 400
        return distanceInFeet * .02
    } else if (totalFeetTraveled > 2000 && totalFeetTraveled < 2500){
        return 25
    } else if (totalFeetTraveled > 2500){
        return "cannot travel that far"
    }
}
    console.log(calculatesFarePrice(34, 32))
  // } else if (start > destination){
    //     console.log (destination)
    //     return () * 2
    // } 
/**
 * if start larger destination
 * subtract start destination
 * multiply by oneBlockInFeet
 * subtract 400
 * difference multiply .02
 */



