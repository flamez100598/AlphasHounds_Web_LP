<template>
  <modal :showing='showing' @closeModal='closeModal' :classes="['creator-modal']">
    <div class='2xl:flex xl:flex lg:flex modal 2xl:space-x-2 xl:space-x-2 lg:space-x-2'>
      <div class='2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full'>
        <div class='title'>NO CODE SMART CONTRACT</div>
        <div class='description text-justify'>
          Most of businesses & users continue to face technological and user experience obstacles in applying blockchain in their daily life.
          Even the most basic transaction types on a blockchain need a certain amount of programming and smart contracts knowledge.
          Our service No-code Smart Contract will be cutting-edge solution in navigating the way of implementing Smart Contract in your business.
          <b>Try me!</b>
        </div>
        <div class='sub-title'>
          Early Register Price from <span style='color: #f6ba25'>0.25ETH</span>,
          <br>
          <span style='color: #c93177'>coming soon</span> in Q4 2021
        </div>
      </div>
      <div class='2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full'>
        <slider :images='images' />
      </div>

    </div>
    <div class='w-full flex flex-wrap justify-center space-y-2 md:space-y-0' style='padding-top: 40px; padding-bottom: 10px;'>
      <div class='w-full md:w-1/2 text-center'>
        <button class='try-btn md:float-left md:ml-6 lg:ml-8 xl:ml-15' @click='showRegisterModal'>Try Me!</button>
      </div>
      <div class='w-full md:w-1/2 text-center'>
        <button class='skip-btn md:float-right md:mr-6 lg:mr-8 xl:mr-15' @click='closeModal'>Skip</button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '~/components/Modal'
import Slider from '~/components/Slider'

export default {
  name: 'SmartContractPortal',
  components: {
    modal: Modal,
    Slider: Slider,
  },
  props: ['showing'],
  data () {
    return {
      images: [
        'smart_contract_1.png',
        'smart_contract_2.png',
      ],
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeSmartContractModal')
    },
    showRegisterModal() {
      this.$emit('showRegisterModal')
      this.closeModal()
    },
  },
}
</script>

<style scoped>
.modal {
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.description {
  margin-top: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 35px;
  letter-spacing: 0.75px;
}
.sub-title{
  margin-top: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.75px;
  text-transform: capitalize;
}

.try-btn {
  font-weight: bold;
  width: 180px;
  height: 50px;
  background: linear-gradient(90deg, #FF87EC 0%, #6359E2 100%);
  border-radius: 10px;
  font-size: 20px;
}
.try-btn:hover {
  transform: scale(1.05);
  transition: transform 200ms ease-in-out;
}
.skip-btn {
  font-weight: bold;
  width: 180px;
  height: 50px;
  background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);
  border-radius: 10px;
  font-size: 20px;
}
.skip-btn:hover {
  transform: scale(1.05);
  transition: transform 200ms ease-in-out;
}
button {
  outline: none;
}
</style>
