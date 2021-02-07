<template>
  <span class="timer">
    <span id="demo">
      <span class="single-counter-box">
        <span class="timer-num">{{ hours }}</span>
        <span class="timing-unit">Hours</span>
      </span>
      <span class="single-counter-box">
        <span class="timer-num">{{ minutes }}</span>
        <span class="timing-unit">Mins</span>
      </span>
      <span class="single-counter-box">
        <span class="timer-num">{{ seconds }}</span>
        <span class="timing-unit">Sec</span>
      </span>
    </span>
  </span>
</template>
<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  props: ['date'],
  data() {
    return {
      timerdate: Math.trunc(new Date(this.date).getTime() / 1000),
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    seconds() {
      return (this.timerdate - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.timerdate - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60 / 24)
    }
  }
}
</script>
<style>
</style>