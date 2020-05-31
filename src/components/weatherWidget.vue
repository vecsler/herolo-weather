<template>
  <div id="weather">
    <div :class="['weather-search', {'weather-search-show':$store.state.show_search_place}]">
      <div v-if="$store.state.show_search_place">
        <div class="weather-search__search_ac">
          <v-autocomplete
            v-model="current_location"
            :items="$store.state.location_list"
            label="Insert location..."
            required
            outlined
            item-text="LocalizedName"
            no-data-text="location was not found..."
            full-width
            background-color="#fff"
            return-object
            :search-input.sync="search"
          ></v-autocomplete>
        </div>
      </div>
    </div>
    <v-snackbar
      id="lolo"
      v-model="$store.state.snackbar.visibile"
      :color="$store.state.snackbar.color"
      style="position:absolute; bottom: 0; margin-bottom: 10px;"
    >
      {{ $store.state.snackbar.text }}
      <!--            style="color: #FF5252"-->
      <v-btn color="white" @click="$store.state.snackbar.visibile = false">אישור</v-btn>
    </v-snackbar>
    <div class="weather__svg-wrapper d-flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,320L60,314.7C120,309,240,299,360,245.3C480,192,600,96,720,58.7C840,21,960,43,1080,80C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
    <!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L60,208C120,224,240,256,360,229.3C480,203,600,117,720,74.7C840,32,960,32,1080,48C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>-->
    <div class="current-weather">
      <div class="current-weather__content">
        <div class="current-weather__content__date">
          <p>{{moment.unix(current_weather_var.EpochTime).format('dddd DD, MMMM')}}</p>
          <div></div>
          <h3>
            {{$store.state.weather_default_location.LocalizedName}},
            {{$store.state.weather_default_location.Country.LocalizedName}}
          </h3>
        </div>
        <div class="current-weather__content__minMaxTemp">
          <div class="current-weather__content__minMaxTemp__deg_header">
            {{$store.state.weather_units_celsius ? current_weather_var.Temperature.Metric.Value :
            current_weather_var.Temperature.Imperial.Value}}
          </div>
          <div
            :class="['d-flex','current-weather__content__minMaxTemp__deg-sign' , $store.state.weather_units_celsius ? 'flex-row' : 'flex-row-reverse']"
          >
            <div
              @click="change_weather_units('celsius')"
              :class="['current-weather__content__minMaxTemp__celsius', {'unchosen_weather_units' : !$store.state.weather_units_celsius}]"
            >&#8451;</div>
            <div>&nbsp/&nbsp;</div>
            <div
              @click="change_weather_units('fer')"
              :class="['current-weather__content__minMaxTemp__fer', {'unchosen_weather_units' : $store.state.weather_units_celsius}]"
            >&#8457;</div>
          </div>

          <div style="width: 150px;" class="resizable">{{current_weather_var.WeatherText}}</div>
        </div>
      </div>
      <div class="current-weather__imgBx">
        <img
          style
          width="300px"
          height="auto;"
          :src="require(`@/assets/icons/${checkCurrentWeatherIcon()}-s.png`)"
          alt
        />
      </div>
    </div>
    <div class="forecast-wrapper d-flex">
      <template v-for="(item, index) in forecast">
        <div class="forecast-wrapper__card" :key="index">
          <div class="forecast-wrapper__card__imgBx">
            <img
              height="45px"
              :src="require(`@/assets/icons/${checkForecastIcon(item)}-s.png`)"
              alt
            />
            <h3>{{moment(item.Date).format('dddd')}}</h3>
          </div>
          <div class="forecast-wrapper__content">
            {{moment(item.Date).format('DD/MM')}}
            <p>{{item.Day.IconPhrase}}</p>
            <div class="content__minMaxTemp">
              {{item.Temperature.Minimum.Value}}-{{item.Temperature.Maximum.Value}}
              <div v-if="$store.state.weather_units_celsius">&nbsp&#8451;</div>
              <div v-else>&nbsp&#8457;</div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <v-btn
      @click="$store.state.show_search_place=!$store.state.show_search_place"
      style="z-index: 11; top: 10px; position: absolute; right: 10px;"
      fab
      dark
      small
      color="#0e5c90"
    >
      <i style="font-size: 22px;" class="fas fa-search-location"></i>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forecast_units_fer: false,
      current_location: "",
      search: ""
    };
  },
  watch: {
    current_location(val) {
      if (val !== this.$store.state.weather_default_location) {
        this.$store.state.weather_default_location = val;
        this.$store.dispatch("accu_weather_current_weather", {
          locationKey: val.Key
        });
      }
    },
    search(val) {
      if (!val) {
        return;
      } else {
        setTimeout(() => {
          this.location_ac(val);
        }, 200);
      }
    }
  },
  mounted() {
    // TODO: try this out and make it change headline text zise to fit div
    this.resizeText();
    this.$store.dispatch("get_geolocation")
    
  },
  created() {
    window.addEventListener("resize", this.resizeText());
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeText());
  },
  computed: {
    forecast() {
      return this.$store.state.forecast_5d;
    },
    current_weather_var() {
      return this.$store.state.current_weather[0];
    }
  },
  methods: {
    resizeText() {
      let resizableDivs = document.getElementsByClassName("resizable");
      for (let index = 0; index < resizableDivs.length; ++index) {
        let div = resizableDivs[index];
        if (div.innerText != "") {
          let divWidth = div.clientWidth;
          let divHeight = div.clientHeight;

          let contentWidth = div.scrollWidth;
          let contentHeight = div.scrollHeight;

          let fontSize = div.style.fontSize;
          fontSize = Number(fontSize.substring(0, fontSize.length - 2));

          while (contentWidth <= divWidth && contentHeight <= divHeight) {
            fontSize += 1;
            div.style.fontSize = fontSize + "px";
            contentWidth = div.scrollWidth;
            contentHeight = div.scrollHeight;
          }

          while (contentWidth > divWidth || contentHeight > divHeight) {
            fontSize -= 1;
            div.style.fontSize = fontSize + "px";

            contentWidth = div.scrollWidth;
            contentHeight = div.scrollHeight;
          }
        }
      }
    },

    async location_ac(val = "") {
      if (typeof val == "string" && val.length) {
        await this.$store.dispatch("accu_weather_location_ac", { q: val });
      }
    },
    async current_weather() {
      let ans = await this.$store.dispatch("accu_weather_current_weather");
    },
    checkCurrentWeatherIcon(item) {
        let ans = "undefined"
      try {
        ans = this.current_weather_var.WeatherIcon < 10
          ? `0${this.current_weather_var.WeatherIcon}`
          : +this.current_weather_var.WeatherIcon;
      } catch (e) {
        console.log(e);
        ans = `01`;
      }
      console.log(888, ans, this.current_weather_var);
      return ans
    },
    checkForecastIcon(item = 0) {
      try {
        return item.Day.Icon < 10 ? `0${item.Day.Icon}` : item.Day.Icon;
      } catch (e) {
        console.log(e);
        return `01`;
      }
    },
    change_weather_units(units) {
      let change_units = this.$store.state.weather_units_celsius
        ? units === "celsius"
          ? false
          : true
        : units === "celsius"
        ? true
        : false;
      if (change_units) {
        this.$store.state.weather_units_celsius = !this.$store.state
          .weather_units_celsius;
        this.$store.dispatch("accu_weather_5d_forecast");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$header_margin-inline-start: 20px;
#weather {
  width: 63vw;
  min-width: 650px;
  max-width: 650px;
  display: flex;
  position: relative;
  min-height: 50vh;
  min-height: max-content !important;
  background: #0099ff;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.weather__svg-wrapper {
  background: #fff;
  width: 100%;
  height: 248px;
}

.weather__svg-wrapper svg {
  overflow: hidden;
}

.weather__svg-wrapper path {
  transform: translateY(115px) translateX(280px);
}

.current-weather {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 248px;
  display: flex;
}

.current-weather__content {
  width: 60% !important;
  color: #777;
}

.current-weather__imgBx {
  display: flex;
  justify-content: center;
  align-items: center;
}

.current-weather__content__date {
  margin-block-start: 20px;
  margin-inline-start: $header_margin-inline-start;
  font-size: 22px;
  display: flex;

  > div {
    border: 1px solid #777;
    margin: 0 10px;
  }
  h3,
  p {
    width: 50%;
    margin: 0;
  }
  h3 {
    font-size: inherit;
    font-weight: inherit;
  }
}

.content__minMaxTemp {
  display: flex;
}

.current-weather__content__minMaxTemp {
  display: flex;
  align-items: baseline;
  font-size: 80px;
  font-weight: 300 !important;
  margin-inline-start: $header_margin-inline-start;
  .current-weather__content__minMaxTemp__deg_header {
    font-size: inherit;
  }
  .current-weather__content__minMaxTemp__deg-sign {
    align-self: flex-start;
    margin-block-start: 45px;
  }
  > div {
    font-weight: 300 !important;
  }

  > p {
    font-size: 48px;
  }

  > div {
    font-size: 21px;
    margin-block-start: 24px;
  }

  .unchosen_weather_units {
    color: #1a0dab;
    cursor: pointer;
  }
}

.forecast-wrapper {
  display: flex;
  height: 248px;
  overflow: hidden;
}
.subm {
  background: pink;
  height: 100%;
  width: 100px;
}
.forecast-wrapper__card {
  width: 17%;
  height: calc(100% - 20px);
  background: rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 15px;
}

.forecast-wrapper__card__imgBx {
  height: 40%;
}

.forecast-wrapper__content {
  margin-block-start: 10px;
}

.weather-search {
  position: absolute;
  width: 0%;
  height: 0%;
  background: #0099ff;
  z-index: 1;
  transition: 1s;
  right: 0;
}

.weather-search-show {
  width: 100%;
  height: 100%;
}

.weather-search__search_ac {
  margin: 20px;
  margin-block-start: 4rem;
}
</style>
