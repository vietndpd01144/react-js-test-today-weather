import axios from "axios"
import { dateTimeFormat, timeFormat } from "../utils/date"
import { v4 } from "uuid";

const _axios = axios.create({
  baseURL: import.meta.env.VITE_OPEN_WEATHER_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    appid: import.meta.env.VITE_OPEN_WEATHER_KEY
  }
})

export const searchWeather = async (query: (string | undefined)[]) => {
  const q = query.filter((item: string | undefined) => !!item && item.length).join(',')

  try {
    const res = await _axios.get('/data/2.5/weather', { params: { q } })

    const { data } = res;

    return {
      ...data,
      info: {
        ...data?.weather?.[0],
        ...data?.main,
        time: dateTimeFormat(),
        hours: timeFormat(),
        id: v4()
      }
    }
  } catch (e) {
    console.log(e);
  }
}