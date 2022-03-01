<template>
  <div class="w-full">
    <div v-if="advisors && advisors.length > 0" class="creator-team py-10 md:py-20">
      <div class="creator-title text-2xl text-center sm:text-3xl lg:ml-3 xl:ml-5">
        Advisors
      </div>
      <div class="creator-body py-4 sm:mt-8" data-aos="fade-up">
        <client-only>
          <VueSlickCarousel v-bind="settings">
            <div v-for="(item, index) in advisors" :key="index" class="sm:mt-3">
                <div class="d-flex align-items-center justify-content-center team-slider">
                  <div class="short-info-person">
                    <div class="avatar h-full">
                      <img :src="item.image" class="h-full"/>
                    </div>
                  </div>
                  <div class="image-team-overlay">
                    <div class="text-team-overlay d-flex flex-column align-items-start">
                      <div class="text-image-name">
                      </div>
                     <div class="text-image-content" v-html="item.description" />
                     <span @click="showMemberInfo(item)" class="see-more mt-auto">[See more]</span>
                    </div>
                  </div>
                </div>
                <div class="creator-team-information flex flex-col items-center bottom-0 h-12 justify-between w-full">
                  <div class="font-bold uppercase">
                    {{ item.name }}
                  </div>
                  <div class="tracking-wider">
                    {{ item.position.name }}
                  </div>
                </div>
              </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </div>


    <PersonDialog :active.sync="showDialog" :item="itemMember"/>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import _filter from 'lodash/filter';

  import PersonDialog from './PersonalDialog.vue';
  import { contributorsData } from '../mock';

    export default {
      components: {
        VueSlickCarousel,
        PersonDialog
      },
        data() {
          return {
            backendUrl: '',
            contributors: null,
            showDialog: false,
            itemMember: null,
            settings: {
              "autoplay": true,
              "autoplaySpeed": 2000,
              "dots": true,
              "arrows": false,
              "focusOnSelect": true,
              "infinite": true,
              "speed": 500,
              "slidesToShow": 4,
              "slidesToScroll": 4,
              "touchThreshold": 5,
              "responsive": [
                {
                  "breakpoint": 1100,
                  "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
                    "infinite": true,
                    "dots": true
                  }
                },
                {
                  "breakpoint": 600,
                  "settings": {
                    "slidesToShow": 2,
                    "slidesToScroll": 2,
                    "initialSlide": 2
                  }
                },
                {
                  "breakpoint": 480,
                  "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                  }
                }
              ]
            },
            managements: [],
            developments: [],
            advisors: [],
          }
        },

        created() {
          this.getContributors();
        },

        methods: {
          showMemberInfo(item) {
            this.itemMember = item;
            this.showDialog =  true;
            const el = document.body;
            el.classList.add('hidden-scroll');
          },

          getContributors(){
            this.advisors = _filter(contributorsData, item => item.team.id === 3);
            this.developments = _filter(contributorsData, item => item.team.id === 2);
            this.managements = _filter(contributorsData, item => item.team.id === 1);
          },
        }
    }
</script>

