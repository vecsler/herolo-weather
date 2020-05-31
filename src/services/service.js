import axios from "axios";
import {BASE_WEATHER} from "@/constants";

const MAX_REQUESTS_COUNT = 5
const INTERVAL_MS = 10
let PENDING_REQUESTS = 0

const accWeather = axios.create({
    baseURL: BASE_WEATHER,
    headers: {
        'Content-Type': 'application/json',
    },

});

const getDataReady = (data) => {
    if (!data) {
        data = {}
    }
    data.apikey = process.env.VUE_APP_ACC_WEATHER_API_KEY
    data.language = 'en-us'
    return data
}
export default {
    getWeather(url, data) {
        const ans = accWeather.get(url, {params: getDataReady(data)});
        return ans
    },
    async postWeather(url, data) {
        const ans = await accWeather.post(url, getDataReady(data));
        // const ans = await accWeather.post(url, getDataReady(data));
        return ans
    },
};
