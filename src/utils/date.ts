import dayjs from "dayjs"

export const dateTimeFormat = (dateTime: Date = new Date()) => {
  return dayjs(dateTime).format('YYYY-MM-DD HH:mm A')
}

export const timeFormat = (time: Date = new Date()) => {
  return dayjs(time).format('HH:mm:ss A')
}