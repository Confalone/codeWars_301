function double(array) {
    let newArr = [];
    let newNum = 0;
    for(let i = 0; i < array.length; i++){
      newNum = 0;
      newNum = array[i] * 2;
      newArr.push(newNum);
    }
    return newArr;
 }