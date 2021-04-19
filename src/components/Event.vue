<template>
  <div
    class="event"
    :class="[ event.type ? `event_${event.type}` : '', {'event_end' : endFlag} ]"
  >
    <span class="event__time">{{ getPrettyTime(event.eventDate) }}</span>
    <h3 class="event__title">{{ event.title }}</h3>
    <p class="event__descr" v-if="event.description">{{ event.description }}</p>
    <p class="event__place" v-if="event.place">Место проведения: {{ event.place }}</p>
    <p class="event__duration" v-if="event.duration">Продолжительность: ~{{ getPrettyDuration(event.duration) }}</p>
    <i
      class="icon"
      :class="[ event.icon ? `icon-${event.icon}` : '' ]"
    ></i>
    <div
      class="event__duration-show"
      :style="{width: `${durationWidth}%`}"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: ['event', 'showDuration'],
  data: () => {
    return {
      durationWidth: 0,
      endFlag: false,
      timerId: false
    }
  },
  methods: {
    // Возвращает время в красивом формате
    getPrettyTime: function (date) {
      const currentDate = new Date(date)
      let hours = currentDate.getHours()
      let minutes = currentDate.getMinutes()

      hours = (hours < 10) ? `0${hours}` : hours
      minutes = (minutes < 10) ? `0${minutes}` : minutes

      return `${hours}:${minutes}`
    },
    // Возвращает продолжительность в красивом виде
    getPrettyDuration: function (minutes) {
      let result

      if (minutes < 60) {
        result = `${minutes} мин.`
      } else {
        const hours = (minutes - minutes % 60) / 60
        const minutesLeft = minutes - hours * 60

        result = (minutesLeft) ? `${hours} ч. ${minutesLeft} мин.` : `${hours} ч.`
      }

      return result
    },
    // Флаг окончания события
    isEventEnd: function () {
      return this.minutesPassed() >= this.event.duration
    },
    // Возвращает разницу минут между текущим временем и временем начала события
    minutesPassed: function () {
      return parseInt((new Date() - new Date(this.event.eventDate)) / 1000 / 60)
    },
    // Возвращает ширину элемента-индикатора продолжительности события
    durationShowWidth: function () {
      const minutesPassed = this.minutesPassed()
      let width = 0

      if (minutesPassed > 0) {
        width = ((this.event.duration - minutesPassed) < 0) ? 100 : (minutesPassed * 100 / this.event.duration)
      }

      return width
    }
  },
  mounted: function () {
    if (this.showDuration) {
      this.endFlag = this.isEventEnd()
      this.durationWidth = this.durationShowWidth()

      if (!this.endFlag) {
        this.timerId = setInterval(() => {
          this.durationWidth = this.durationShowWidth()
          if (this.isEventEnd()) {
            this.endFlag = true
            clearInterval(this.timerId)
          }
        }, 60000)
      }
    }
  },
  destroyed: function () {
    clearInterval(this.timerId)
  }
}
</script>

<style lang="scss" scoped>
.event {
  $color_high: $cardio;
  $color_med: $warning;
  $color_low: $success;
  $lineWidth: 10px;
  $degree: 135deg;
  border-left: .25rem solid;
  position: relative;

  &_high {
    border-left-color: $color_high;

    .icon {
      color: $color_high;
    }

    .event__duration-show {
      $color1: lighten($color_high, 53%);
      $color2: lighten($color_high, 56%);
      background: repeating-linear-gradient($degree, $color1, $color1 $lineWidth, $color2 $lineWidth, $color2 $lineWidth*2);
    }
  }

  &_med {
    border-left-color: $color_med;

    .icon {
      color: $color_med;
    }

    .event__duration-show {
      $color1: lighten($color_med, 35%);
      $color2: lighten($color_med, 40%);
      background: repeating-linear-gradient($degree, $color1, $color1 $lineWidth, $color2 $lineWidth, $color2 $lineWidth*2);
    }
  }

  &_low {
    border-left-color: $color_low;

    .icon {
      color: $color_low;
    }

    .event__duration-show {
      $color1: lighten($color_low, 45%);
      $color2: lighten($color_low, 50%);
      background: repeating-linear-gradient($degree, $color1, $color1 $lineWidth, $color2 $lineWidth, $color2 $lineWidth*2);
    }
  }

  &__place,
  &__duration {
    color: $gray_dark;
    font-style: italic;
  }

  .main-events & {
    padding: 1rem 5.5rem 1rem 7rem;

    &:hover {
      .icon {
        right: 1rem;
      }
    }

    &__time {
      @include vertical-centering;
      font-size: 2rem;
      left: 1rem;
      position: absolute;
    }

    &__descr {
      margin-top: .25rem;
    }

    &__place {
      margin-top: .5rem;
    }

    &__duration-show {
      @include transition(width);
      animation: linearGradientMoves 60s linear infinite;
      background-size: 150% 150%;
      bottom: 0;
      left: 0;
      position: absolute;
      top: 0;
      z-index: -1;
    }

    .icon {
      @include transition(right);
      @include vertical-centering;
      font-size: 3.5rem;
      position: absolute;
      right: -4.5rem;
    }

    &_end {
      $endColor: $gray_dark;
      border-left-color: $endColor;

      .event {
        &__duration-show {
          $color1: lighten($gray, 20%);
          $color2: lighten($gray, 25%);
          background: repeating-linear-gradient($degree, $color1, $color1 $lineWidth, $color2 $lineWidth, $color2 $lineWidth*2);
        }

        &__time,
        &__title,
        &__descr {
          color: $endColor;
        }
      }

      .icon {
        color: $endColor;
        right: 1rem;
      }
    }
  }

  .events & {
    $bgEvent: $white;
    @include def-border-radius;
    @include def-box-shadow;
    background-color: $bgEvent;
    padding: 2rem 1rem 1rem;

    &:hover {
      .icon {
        opacity: 1;
      }
    }

    &__time {
      @include def-border-gray;
      @include def-border-radius;
      @include def-box-shadow;
      background-color: $bgEvent;
      font-size: 1.5rem;
      left: -1.5rem;
      padding: .5rem .75rem;
      position: absolute;
      top: -1.5rem;
    }

    &__descr {
      margin-top: .5rem;
    }

    &__place {
      margin-top: 1rem;
    }

    &__duration-show {
      display: none;
    }

    .icon {
      @include transition(opacity);
      bottom: .5rem;
      font-size: 3rem;
      opacity: .25;
      position: absolute;
      right: .5rem;
    }
  }
}
</style>