<style lang="scss">
  .creator-team {
    background-color: #202526;
  }
  .creator-develop-team {
    background-color: #1A1E1F;
  }
  .creator-text-base {
    div {
      color: #FCFCFC;
    }
  }
  .team-slider{
    width: 200px;
    border-radius: 20px;
    overflow: hidden;
  }

  .item-slide {
    margin-right: 18px;
  }
  .bg-team-founder {
    background: linear-gradient(300.85deg, #001235 48.19%, #BE116C 121.09%);
    padding-top: 80px;
    padding-bottom: 46px;
  }
  .image-team-overlay .text-team-overlay {
    height: 100%;
    overflow: hidden;
  }

  @media only screen and (min-width: 320px) {

    .mobile-team-title-section {
      display: flex !important;
      justify-content: center !important;
      flex-direction: row !important;
    }

    .mobile-team-title-section-section img {
      position: unset !important;
      padding-left: unset !important;
      margin-bottom: auto;
    }

    .team-slider {
      position: relative;
      margin: 0 auto;
      img {
        width: 100%;
        filter: drop-shadow(8px 8px 16px rgba(26, 0, 0, 0.56));
      }

      .image-team-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        opacity: 0;
        transition: 0.5s ease;
        background: linear-gradient(114.44deg, rgba(18, 70, 169, 0.9) 0%, rgba(109, 0, 147, 0.9) 100%);
        backdrop-filter: blur(64px);
        color: #fcfcfc;

        .text-team-overlay {
          padding: 42px 12px 12px 12px;
        }

        .text-image-name {
          text-align: center;
          width: 100%;
          margin-bottom: 10px;
        }
        .text-image-name .name {
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          font-weight: 600;
          text-transform: uppercase;
        }
        .text-image-name .title {
          font-size: 14px;
          line-height: 24px;
          text-align: center;
        }

        .text-image-content {
          font-size: 12px;
          line-height: 28px;
          font-weight: 400;
          color: #eff0f6;
          letter-spacing: 0.75px;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .image-team-overlay:hover {
        opacity: 0.9;
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 640px) {
    .vue-perslide {
      width: 50% !important;
    }
  }



  @media only screen and (min-width: 768px) {

    .team-slider {
      img {
        margin: 0;
        width: 100%;
      }

      .image-team-overlay {
        margin: 0;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .creator-team, .creator-develop-team, .creator-advisors {
      padding-left: 200px;
      padding-right: 200px;
    }
    .team-slider {
      width: 250px;
      .image-team-overlay {
        .text-image-content {
          font-size: 12px;
          line-height: 28px;
        }
      }
    }
    .short-info-person {
      height: unset!important;
      width: unset!important;
    }
  }

  @media only screen and (min-width: 1024px) {
    .creator-title {
      margin-left: 0;
    }
  }


  // @media only screen and (min-width: 1920px) {

  //   .contributors {
  //     padding: 2rem 24rem;
  //   }
  // }
  .mb-30px {
    margin-bottom:30px;
  }
  .mtb-30px {
    margin-bottom:30px;
    margin-top:30px;
  }
  .short-info-person {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    height: 300px;
    width: 200px;
  }
  .info {
    backdrop-filter: blur(64px);
    position: absolute;
    bottom: 0;
    height: 61px;
    width: 200px;
    border-radius: 0 0 20px 20px;
  }
  .info .name {
    color: #fcfcfc;
    font-size: 12px;
    line-height: 18px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
  .info .title {
    color: #fcfcfc;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    padding: 0 24px;
  }
  .short-info-person .avatar {
    overflow: hidden;
    height: 335px;
  }

  .creator-team-information {
    margin-top: 10px;
  }

  .slick-dots {
    li button {
      height: 16px;
      &::before {
        font-size: 10px;
        color: #ffffff;
      }
    }
    .slick-active {
      width: 30px;
      button {
        width: 100%;
        height: 5px;
        position: relative;

        &::before {
          opacity: 0.75;
          color: black;
          content: '';
          background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);;
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .creator-team, .creator-develop-team, .creator-advisors {
      padding-left: 60px;
      padding-right: 60px;
    }

    .team-slider {
      .image-team-overlay {
        border-radius: 20px;

        .text-image-content {
          font-size: 12px;
          line-height: 28px;
        }
      }
    }

    .slides-advisor {
      .vueperslides__track-inner {
        justify-content: center;
      }
    }

    .slick-dots {
      bottom: -65px;

      li button {
        height: 16px;

        &::before {
          font-size: 15px;
          opacity: 0.8;
          color: #ffffff;
        }
      }

      .slick-active {
        width: 80px;

        button {
          width: 100%;
          height: 5px;
          position: relative;

          &::before {
            opacity: 0.75;
            color: black;
            content: '';
            background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);;
            width: 100%;
            height: 100%;
            border-radius: 6px;
          }
        }
      }
    }


    .see-more {
      position: absolute;
      bottom: 10px;
    }

    .vueperslides__bullet .default {
      border: none;
      height: 8px;
      width: 8px;
      background: #A0A3BD;
    }
    .vueperslides__bullet--active .default {
      background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);
      border-width: unset;
      height: 8px;
      width: 80px;
      border-radius: 16px;
    }
    .list-backed-by .item {
      height: 146px;
    }

    .creator-team {
      .vueperslides__bullets {
        bottom: auto;
      }
    }

    .creator-develop-team {
      .vueperslides__bullets {
        bottom: auto;
      }
    }

    .creator-advisors {
      .vueperslides__bullets {
        bottom: auto;
      }
    }
    .justify-content-center {
      justify-content: center;
    }
  }
</style>
