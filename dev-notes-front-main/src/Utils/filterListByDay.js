import getDayMonth from "./getDayMonth";
import getDayWeek from "./getDayWeek";
import getMonth from "./getMonth";

function filterListByDay(list, month, weekDay, MonthDay){
    let newList = [];

    list.map(task=>{
        if(getDayWeek(task.date_begin) === weekDay &&
        getDayMonth(task.date_begin) === MonthDay &&
        getMonth(task.date_begin) === month) 
        {
           newList.push(task) 
        }
    })

    return newList
}

export default filterListByDay