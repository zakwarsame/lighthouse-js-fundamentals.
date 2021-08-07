function lastIndexOf(arr, num) {
    let soln = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === num) {
        soln = i;
        return soln;
      } 
    } {
      return soln;
    }
  }