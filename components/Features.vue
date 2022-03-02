<template>
  <div
    class="
      feature-container
      w-full
      px-5
      sm:px-10
      lg:px-15
      xl:px-40
      py-10
      over-view
    "
  >
    <div class="w-full text-center mb-12 mt-16">
      <div data-aos="fade-up" class="title text-left">
        <img src="~/assets/img/features/title.png" alt="">
      </div>
    </div>
    <div
      data-aos="fade-up"
      class="
        mt-8
        grid grid-cols-1
        lg:grid-cols-1
        space-y-2
        md:space-y-0
        2xl:ml-20
      "
    >
      <div class="slide-below-feature">
        <VueSlickCarousel ref="c1" v-bind="settings">
          <div v-for="(item, index) in services" :key="index" class="box-slide">
            <div>
              <img :src="item.icon" class="slide-item"/>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Features',
  components: {
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
          icon: require('~/assets/img/features/image-first.png'),
        },
        {
          icon: require('~/assets/img/features/image-second.png'),
        },
        {
          icon: require('~/assets/img/features/image-first.png'),
        },
        {
          icon: require('~/assets/img/features/image-first.png'),
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
.fix-top-arrow {
  position: relative;
  top: 17px;
}
.sub-des {
  width: 50px;
}
.content-between {
  position: relative;
  top: -40px;
}

img {
  display: inline-block;
}
.feature-container {
  background: #240254;
}

.slide-below-feature::v-deep {
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
@media screen and (max-width: 1660px) {
  .feature-container {
    padding-left: 270px;
    padding-right: 270px;
    padding-top: 50px;
    padding-bottom: 130px;
  }
}

@media screen and (max-width: 768px) {
  .feature-container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .md-screen {
    margin-top: 25px;
  }
  .md-item-div {
    padding: 0px 0px 80px 140px;
  }
  .md-pb-0 {
    padding-bottom: 0px;
  }
  .pool-div {
    padding-left: 150px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
}
@media screen and (max-width: 443px) {
  .feature-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 40px;
  }
  .pool-div {
    padding-left: 90px;
    padding-top: 20px;
  }
  .md-screen {
    margin-top: 25px;
  }
  .md-item-div {
    padding: 0px 0px 60px 60px;
  }
  .md-pb-0 {
    padding-bottom: 0px;
  }
}
</style>
