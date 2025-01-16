function getSeconds(timeDiff: number): number {
    return Math.floor(timeDiff / 1000);
}

function getMinutes(timeDiff: number) : number{
    return Math.floor(timeDiff / 1000 / 60);
}

function getHours(timeDiff: number) : number{
    return Math.floor(timeDiff / 1000 / 60 / 60);
}

function getDays(timeDiff: number) : number{
    return Math.floor(timeDiff / 1000 / 60 / 60 / 24);
}

function getWeeks(timeDiff: number) : number{
    return Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 7);
}

export default function getDuration(date: Date) {
    const now = new Date(new Date().toLocaleString('en', {timeZone: 'Asia/Singapore'}))
    const timeDiff = now.getTime() - date.getTime()
    const seconds = getSeconds(timeDiff);
    const minutes = getMinutes(timeDiff);
    const hours = getHours(timeDiff);
    const days = getDays(timeDiff);
    const weeks = getWeeks(timeDiff);
    if (seconds <= 1) {
        return "Now"
    } else if (minutes < 1) {
        return seconds + " seconds";
    } else if (getMinutes(timeDiff) == 1) {
        return "1 minute"
    } else if (getHours(timeDiff) < 1) {
        return minutes + " minutes"
    } else if (getHours(timeDiff) == 1) {
        return "1 hour"
    } else if (getDays(timeDiff) < 1) {
        return hours + " hours"
    } else if (getDays(timeDiff) == 1) {
        return "1 day"
    } else if (getWeeks(timeDiff) < 1) {
        return days + "days"
    } else if (getWeeks(timeDiff) == 1) {
        return "1 week"
    } else {
        return weeks + "weeks"
    }
}