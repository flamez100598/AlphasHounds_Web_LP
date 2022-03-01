<template>
  <div style='position: relative' v-click-outside='() => {this.showDropdownOption = false}'>
    <div
      class="selector flex"
      :class="{'selector-active': showDropdownOption}"
      @click="() => {this.showDropdownOption = !this.showDropdownOption; $emit('click')}"
      @mouseover="$emit('mouseover', $event)"
      @mouseleave="$emit('mouseleave')"
    >
      <div
        class='text-center w-full'
        style='cursor: pointer'
        v-model='content'
      >
        {{ name }}
      </div>
      <div style='cursor: pointer'>
        <img v-if='!showDropdownOption' style='height: 12px; width: 19px;' class=' mt-2 ml-2 mr-2' src='~/assets/img/selector/up_arrow.png'>
        <img v-else style='height: 12px; width: 19px;' class=' mt-2 ml-2 mr-2' src='~/assets/img/selector/down_arrow.png'>
      </div>
    </div>
    <ul v-if='showDropdownOption' class='dropdown'>
      <li
        v-for='option in options'
        :class="{ 'active': checkValueActive(option.value) }"
        class='dropdown_item flex justify-center'
        style='cursor: pointer'
        @click='clickValue(option.value)'
      >
        {{ option.display }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Selector',
  props: [
    'value',
    'options',
    'name',
    'multiple',
  ],
  data () {
    return {
      content: this.value,
      showDropdownOption: false,
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    },
    clickValue(value) {
      if (this.multiple) {
        if (this.content.includes(value)) {
          const index = this.content.indexOf(value)
          this.content.splice(index, 1)
        } else {
          this.content.push(value)
        }
      } else {
        this.content = value
        this.showDropdownOption = false
      }
      this.handleInput()
    },
    checkValueActive(value) {
      return this.multiple ? this.content.includes(value) : this.content === value
    }
  }
}
</script>

<style scoped>
.selector {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);
  font-weight: bold;
  font-size: 16px;
  color: white;
}
.selector-active {
  border-radius: 10px 10px 0 0;
}

.dropdown {
  width: 100%;
  margin-top: 5px;
  position: absolute;
  max-height: 200px;
  overflow-y: auto;
}
.dropdown_item {
  padding: 10px;
  background-color: #5E2389;
  font-weight: bold;
  font-size: 16px;
  color: white;
}
.dropdown_item:hover {
  background-color: #7a428d;
}
.dropdown .active {
  background: linear-gradient(90deg, #FB2B6D 0%, #753A88 100%);
}
.dropdown::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: black !important;
}

.dropdown::-webkit-scrollbar
{
  width: 5px;
  background-color: black;
}

.dropdown::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: white;
}
</style>
