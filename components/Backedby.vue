<template>
    <div class="creator-backedby px-44 py-4 lg:px-16">
      <div class="pt-6sm:text-3xl text-center lg:ml-3 xl:ml-8 text-backer mb-12">
        {{ $t('Backer.title') }}
      </div>
      <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500"
        class="md:px-16 mt-6 flex flex-col items-center gap-8 m-auto sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        <div v-for="(item, index) in items" :key="index"
          :style="index == 0 ? 'margin-top: 0px' : ''"
          class="sm:col-start-1 lg:col-start-3 md:ml-4 md:col-start-2 sm:my-2 lg:px-2 xl:my-4 w-full flex items-center justify-center backedby-item">
          <template v-if='!item.link'>
            <img :src="item.img">
          </template>
          <template v-else>
            <a :href="item.link" target="_blank">
              <img :src="item.img">
            </a>
          </template>
        </div>
      </div>

      <!-- <div class="font-bold uppercase text-2xl text-center sm:text-3xl  lg:text-left lg:ml-3 xl:ml-8 my-8">
        Secured By
      </div>

      <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1500"
           class="py-4 flex flex-col items-center gap-8 m-auto sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        <div class="sm:my-4 w-full flex items-center justify-center backedby-item">
          <img src="../assets/img/securedBy/certik.png">
        </div>
      </div> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: require('../assets/img/backedBy/v2lab.png'),
          link: 'https://v2b.ventures/'
        },
        // {
        //   img: require('../assets/img/backedBy/vmoAi.png'),
        //   link: 'https://vmo.ai/'
        // },
        // {
        //   img: require('../assets/img/backedBy/masterVentures.png'),
        //   link: 'https://master.ventures/'
        // },
        // {
        //   img: require('../assets/img/backedBy/x21.png'),
        //   link: 'https://x21digital.com/'
        // },
        // {
        //   img: require('../assets/img/backedBy/trustdaoCapital.png'),
        //   link: 'https://www.trustdao.network/'
        // },
        // {
        //   img: require('../assets/img/backedBy/OIG.png'),
        //   link: 'https://oiginvest.com/'
        // },
        // {
        //   img: require('../assets/img/backedBy/baconDao.png'),
        //   link: 'https://bacondao.com/'
        // },
        // {
        //   img: require('../assets/img/backedBy/rio_defi.png'),
        //   link: 'https://riochain.io/'
        // },
        //         {
        //   img: require('../assets/img/backedBy/inclusionCapital-1.png'),
        //   link: 'https://inclusionventures.com/'
        // },
        // {
        //   img: require('../assets/img/backedBy/exnCapital.png'),
        //   link: 'https://exnetworkcapital.com/'
        // },
        // {
        //   img: require('../assets/img/backedBy/nebula-05.png'),
        //   link: 'https://nebulaventures.inc/'
        // },
        // {
        //   img: require('../assets/img/backedBy/dynasty.png'),
        //   link: 'http://dominus.foundation/'
        // },
        // {
        //   img: require('../assets/img/backedBy/plutusvc-2.png'),
        //   link: 'http://plutus.vc/'
        // },
        // {
        //     img: require('../assets/img/backedBy/darkpool.png'),
        //     link: ''
        // },
        // {
        //     img: require('../assets/img/backedBy/oddinaya.png'),
        //     link: 'https://oddiyana.ventures/'
        // },
        // {
        //   img: require('../assets/img/backedBy/MoonStarterLogo.png'),
        //   link: 'https://moonstarter.net/'
        // },

        // {
        //   img: require('../assets/img/backedBy/kardiaVentures-1.png'),
        //   link: 'https://ventures.kardiachain.io/'
        // },

        // {
        //   img: require('../assets/img/backedBy/HGventures.png'),
        //   link: 'https://www.hangangventures.com/'
        // },
        // {
        //   img: require('../assets/img/backedBy/reblock.png'),
        //   link: 'https://reblock.net/'
        // },
      ]
    }
  },
}
</script>

<style lang="scss">
  .creator-backedby {
    background: #1a1e1f;
    background-position: center;
    background-size: cover;
    padding: 80px 100px;
  }

  .backedby-item {
    max-width: 250px;
    height: 76px;
  }
  .text-backer {
    font-size: 32px;
    font-weight: 400;
    color: #F7FEFF;
  }
  @media only screen and (min-width: 1600px) {
    .creator-backedby {
      padding-left: 10rem;
      padding-right: 10rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    .creator-backedby {
      padding: 120px 24rem;
    }
  }
</style>
