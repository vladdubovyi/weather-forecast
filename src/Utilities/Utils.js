export default class Utils {
  static NormalizeHours(hour) {
    if (hour <= 12) {
      return hour + "am";
    }
    if (hour - 12 > 12) {
      return hour - 24 + "am";
    }
    return hour - 12 + "pm";
  }

  static GetNormalDateString(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
    hours += ":";
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return hours + minutes;
  }

  static GetCelciumFromKelvin(temp) {
    return Math.floor(temp - 273);
  }
}
