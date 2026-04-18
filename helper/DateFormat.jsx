const DateFormat = ({date}) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const myDate = new Date(date)
    return Intl.DateTimeFormat('en', options).format(myDate)
}

export default DateFormat;