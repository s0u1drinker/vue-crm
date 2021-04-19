export default {
  /**
   * Преобразует объект Date в объект с датой и временем в удобном формате.
   *
   * @param {Date} videoDate - Дата.
   *
   * @returns {Object} Дата и время в удобном формате.
   */
  getPrettyDateAndTime (videoDate) {
    const dt = new Date(videoDate)
    const prettyDate = dt => {
      return (dt < 10) ? `0${dt}` : dt
    }

    return {
      date: `${prettyDate(dt.getDate())}.${prettyDate(dt.getMonth() + 1)}.${dt.getFullYear()}`,
      time: `${prettyDate(dt.getHours())}:${prettyDate(dt.getMinutes())}`
    }
  }
}
