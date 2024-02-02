export function DayZone(timezoneOffsetSeconds) {
    // Get the current time in UTC
    const currentTimeUtc = new Date();
    // Calculate the offset in milliseconds
    const offsetMilliseconds = timezoneOffsetSeconds * 1000;
    // Apply the offset to get the local time
    const currentTimeLocal = new Date(currentTimeUtc.getTime() + offsetMilliseconds);

    // Format the date and time
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDateTime = currentTimeLocal.toLocaleString('en-US', options);
    return formattedDateTime
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