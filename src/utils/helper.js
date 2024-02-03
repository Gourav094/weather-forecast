
export function CurrentTime() {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date();
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    return `${dayName}, ${dayOfMonth} ${monthName}`;
}


export function TimeZone(time) {
    const unixTimestamp = time * 1000;

    // Create a new Date object with the Unix timestamp
    const date = new Date(unixTimestamp);

    // Get hours, minutes, and AM/PM
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;

    // Format hours and minutes
    return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}