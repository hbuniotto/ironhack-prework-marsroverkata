const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [
    {
      x: 0, 
      y: 0
    }
  ]
};

function turnLeft(rover){
  const previousDirection = rover.direction;
  switch(rover.direction) {
    case "N": 
      rover.direction = "W";
      break;
    case "S": 
      rover.direction = "E";
      break;
    case "E": 
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
}

function turnRight(rover){
  const previousDirection = rover.direction;
  switch(rover.direction) {
    case "N": 
      rover.direction = "E";
      break;
    case "S": 
      rover.direction = "W";
      break;
    case "E": 
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover){
    switch (rover.direction) {
      case "N":
        if (rover.y !== 0) {
          rover.y -= 1;
        }
        break;
      case "S":
        if (rover.y !== 9) {
          rover.y += 1; 
        }
        break;
      case "E":
        if (rover.x !== 9) {
          rover.x += 1; 
        }
        break;
      case "W": 
        if (rover.x !== 0) {
          rover.x -= 1; 
        }
        break;
  } 
  rover.travelLog.push ({
    x: rover.x,
    y: rover.y
  });
}

function convertDirection (directionInitial) {
  switch(directionInitial) {
    case "N":
    return "North";
    case "S":
    return "South";
    case "E":
    return "East";
    case "W":
    return "West";
  }
}

function receiveCommand (commands) {
  let arrayOfCommands = commands.split("");
    for (let i = 0; i < arrayOfCommands.length; i++) {
      switch (arrayOfCommands [i]) {
        case "f":
          moveForward(rover);
        break;
        case "r":
          turnRight(rover);
        break;
        case "l":
          turnLeft(rover);
        break;
      }
    }
    travelLogHistory();
}

function travelLogHistory() {
  console.log('The rover has been at: ');
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log (`[${rover.travelLog[i].x}, ${rover.travelLog[i].y}]`)
  }
}

receiveCommand('rfrffffffflfff');