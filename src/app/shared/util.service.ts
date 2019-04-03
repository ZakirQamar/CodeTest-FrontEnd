import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

  getPostedTime(utc_timestamp) {
    let result = '';
    const currentDate = new Date();
    let date, year, month, day, hour, second;

    date = new Date(utc_timestamp * 1000);
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay();
    hour = date.getHours();
    second = date.getSeconds();

    if (year < currentDate.getFullYear()) {
      result = (currentDate.getFullYear() - year) + ' year';
    } else if (month < currentDate.getMonth()) {
      result = (currentDate.getMonth() - month) + ' month';
    } else if (day < currentDate.getDay()) {
      result = (currentDate.getDay() - day) + ' day';
    } else if (hour < currentDate.getHours()) {
      result = (currentDate.getHours() - hour) + ' hour';
    } else if (second < currentDate.getSeconds()) {
      result = (currentDate.getSeconds() - second) + ' second';
    }

    if (!result.startsWith('1 ')) {
      result = result + 's';
    }

    return result;
  }
}
