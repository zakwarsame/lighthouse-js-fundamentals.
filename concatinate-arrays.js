function concat(arr1, arr2) {
    let ans = [];
    for (let i = 0; i <= arr1.length - 1; i++) {
      ans.push(arr1[i]);
    } for (let i = 0; i <= arr2.length - 1; i++) {
      ans.push(arr2[i]);
    } return ans;
  }