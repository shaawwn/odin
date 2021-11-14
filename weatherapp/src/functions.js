console.log("Loading function scripts...")


function convertUTC(utcValue, timeFormat) {
    // timeFormat as 12 or 24 hour time, converts UTC value to one of those
    // utc in seconds -> minutes -> hours -> days
    let newDate = new Date(utcValue).toUTCString();
    // console.log("TIME", newDate.split(' ')[4].split(':').slice(0, 2).join(":"))
    return newDate.split(' ')[4].split(":").slice(0,2).join(":")
}

// convertUTC(1636787530 * 1000) // UTC multiplied by 1000

export { convertUTC }