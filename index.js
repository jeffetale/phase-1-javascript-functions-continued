// code your solution here
function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}

function mondayWork(doWhat = "go to the office"){
    return `This Monday, I will ${doWhat}.`
}
function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
  
    console.log(wrapAdjective("||")("a dedicated programmer"))