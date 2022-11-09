export function numMatch(num1, num2) {
  if (num1 === num2) {
    return true;
  } else 
    return false;
}

export function addTen(num1, num2) {
  const add = num1 + num2;
  if(add === 10) {
    return true;
  } else
    return false;
}

export function numArrayMatch(numArray) {
  let result = [];
  let object = {};
  
  numArray.forEach(function (item) {
    if(!object[item])
      object[item] = 0;
    object[item] += 1;
  });

  for (const prop in object) {
    if(object[prop] >= 2) {
      result.push(prop);
    }
  }
  return result;
}