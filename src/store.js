import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather_default_location: {
      Version: 1,
      Key: "215854",
      Type: "City",
      Rank: 31,
      LocalizedName: "Tel Aviv",
      Country: {
        ID: "IL",
        LocalizedName: "Israel",
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv",
      },
    },
    current_weather: [
      {
        LocalObservationDateTime: "2020-05-24T12:50:00+03:00",
        EpochTime: 1590313800,
        WeatherText: "Sunny",
        WeatherIcon: 1,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: { Value: 23.8, Unit: "C", UnitType: 17 },
          Imperial: { Value: 75, Unit: "F", UnitType: 18 },
        },
        RealFeelTemperature: {
          Metric: { Value: 24.8, Unit: "C", UnitType: 17 },
          Imperial: { Value: 77, Unit: "F", UnitType: 18 },
        },
        RealFeelTemperatureShade: {
          Metric: { Value: 21.2, Unit: "C", UnitType: 17 },
          Imperial: { Value: 70, Unit: "F", UnitType: 18 },
        },
        RelativeHumidity: 33,
        IndoorRelativeHumidity: 33,
        DewPoint: {
          Metric: { Value: 6.7, Unit: "C", UnitType: 17 },
          Imperial: { Value: 44, Unit: "F", UnitType: 18 },
        },
        Wind: {
          Direction: { Degrees: 338, Localized: "NNW", English: "NNW" },
          Speed: {
            Metric: { Value: 33.7, Unit: "km/h", UnitType: 7 },
            Imperial: { Value: 21, Unit: "mi/h", UnitType: 9 },
          },
        },
        WindGust: {
          Speed: {
            Metric: { Value: 61.3, Unit: "km/h", UnitType: 7 },
            Imperial: { Value: 38.1, Unit: "mi/h", UnitType: 9 },
          },
        },
        UVIndex: 11,
        UVIndexText: "Extreme",
        Visibility: {
          Metric: { Value: 16.1, Unit: "km", UnitType: 6 },
          Imperial: { Value: 10, Unit: "mi", UnitType: 2 },
        },
        ObstructionsToVisibility: "",
        CloudCover: 6,
        Ceiling: {
          Metric: { Value: 1676, Unit: "m", UnitType: 5 },
          Imperial: { Value: 5500, Unit: "ft", UnitType: 0 },
        },
        Pressure: {
          Metric: { Value: 1012.8, Unit: "mb", UnitType: 14 },
          Imperial: { Value: 29.91, Unit: "inHg", UnitType: 12 },
        },
        PressureTendency: { LocalizedText: "Steady", Code: "S" },
        Past24HourTemperatureDeparture: {
          Metric: { Value: 2, Unit: "C", UnitType: 17 },
          Imperial: { Value: 4, Unit: "F", UnitType: 18 },
        },
        ApparentTemperature: {
          Metric: { Value: 23.3, Unit: "C", UnitType: 17 },
          Imperial: { Value: 74, Unit: "F", UnitType: 18 },
        },
        WindChillTemperature: {
          Metric: { Value: 23.9, Unit: "C", UnitType: 17 },
          Imperial: { Value: 75, Unit: "F", UnitType: 18 },
        },
        WetBulbTemperature: {
          Metric: { Value: 14, Unit: "C", UnitType: 17 },
          Imperial: { Value: 57, Unit: "F", UnitType: 18 },
        },
        Precip1hr: {
          Metric: { Value: 0, Unit: "mm", UnitType: 3 },
          Imperial: { Value: 0, Unit: "in", UnitType: 1 },
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
          PastHour: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
          Past3Hours: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
          Past6Hours: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
          Past9Hours: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
          Past12Hours: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
          Past18Hours: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
          Past24Hours: {
            Metric: { Value: 0, Unit: "mm", UnitType: 3 },
            Imperial: { Value: 0, Unit: "in", UnitType: 1 },
          },
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {
                Value: 20.8,
                Unit: "C",
                UnitType: 17,
              },
              Imperial: { Value: 69, Unit: "F", UnitType: 18 },
            },
            Maximum: {
              Metric: { Value: 23.8, Unit: "C", UnitType: 17 },
              Imperial: { Value: 75, Unit: "F", UnitType: 18 },
            },
          },
          Past12HourRange: {
            Minimum: {
              Metric: { Value: 19.9, Unit: "C", UnitType: 17 },
              Imperial: { Value: 68, Unit: "F", UnitType: 18 },
            },
            Maximum: {
              Metric: { Value: 23.8, Unit: "C", UnitType: 17 },
              Imperial: { Value: 75, Unit: "F", UnitType: 18 },
            },
          },
          Past24HourRange: {
            Minimum: {
              Metric: { Value: 19.9, Unit: "C", UnitType: 17 },
              Imperial: { Value: 68, Unit: "F", UnitType: 18 },
            },
            Maximum: {
              Metric: { Value: 24.9, Unit: "C", UnitType: 17 },
              Imperial: { Value: 77, Unit: "F", UnitType: 18 },
            },
          },
        },
        MobileLink:
          "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        Link:
          "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      },
    ],
    forecast_5d: [
        {
          Date: "2020-05-31T07:00:00+03:00",
          EpochDate: 1590897600,
          Sun: {
            Rise: "2020-05-31T05:36:00+03:00",
            EpochRise: 1590892560,
            Set: "2020-05-31T19:42:00+03:00",
            EpochSet: 1590943320,
          },
          Moon: {
            Rise: "2020-05-31T13:50:00+03:00",
            EpochRise: 1590922200,
            Set: "2020-06-01T02:35:00+03:00",
            EpochSet: 1590968100,
            Phase: "WaxingGibbous",
            Age: 9,
          },
          Temperature: {
            Minimum: { Value: 16.7, Unit: "C", UnitType: 17 },
            Maximum: { Value: 26.0, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperature: {
            Minimum: { Value: 16.8, Unit: "C", UnitType: 17 },
            Maximum: { Value: 29.2, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperatureShade: {
            Minimum: { Value: 16.8, Unit: "C", UnitType: 17 },
            Maximum: { Value: 24.3, Unit: "C", UnitType: 17 },
          },
          HoursOfSun: 13.4,
          DegreeDaySummary: {
            Heating: { Value: 0.0, Unit: "C", UnitType: 17 },
            Cooling: { Value: 3.0, Unit: "C", UnitType: 17 },
          },
          AirAndPollen: [
            {
              Name: "AirQuality",
              Value: 27,
              Category: "Good",
              CategoryValue: 1,
              Type: "Particle Pollution",
            },
            { Name: "Grass", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Mold", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Ragweed", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Tree", Value: 0, Category: "Low", CategoryValue: 1 },
            {
              Name: "UVIndex",
              Value: 12,
              Category: "Extreme",
              CategoryValue: 5,
            },
          ],
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false,
            ShortPhrase: "Sunny and pleasant",
            LongPhrase: "Pleasant with plenty of sunshine",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 16.7, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 341, Localized: "NNW", English: "NNW" },
            },
            WindGust: {
              Speed: { Value: 40.7, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 209, Localized: "SSW", English: "SSW" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 1,
          },
          Night: {
            Icon: 34,
            IconPhrase: "Mostly clear",
            HasPrecipitation: false,
            ShortPhrase: "Mainly clear",
            LongPhrase: "Mainly clear",
            PrecipitationProbability: 1,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 7.4, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 48, Localized: "NE", English: "NE" },
            },
            WindGust: {
              Speed: { Value: 22.2, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 204, Localized: "SSW", English: "SSW" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 20,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        },
        {
          Date: "2020-06-01T07:00:00+03:00",
          EpochDate: 1590984000,
          Sun: {
            Rise: "2020-06-01T05:35:00+03:00",
            EpochRise: 1590978900,
            Set: "2020-06-01T19:42:00+03:00",
            EpochSet: 1591029720,
          },
          Moon: {
            Rise: "2020-06-01T14:56:00+03:00",
            EpochRise: 1591012560,
            Set: "2020-06-02T03:10:00+03:00",
            EpochSet: 1591056600,
            Phase: "WaxingGibbous",
            Age: 10,
          },
          Temperature: {
            Minimum: { Value: 20.7, Unit: "C", UnitType: 17 },
            Maximum: { Value: 26.4, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperature: {
            Minimum: { Value: 19.4, Unit: "C", UnitType: 17 },
            Maximum: { Value: 30.0, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperatureShade: {
            Minimum: { Value: 19.4, Unit: "C", UnitType: 17 },
            Maximum: { Value: 24.8, Unit: "C", UnitType: 17 },
          },
          HoursOfSun: 13.8,
          DegreeDaySummary: {
            Heating: { Value: 0.0, Unit: "C", UnitType: 17 },
            Cooling: { Value: 6.0, Unit: "C", UnitType: 17 },
          },
          AirAndPollen: [
            {
              Name: "AirQuality",
              Value: 46,
              Category: "Good",
              CategoryValue: 1,
              Type: "Ozone",
            },
            { Name: "Grass", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Mold", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Ragweed", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Tree", Value: 0, Category: "Low", CategoryValue: 1 },
            {
              Name: "UVIndex",
              Value: 12,
              Category: "Extreme",
              CategoryValue: 5,
            },
          ],
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false,
            ShortPhrase: "Sunny and nice",
            LongPhrase: "Sunny and nice",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 13.0, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 282, Localized: "WNW", English: "WNW" },
            },
            WindGust: {
              Speed: { Value: 24.1, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 342, Localized: "NNW", English: "NNW" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 2,
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false,
            ShortPhrase: "Clear and warm",
            LongPhrase: "Clear and warm",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 7.4, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 336, Localized: "NNW", English: "NNW" },
            },
            WindGust: {
              Speed: { Value: 20.4, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 42, Localized: "NE", English: "NE" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 4,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        },
        {
          Date: "2020-06-02T07:00:00+03:00",
          EpochDate: 1591070400,
          Sun: {
            Rise: "2020-06-02T05:35:00+03:00",
            EpochRise: 1591065300,
            Set: "2020-06-02T19:43:00+03:00",
            EpochSet: 1591116180,
          },
          Moon: {
            Rise: "2020-06-02T16:03:00+03:00",
            EpochRise: 1591102980,
            Set: "2020-06-03T03:47:00+03:00",
            EpochSet: 1591145220,
            Phase: "WaxingGibbous",
            Age: 11,
          },
          Temperature: {
            Minimum: { Value: 19.5, Unit: "C", UnitType: 17 },
            Maximum: { Value: 31.0, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperature: {
            Minimum: { Value: 18.3, Unit: "C", UnitType: 17 },
            Maximum: { Value: 33.9, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperatureShade: {
            Minimum: { Value: 18.3, Unit: "C", UnitType: 17 },
            Maximum: { Value: 29.4, Unit: "C", UnitType: 17 },
          },
          HoursOfSun: 13.4,
          DegreeDaySummary: {
            Heating: { Value: 0.0, Unit: "C", UnitType: 17 },
            Cooling: { Value: 7.0, Unit: "C", UnitType: 17 },
          },
          AirAndPollen: [
            {
              Name: "AirQuality",
              Value: 101,
              Category: "Unhealthy (Sensitive)",
              CategoryValue: 3,
              Type: "Particle Pollution",
            },
            { Name: "Grass", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Mold", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Ragweed", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Tree", Value: 0, Category: "Low", CategoryValue: 1 },
            {
              Name: "UVIndex",
              Value: 12,
              Category: "Extreme",
              CategoryValue: 5,
            },
          ],
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false,
            ShortPhrase: "Plenty of sunshine",
            LongPhrase:
              "Plenty of sunshine; air quality will be unhealthy for sensitive groups",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 14.8, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 304, Localized: "NW", English: "NW" },
            },
            WindGust: {
              Speed: { Value: 27.8, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 256, Localized: "WSW", English: "WSW" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 0,
          },
          Night: {
            Icon: 35,
            IconPhrase: "Partly cloudy",
            HasPrecipitation: false,
            ShortPhrase: "Partly cloudy",
            LongPhrase: "Partly cloudy",
            PrecipitationProbability: 1,
            ThunderstormProbability: 0,
            RainProbability: 1,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 9.3, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 257, Localized: "WSW", English: "WSW" },
            },
            WindGust: {
              Speed: { Value: 18.5, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 285, Localized: "WNW", English: "WNW" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 26,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        },
        {
          Date: "2020-06-03T07:00:00+03:00",
          EpochDate: 1591156800,
          Sun: {
            Rise: "2020-06-03T05:35:00+03:00",
            EpochRise: 1591151700,
            Set: "2020-06-03T19:44:00+03:00",
            EpochSet: 1591202640,
          },
          Moon: {
            Rise: "2020-06-03T17:12:00+03:00",
            EpochRise: 1591193520,
            Set: "2020-06-04T04:26:00+03:00",
            EpochSet: 1591233960,
            Phase: "WaxingGibbous",
            Age: 12,
          },
          Temperature: {
            Minimum: { Value: 17.7, Unit: "C", UnitType: 17 },
            Maximum: { Value: 25.4, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperature: {
            Minimum: { Value: 17.5, Unit: "C", UnitType: 17 },
            Maximum: { Value: 29.2, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperatureShade: {
            Minimum: { Value: 17.5, Unit: "C", UnitType: 17 },
            Maximum: { Value: 23.9, Unit: "C", UnitType: 17 },
          },
          HoursOfSun: 12.5,
          DegreeDaySummary: {
            Heating: { Value: 0.0, Unit: "C", UnitType: 17 },
            Cooling: { Value: 4.0, Unit: "C", UnitType: 17 },
          },
          AirAndPollen: [
            {
              Name: "AirQuality",
              Value: 46,
              Category: "Good",
              CategoryValue: 1,
              Type: "Ozone",
            },
            { Name: "Grass", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Mold", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Ragweed", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Tree", Value: 0, Category: "Low", CategoryValue: 1 },
            {
              Name: "UVIndex",
              Value: 12,
              Category: "Extreme",
              CategoryValue: 5,
            },
          ],
          Day: {
            Icon: 2,
            IconPhrase: "Mostly sunny",
            HasPrecipitation: false,
            ShortPhrase: "Mostly sunny and pleasant",
            LongPhrase: "Mostly sunny and pleasant",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 13.0, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 289, Localized: "WNW", English: "WNW" },
            },
            WindGust: {
              Speed: { Value: 20.4, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 269, Localized: "W", English: "W" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 14,
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false,
            ShortPhrase: "Clear",
            LongPhrase: "Clear",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 7.4, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 37, Localized: "NE", English: "NE" },
            },
            WindGust: {
              Speed: { Value: 16.7, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 14, Localized: "NNE", English: "NNE" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 0,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        },
        {
          Date: "2020-06-04T07:00:00+03:00",
          EpochDate: 1591243200,
          Sun: {
            Rise: "2020-06-04T05:35:00+03:00",
            EpochRise: 1591238100,
            Set: "2020-06-04T19:44:00+03:00",
            EpochSet: 1591289040,
          },
          Moon: {
            Rise: "2020-06-04T18:21:00+03:00",
            EpochRise: 1591284060,
            Set: "2020-06-05T05:10:00+03:00",
            EpochSet: 1591323000,
            Phase: "WaxingGibbous",
            Age: 13,
          },
          Temperature: {
            Minimum: { Value: 19.1, Unit: "C", UnitType: 17 },
            Maximum: { Value: 28.0, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperature: {
            Minimum: { Value: 17.9, Unit: "C", UnitType: 17 },
            Maximum: { Value: 31.3, Unit: "C", UnitType: 17 },
          },
          RealFeelTemperatureShade: {
            Minimum: { Value: 17.9, Unit: "C", UnitType: 17 },
            Maximum: { Value: 26.3, Unit: "C", UnitType: 17 },
          },
          HoursOfSun: 14.1,
          DegreeDaySummary: {
            Heating: { Value: 0.0, Unit: "C", UnitType: 17 },
            Cooling: { Value: 6.0, Unit: "C", UnitType: 17 },
          },
          AirAndPollen: [
            {
              Name: "AirQuality",
              Value: 59,
              Category: "Moderate",
              CategoryValue: 2,
              Type: "Particle Pollution",
            },
            { Name: "Grass", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Mold", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Ragweed", Value: 0, Category: "Low", CategoryValue: 1 },
            { Name: "Tree", Value: 0, Category: "Low", CategoryValue: 1 },
            {
              Name: "UVIndex",
              Value: 12,
              Category: "Extreme",
              CategoryValue: 5,
            },
          ],
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false,
            ShortPhrase: "Sunny and pleasant",
            LongPhrase: "Pleasant with plenty of sunshine",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 14.8, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 351, Localized: "N", English: "N" },
            },
            WindGust: {
              Speed: { Value: 27.8, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 351, Localized: "N", English: "N" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 0,
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false,
            ShortPhrase: "Clear",
            LongPhrase: "Clear",
            PrecipitationProbability: 0,
            ThunderstormProbability: 0,
            RainProbability: 0,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: { Value: 11.1, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 10, Localized: "N", English: "N" },
            },
            WindGust: {
              Speed: { Value: 24.1, Unit: "km/h", UnitType: 7 },
              Direction: { Degrees: 354, Localized: "N", English: "N" },
            },
            TotalLiquid: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Rain: { Value: 0.0, Unit: "mm", UnitType: 3 },
            Snow: { Value: 0.0, Unit: "cm", UnitType: 4 },
            Ice: { Value: 0.0, Unit: "mm", UnitType: 3 },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 1,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        },
      ],
    weather_units_celsius: true,
    show_search_place: false,
    snackbar: {
      visibile: false,
      color: "success",
      text: "",
    },
    location_list: [],
  },
  mutations: {
    showSnackbar(state, payload) {
      state.snackbar.visibile = true;
      state.snackbar.color = payload.color;
      state.snackbar.text = payload.text || "";
    },
    update_forecast(state, payload) {
      state.forecast_5d = payload;
    },
  },
  actions: {
    async get_geolocation({state}){
        const url = "/locations/v1/cities/geoposition/search";
        new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        }).then(async position=>{
            
            if(typeof position !== "undefined" && position.coords !== "undefined"){
                let lat = position.coords.latitude
                let lon = position.coords.longitude
             const post_res = await service.getWeather(url, {q:`${lat},${lon}`});
             
             this.state.weather_default_location = post_res.data;
             this.dispatch("accu_weather_current_weather", {
                locationKey: post_res.data.Key
              });
            }

        })
    },
    async accu_weather_location_ac({ commit }, payload) {
      const url = "/locations/v1/cities/autocomplete";
      const post_res = await service.getWeather(url, payload);
      this.dispatch("CHECK_ACC_WEATHER_ANS", {
        payload: post_res,
        sender: "accu_weather_location_ac",
      });
    },
    async accu_weather_current_weather({ state }, payload = {}) {
      const locationKey =
        payload.locationKey || state.weather_default_location.Key;
      this.dispatch("accu_weather_5d_forecast", { locationKey: locationKey });
      const url = `/currentconditions/v1/${locationKey}`;
      let post_res = await service.getWeather(url, { details: true });
      return this.dispatch("CHECK_ACC_WEATHER_ANS", {
        payload: post_res,
        sender: "accu_weather_current_weather",
      });
    },
    async accu_weather_5d_forecast({ commit, state }, payload = {}) {
      const locationKey =
        payload.locationKey || state.weather_default_location.Key;
      const url = `/forecasts/v1/daily/5day/${locationKey}`;
      payload.details = true;
      payload.metric = state.weather_units_celsius;
      let accu_weather_5d_forecast = await service.getWeather(url, payload);
      let forecast_ans = this.dispatch("CHECK_ACC_WEATHER_ANS", {
        payload: accu_weather_5d_forecast,
        sender: "accu_weather_5d_forecast",
      });
    },
    CHECK_ACC_WEATHER_ANS({ commit, state }, { payload, sender }) {
      let ans_text = "";
      let ans = {};
      switch (payload.status) {
        case 200:
          switch (sender) {
            case "accu_weather_location_ac":
              state.location_list = payload.data;
              break;
            case "accu_weather_current_weather":
              state.current_weather = payload.data;
              state.show_search_place = false;
              break;
            case "accu_weather_5d_forecast":
              if (typeof payload.data.DailyForecasts !== "undefined")
                commit("update_forecast", payload.data.DailyForecasts);
              break;
          }
          ans = payload.data;
          break;
        case 400:
          ans_text =
            "Request had bad syntax or the parameters supplied were invalid.";
          break;
        case 401:
          ans_text = "Unauthorized. API authorization failed.";
          break;
        case 403:
          ans_text =
            "Unauthorized. You do not have permission to access this endpoint.";
          break;
        case 404:
          ans_text = "Server has not found a route matching the given URI.";
          break;
        case 500:
          ans_text =
            "Server encountered an unexpected condition which prevented it from fulfilling the request.";
          break;
      }
      ans_text
        ? commit("showSnackbar", { color: "error", text: ans_text })
        : "";
      return ans;
    },
  },
});
