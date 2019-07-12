let formateTime = (minutes) => {
    let timeMinutes = minutes % 60;
    minutes -= timeMinutes;
    minutes /= 60;
    let timeHours = minutes % 24;
    minutes -= timeHours;
    minutes /= 24;
    let timeDays = minutes;
    let time = `${timeDays} day(s) ${timeHours} hour(s) ${timeMinutes} minute(s)`
    return time;
 }
 console.log(formateTime(179))