<template>
  <footer class="background">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-24">
        <div class="grid grid-flow-col grid-cols-1 grid-rows-3 space-y-28 mx-auto">
        <div>
          <div class="grid grid-rows-1 grid-flow-col gap-20">
            <div class="grid grid-rows-1 grid-flow-col space-x-6">
              <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 11.0469C8.08058 11.0469 7.03125 12.0962 7.03125 13.3906V32.1406C7.03125 33.435 8.08058 34.4844 9.375 34.4844H35.625C36.9194 34.4844 37.9688 33.435 37.9688 32.1406V13.3906C37.9688 12.0962 36.9194 11.0469 35.625 11.0469H9.375ZM4.21875 13.3906C4.21875 10.5429 6.52728 8.23438 9.375 8.23438H35.625C38.4727 8.23438 40.7812 10.5429 40.7812 13.3906V32.1406C40.7812 34.9883 38.4727 37.2969 35.625 37.2969H9.375C6.52728 37.2969 4.21875 34.9883 4.21875 32.1406V13.3906Z" fill="#FCFCFC"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.45508 12.6107C4.88589 11.9645 5.75898 11.7899 6.4052 12.2207L22.5001 22.9507L38.5951 12.2207C39.2413 11.7899 40.1144 11.9645 40.5452 12.6107C40.976 13.2569 40.8014 14.13 40.1552 14.5608L23.2802 25.8108C22.8078 26.1258 22.1925 26.1258 21.7201 25.8108L4.8451 14.5608C4.19889 14.13 4.02427 13.2569 4.45508 12.6107Z" fill="#FCFCFC"/>
              </svg>
              <h4>info@goen</h4>
            </div>
          </div>
        </div>
        <div class="grid grid-rows-1 grid-flow-col space-y-4 mx-auto">
          <h3>© 2021 GOEN</h3>
        </div>
        <div class="grid grid-rows-1 grid-flow-col gap-y-20 mx-auto">
          <div class="inline-flex space-x-12">
                <template v-for="el in moreLink">
                <a :href="el.link" target="_blank">
                    <img :src="el.src" alt="">
                </a>
                </template>
          </div>
        </div>
      </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo
  },
  data() {
        return {
            moreLink: [
                {
                    src: require('../assets/img/community/Twitter.png'),
                    link: 'https://twitter.com/burger_swap'
                },
                {
                    src: require('../assets/img/community/medium.png'),
                    link: 'https://medium.com/burgerswapblog/introducing-burgerswap-a-democratized-amm-on-binance-smart-chain-ac19287b5a2a'
                },
                {
                    src: require('../assets/img/community/telegram.png'),
                    link: 'https://t.me/burgerswap'
                },
                {
                    src: require('../assets/img/community/github.png'),
                    link: 'https://github.com/burgerswap-org'
                },
                {
                    src: require('../assets/img/community/linedin.png'),
                    link: 'https://github.com/burgerswap-org'
                },
                {
                    src: require('../assets/img/community/facebook.png'),
                    link: 'https://open.kakao.com/o/gQAMv1cd'
                }
            ],
        }
    }
}
</script>


<style scoped>
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    /* identical to box height, or 133% */

    text-align: center;
    letter-spacing: 0.75px;
    text-transform: uppercase;

  }

  .background {
    background-color:#1A1E1F;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    letter-spacing: 0.75px;
    text-transform: uppercase;
  }

  .gap-y-28 {
    line-height: 122px;
  }

  .vl {
    border: 1px solid gray;
    height: 50px;
    width: 1px
}
</style>
