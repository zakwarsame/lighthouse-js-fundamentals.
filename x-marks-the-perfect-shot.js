const finalPosition = function (moves) {
    let move
    // Your code in here
    let position = [0, 0];
    for (move of moves) {
      if (move === 'north') {
        position[1] = position[1] + 1;
      }
      if (move === 'south') {
        position[1] = position[1] - 1;
      }
      if (move === 'east') {
        position[0] = position[0] + 1;
      }
      if (move === 'west') {
        position[0] = position[0] - 1;
      }
    }
    return position;
  }