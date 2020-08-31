import api from './Api'

export default {
  /**
   * Преобразует объект Date в объект с датой и временем в удобном формате.
   *
   * @param {Date} videoDate - Дата.
   *
   * @returns {Object} Дата и время в удобном формате.
   */
  getPrettyVideoDate (videoDate) {
    const dt = new Date(videoDate)
    const prettyDate = dt => {
      return (dt < 10) ? `0${dt}` : dt
    }

    return {
      date: `${prettyDate(dt.getDate())}.${prettyDate(dt.getMonth() + 1)}.${dt.getFullYear()}`,
      time: `${prettyDate(dt.getHours())}:${prettyDate(dt.getMinutes())}`
    }
  },
  /**
   * Формирует ссылки на видеофайлы и картинку-прелоадер.
   *
   * @param {String} serverIP - IP-адрес сервера, на котором хранится файл.
   * @param {Object} owner - Информация о "владельце" видеоролика.
   * @param {Object} video - Информация о видеоролике.
   *
   * @returns {Object} Ссылки на файлы.
   */
  getVideoLinks (serverIP, owner, video) {
    const reverseDate = video.date.split('T')
    const link = `http://${serverIP}/files/videos/${owner.folder}/${video.type_folder}/${reverseDate[0]}/${video._id}`

    return {
      image: `${link}.jpg`,
      mp4: `${link}.mp4`,
      ogv: `${link}.ogv`,
      webm: `${link}.webm`
    }
  },

  /**
   * Отправляет AJAX-запрос на получение информации о последних 6 видеороликах (опционально можно указать "владельца" видеоролика).
   *
   * @param {Object} owner - Информация о "владельце" видеоролика.
   * @param {Number} skip - Количество "пропускаемых" видео.
   *
   * @returns {Object} Информация о видеороликах.
   */
  getLastVideos (owner = false, skip = 0) {
    return api().post('videos/getLastVideos', { owner: owner, skip: skip })
  },
  /**
   * Отправляет AJAX-запрос на получение информации о "владельцах" видеороликов.
   *
   * @returns {Object} Список "владельцев".
   */
  getOwners () {
    return api().post('videos/getOwners')
  },
  /**
   * Отправляет AJAX-запрос на получение информации о "владельце".
   *
   * @param {String} owner - Идентификатор "владельца" видеороликов.
   *
   * @returns {Object} Данные "владельца".
   */
  getVideoOwnerInfo (owner) {
    return api().post('videos/getVideoOwnerInfo', { owner: owner })
  },
  /**
   * Отправляет AJAX-запрос на получение информации о видеоролике по идентификтаору.
   *
   * @param {String} id - Идентификатор видеоролика.
   *
   * @returns {Object} Данные о видеоролике.
   */
  getVideoInfo (id) {
    return api().post('videos/getVideoInfo', { video: id })
  }
}
