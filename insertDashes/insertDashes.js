
function insertDash(num) {
  //code me
  let nums = num.toString().split('');
  let oddDashed = nums[0];
  console.log(nums);
  console.log(oddDashed);
  for (let i = 1; i<nums.length; i++)  {
    let currentNumber = nums[i];
    let prevNumber = nums[i-1];
    if (currentNumber % 2 && prevNumber % 2) {
      oddDashed += '-';   
    }
    oddDashed += currentNumber;
  }

return oddDashed;
}
