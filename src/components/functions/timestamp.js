
//function for making timestamp serializable

const newTime = (timestamp) => {
    let milliseconds ;
    if(  timestamp){
    milliseconds = timestamp.seconds * 1000  + timestamp.nanoseconds / 1000000 ; 
    const full_date  =  new Date(milliseconds) ;
    return { date : (full_date.getDate()) , month : (full_date.getMonth() + 1) , year : (full_date.getFullYear()) ,
                    hour : (full_date.getHours())  , minutes : (full_date.getMinutes()), 
    }
    } else {
        console.log("wrong date and time name") ;
        return alert("timestamp not available or unknown error") ;
    }
 }

 export {newTime}