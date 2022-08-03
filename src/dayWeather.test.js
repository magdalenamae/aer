import { render, screen, cleanup } from '@testing-library/react';
import DayWeather from './DayWeather';


test("Expects day to be object", () => {
  const mockWeatherData = {
    City: "Melbourne",
    day: [
      {
          "dt": 1659452400,
          "main": {
              "temp": 286.57,
              "feels_like": 285.46,
              "temp_min": 285.06,
              "temp_max": 286.57,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 1001,
              "humidity": 57,
              "temp_kf": 1.51
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 33
          },
          "wind": {
              "speed": 11.41,
              "deg": 8,
              "gust": 22.18
          },
          "visibility": 10000,
          "pop": 0.49,
          "rain": {
              "3h": 0.17
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-08-02 15:00:00"
      },
      {
          "dt": 1659463200,
          "main": {
              "temp": 285.39,
              "feels_like": 284.47,
              "temp_min": 284.43,
              "temp_max": 285.39,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 1000,
              "humidity": 69,
              "temp_kf": 0.96
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 67
          },
          "wind": {
              "speed": 9.19,
              "deg": 359,
              "gust": 21.33
          },
          "visibility": 10000,
          "pop": 0.52,
          "rain": {
              "3h": 0.31
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-08-02 18:00:00"
      },
      {
          "dt": 1659474000,
          "main": {
              "temp": 284.25,
              "feels_like": 283.53,
              "temp_min": 284.25,
              "temp_max": 284.25,
              "pressure": 1003,
              "sea_level": 1003,
              "grnd_level": 1000,
              "humidity": 81,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 97
          },
          "wind": {
              "speed": 8.15,
              "deg": 2,
              "gust": 16.34
          },
          "visibility": 10000,
          "pop": 0.54,
          "rain": {
              "3h": 0.54
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2022-08-02 21:00:00"
      },
      {
          "dt": 1659484800,
          "main": {
              "temp": 287.72,
              "feels_like": 286.9,
              "temp_min": 287.72,
              "temp_max": 287.72,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 1000,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 48
          },
          "wind": {
              "speed": 7.3,
              "deg": 342,
              "gust": 15.19
          },
          "visibility": 10000,
          "pop": 0.5,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-08-03 00:00:00"
      },
      {
          "dt": 1659495600,
          "main": {
              "temp": 290.77,
              "feels_like": 289.87,
              "temp_min": 290.77,
              "temp_max": 290.77,
              "pressure": 1003,
              "sea_level": 1003,
              "grnd_level": 999,
              "humidity": 49,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 7.26,
              "deg": 336,
              "gust": 14.24
          },
          "visibility": 10000,
          "pop": 0.09,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2022-08-03 03:00:00"
      }
  ]
    
  };

  render(<DayWeather day={mockWeatherData.day} />);
});