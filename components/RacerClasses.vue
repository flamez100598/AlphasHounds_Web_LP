<template>
<div class="feature-container w-full h-full flex flex-col justify-center px-5 sm:px-10 lg:px-15 xl:px-40 py-10">
    <div class='title mb-4 text-right'>RACER'S CLASSES</div>
    <div class="grid grid-cols-1 md:grid-cols-5 mb-12 mt-16 main-feature-sub">
        <div data-aos="fade-up" class="col-span-3">
            <div class='title mb-4 text-left'>DOG'S NAME</div>
            <div class="img">
              <img src="~/assets/img/racer-class/Dog-info.png" alt="">
            </div>
            <div class="slide-below">
              <VueSlickCarousel ref="c1" v-bind="settings">
                <div v-for="(item, index) in services" :key="index" class="box-slide">
                  <div>
                    <img :src="item.icon" class="slide-item"/>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
        </div>
        <div data-aos="fade-up" class="ml-3 col-span-2 content-feature">
         <img src="~/assets/img/racer-class/nft-dog-art.png" alt="">
       </div>
    </div>
</div>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft, 
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      services: [
        {
          icon: require('~/assets/img/features/main-feature.png'),
        },
        {
          icon: require('~/assets/img/features/main-feature.png'),
        },
        {
          icon: require('~/assets/img/features/main-feature.png'),
        },
        {
          icon: require('~/assets/img/features/main-feature.png'),
        }
      ],
    }
  },
  computed: {
    locate () {
      return this.$store.state.i18n.locale
    }
  },
}
</script>
<style lang="scss" scoped>
p {
    size: 18px;
    line-height: 28px;
}
.feature-container {
  background: #240254;
  min-height: 100vh;
}
.title {
  font-style: normal;
  font-size: 32px;
  line-height: 50px;
}

.sub-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
}
.sub-content {
  size: 18px;
  line-height: 28px;
  color: #F6FEFF;
  opacity: 0.75;
  max-width: 300px;
}
.content-feature {
  max-width: 527px;
}
.text-feature {
  size: 18px;
  line-height: 28px;
  color: #F6FEFF;
  opacity: 0.75;
}
.highlight-text {
  color: #FFE924;
}
.font-bold {
  font-weight: normal;
  font-size: 16px;
}
.color-whiter {
  color: #F7FEFF;
}
.set-position {
  position: relative;
  top: 20px;
}
.slide-below::v-deep {
  width: 65%;
  margin: 0 auto;
  padding-top: 20px;
  .slick-arrow,
  .slick-next {
    display: block;
    background: #ffffff;
    width: 61px;
    height: 78px;
    color: #000000;
    background-image: url("~assets/img/slider/right_arrow.png");
    right: -70px;
  }
  .slick-prev {
    background-image: url("~assets/img/slider/left_arrow.png");
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    z-index: 9;
    left: -80px;
  }
  .slick-prev:before,
  .slick-next:before {
    content: '';
  }
}
@media screen and (max-width: 640px) {
  .sub-content {
    max-width: 100%;
  }
  .entity{
    margin-right: 10px;
    text-align: left;
  }
  .title {
    text-align: center;
    padding-top: 15PX;
  }
}

@media screen and (max-width: 850px) { 
  .set-position {
      top: 0px;
  }
}
@media screen and (min-width: 1720px) {
  .main-feature-sub {
    margin-top: 140px;
  }
  .feature-container {
    padding-left: 15rem;
    padding-right: 15rem;
  }
  .block-1 {
    margin-left: 140px;
  }
  .block-2 {
    margin-left: 95px;
  }
  .block-3 {
    margin-left: 50px;
  }
}
@media screen and (max-width: 1440px) {
  .main-feature-sub {
    margin-top: 80px;
  }
}
</style>
