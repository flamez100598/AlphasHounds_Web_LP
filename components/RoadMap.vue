<template>
  <div class="roadmap-container w-full">
    <div data-aos="fade-up" class="title-head mb-24">
      {{ $t('RoadMap.title') }}
    </div>
    <div
      data-aos="fade-up"
      class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mt-8 gap-4"
    >
      <div class="md:col-start-2 lg:col-span-2">
        <div class="md:col-start-2 lg:col-span-2 md-item">
          <div
            class="step-container bg-quarter-1"
            :class="{ active: checkQuarter(2021, 4) , 'height-jp': locate === 'jp'}"
          >
            <div class="title">{{ $t('RoadMap.Q4.date') }}</div>
            <ul class="ml-4">
              <li>{{ $t('RoadMap.Q4.line1') }}</li>
              <li>{{ $t('RoadMap.Q4.line2') }}</li>
              <li>{{ $t('RoadMap.Q4.line3') }}</li>
              <li>{{ $t('RoadMap.Q4.line4') }}</li>
              <li>{{ $t('RoadMap.Q4.line5') }}</li>
              <li>{{ $t('RoadMap.Q4.line6') }}</li>
              <li>{{ $t('RoadMap.Q4.line7') }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="md:col-start-2 lg:col-span-2 md-item">
        <div
          class="step-container bg-quarter-3"
          :class="{ active: checkQuarter(2022, 1) ,'height-jp': locate === 'jp'}"
        >
          <div class="title">{{ $t('RoadMap.Q1.date') }}</div>
          <ul class="ml-4">
            <li>{{ $t('RoadMap.Q1.line1') }}</li>
            <li>{{ $t('RoadMap.Q1.line2') }}</li>
            <li>{{ $t('RoadMap.Q1.line3') }}</li>
            <li>{{ $t('RoadMap.Q1.line4') }}</li>
          </ul>
        </div>
      </div>
      <div class="md:col-start-2 lg:col-span-2 md-item">
        <div
          class="step-container bg-quarter-2"
          :class="{ active: checkQuarter(2022, 2) ,'height-jp': locate === 'jp'}"
        >
          <div class="title">{{ $t('RoadMap.Q2.date') }}</div>
          <ul class="ml-4">
            <li>{{ $t('RoadMap.Q2.line1') }}</li>
            <li>{{ $t('RoadMap.Q2.line2') }}</li>
            <li>
              {{ $t('RoadMap.Q2.line3') }}<span class="block"
                >{{ $t('RoadMap.Q2.line3-2') }}</span
              >
            </li>
            <li>{{ $t('RoadMap.Q2.line4') }}</li>
          </ul>
        </div>
      </div>
      <div class="md:col-start-2 lg:col-span-2 md-item">
        <div
          class="step-container bg-quarter-4"
          :class="{ active: checkQuarter(2022, 4) ,'height-jp': locate === 'jp'}"
        >
          <div class="title">{{ $t('RoadMap.Q4-2.date') }}</div>
          <ul class="ml-4">
              <li>{{ $t('RoadMap.Q4-2.line1') }}</li>
              <li>{{ $t('RoadMap.Q4-2.line2') }}</li>
              <li>{{ $t('RoadMap.Q4-2.line3') }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" class="grid-cols-1 xs-hide md-hide">
      <img src="~/assets/img/roadmap/line.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadMap',
  methods: {
    checkQuarter(year, quarter) {
      const today = new Date()
      const month = today.getMonth()
      const now_year = today.getFullYear()
      let now_quarter = null
      if (month < 4) now_quarter = 1
      else if (month < 7) now_quarter = 2
      else if (month < 10) now_quarter = 3
      else if (month < 13) now_quarter = 4
      return year === now_year && now_quarter === quarter
    },
  },
    computed: {
    locate () {
      return this.$store.state.i18n.locale
    }
  },
}
</script>

<style scoped lang="scss">
.roadmap-container {
  background: #202526;
}
.title-head {
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  font-weight: normal;
}
.step-container {
  border-radius: 20px;
  height: 238px;
  width: 230px;
  padding: 5px 25px;
}
.height-jp {
    height: 280px !important;
}
.title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 5px;
  margin-top: 15px;
}
li {
  font-weight: normal;
  font-size: 14px;
}
ul {
  list-style-type: disc;
}
.active {
  border: 2px solid #32adc7;
  -webkit-animation: blink 0.5s step-end infinite alternate;
}

.roadmap-container {
  padding-left: 420px;
  padding-right: 420px;
  padding-top: 100px;
  padding-bottom: 150px;
}
.bg-quarter-1 {
  .title {
    color: #27e4fb;
  }
  background: #1d464b;
}
.bg-quarter-2 {
  .title {
    color: #27fb82;
  }
  background: #1d4a33;
}
.bg-quarter-3 {
  .title {
    color: #ffe925;
  }
  background: #484720;
}
.bg-quarter-4 {
  .title {
    color: #b727fb;
  }
  background: #302d46;
}
@media screen and (max-width: 1920px) {
  .roadmap-container {
    padding-left: 430px;
    padding-right: 430px;
    padding-top: 90px;
    padding-bottom: 130px;
  }
}
@media screen and (max-width: 1790px) {
  .roadmap-container {
    padding-left: 350px;
    padding-right: 350px;
    padding-top: 90px;
    padding-bottom: 130px;
  }
}
@media screen and (max-width: 1680px) {
  .roadmap-container {
    padding-left: 300px;
    padding-right: 300px;
  }
}
@media screen and (max-width: 1600px) {
  .roadmap-container {
    padding-left: 250px;
    padding-right: 250px;
  }
}
@media screen and (max-width: 1460px) {
  .roadmap-container {
    padding-left: 200px;
    padding-right: 200px;
  }
}
@media screen and (max-width: 1280px) {
  .roadmap-container {
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 60px;
    padding-bottom: 50px;
  }
}
@media screen and (max-width: 1024px) {
  .roadmap-container {
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 60px;
    padding-bottom: 50px;
  }
}
@media screen and (max-width: 768px) {
  .roadmap-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    padding-bottom: 50px;
  }
  .md-item {
    padding: 20px 0;
    margin-left: 70px;
  }
}
@media screen and (max-width: 443px) {
  .step-container[data-v-f4dd76de] {
    width: 300px;
    padding: 5px 25px;
    margin-left: 25px;
  }
  .md-item {
    margin-left: 60px;
  }
}
@media screen and (max-width: 375px) {
  .md-item {
    margin-left: 50px;
  }
}
</style>
