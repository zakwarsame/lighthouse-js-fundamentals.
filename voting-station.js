const chooseStations = function (stations) {
    // Your code in here ...
    let destination = [];
    for (let station of stations){
      if (station[1] >= 20 && station[2] !== 'restaurant'){
        destination.push(station[0]);
      }
    }
    return destination;
  }
  