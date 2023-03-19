function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//this is a function expression has no function declaration
const mondayWork = function (activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(para1="*") {
    return function (emphatic="special") {
        return `You are ${para1}${emphatic}${para1}!`
    }
}