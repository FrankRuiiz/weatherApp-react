const weekday = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Frieday',
    '6': 'Saturday',
}

const month = {
    '0': 'Jan',
    '1': 'Feb',
    '2': 'Mar',
    '3': 'Apr',
    '4': 'May',
    '5': 'Jun',
    '6': 'Jul',
    '0': 'Aug',
    '1': 'Sep',
    '2': 'Oct',
    '3': 'Nov',
    '4': 'Dec',
}

module.exports = {
    getFormattedDate(dt) {
        let output = '';
        const date = new Date(dt*1000);
        return output += weekday[date.getDay()] + ', ' + month[date.getMonth()] + ' ' + date.getDate();
    }
}