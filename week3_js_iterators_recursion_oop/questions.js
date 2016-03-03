function drop(arr,num){
  if(num > arr.length) return [];
  if(num <= 0) return arr.slice();
  return arr.slice(num);
}

function join(val,operator){
  if (!val) return "";
  return Array.from(val).reduce(function(start,next){
    return start+= next+operator;
  },"");
}

function pluck(arr,key){
  return arr.reduce(function(start,next){
    start.push(next[key]);
    return start;
  },[]);
}

function repeat(val,num){
  if(num <= 0) return "";
  if(num === 1) return val;
  return val.toString() + repeat(val,num-1);
}

function containsMoreThanOne(val,el,count){
    count = count || 0;
    if(count === 2) return true;
    var position = val.indexOf(el);
    if(position === -1) return false;
    else {
        count++;
        return containsMoreThanOne(val.slice(position), el,count);
    }
}

function letterCount(string){
  return string.split("").reduce(function(start,next){
    if(start[next]) start[next]++;
    else start[next] = 1;
    return start;
  },{});
}

function flatten(arr){
  return arr.reduce(function(start,next){
    return start.concat(next);
  },[]);
}

function flattenDeep(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? flattenDeep(b) : b);
  }, []);
}

module.exports = {
  drop,
  join,
  pluck,
  repeat,
  containsMoreThanOne,
  letterCount,
  flatten,
  flattenDeep
};