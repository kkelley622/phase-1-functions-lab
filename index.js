// Code your solution in this file!

const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(block) {
    //returns the number of blocks given a value
    if (block < 42) {
        return hq - block
    } else {
        return block -hq
    }
}

function distanceFromHqInFeet(block) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(block) * feet;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return (start - destination) * feet;
    } else {
        return (destination -start) * feet;
    }
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * .02);
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
}