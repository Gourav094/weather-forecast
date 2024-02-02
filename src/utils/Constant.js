export const API_KEY = "6c28958e0f905c417a9fb9af93da0a5f"

export const IMG_CDN = "https://openweathermap.org/img/wn/"

export const KELVIN_TEMP = 280


export function ConvertTIme(timestamp) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(timestamp);
    const dayName = days[date.getDay()];
    return dayName;
}

