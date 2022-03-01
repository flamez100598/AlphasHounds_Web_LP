<template>
<div class='w-full px-5 sm:px-10 lg:px-15 xl:px-40 py-10 teams-feature'>
  <div class='w-full text-center mb-32 mt-18'>
    <div data-aos="fade-up" class='title'>Teams</div>
  </div>
  <div class='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-2 md:space-y-0 gap-4'>
      <div data-aos="fade-up" v-for="(data, index) in datas" :key="index" class="mb-12 card-item">
        <div class='img-title'>
            <img :src="data.src">
        </div>
        <div class='sub-title'><b>{{ data.title }}</b></div>
        <div class='mt-1 text-description'>
            {{ data.description }}
        </div>
        <div v-if="index === 4" class="clear-both"></div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      datas: [
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
              {
                src: require('../assets/img/teams/mock.png'),
                title: 'John Smith',
                description: "CEO ABC Network Co-founder XYZhyytgbiy"
              },
            ],
    }
  }
}
</script>
<style scoped>
.card-item {
  padding: 10px 20px;
  text-align: center;
}
.fix-top-arrow {
  position: relative;
  top: 17px;
}
.sub-des {
  width: 50px;
}
.teams-feature {
 color: rgba(247, 254, 255, 0.75);
  background: #1a1e1f;
}
img {
  display: inline-block;
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 48px;
  text-transform: uppercase;
}
.sub-title {
  margin-top: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
}
.text-description {
  height: 32px;
  font-size: 16px;
}
.teams-feature {
  padding-left: 340px;
  padding-right: 340px;
  padding-top: 100px;
  padding-bottom: 150px;
}
@media screen and (max-width: 1660px) {
  .teams-feature {
    padding-left: 310px;
    padding-right: 310px;
    padding-top: 90px;
    padding-bottom: 130px;
  }
}
@media screen and (max-width: 1280px) {
  .teams-feature {
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 70px;
    padding-bottom: 100px;
  }
}
@media screen and (max-width: 1024px) {
  .teams-feature {
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 50px;
    padding-bottom: 60px;
  }
}
</style>
