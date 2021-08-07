const judgeVegetable = function (vegetables, metric) {
    // Your code in here ...
    return vegetables.sort((a, b) => b[metric] - a[metric])[0].submitter;
  } 