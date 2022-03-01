<template>
  <div style='position: relative'>
    <div class="selector flex" :class="{'selector-active': showDropdownOption}">
      <input
        @input='handleInput'
        @keyup='filterOptions'
        v-model='content'
        @focus='() => {this.showDropdownOption = true}'
        v-click-outside='() => {this.showDropdownOption = false}'
        type="text"
        :placeholder='placeholder'
      >
      <img v-if='icon' style='width: 25px;' class='ml-4 mr-2' :src="require(`~/assets/img/${icon}`)">
    </div>
    <ul v-if='showDropdownOption' class='dropdown'>
      <li v-for='option in listOptions' class='dropdown_item' @click='setValue(option.value)'>{{ option.name }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SearchSelector',
  props: ['value', 'options', 'icon', 'placeholder'],
  mounted() {
    this.listOptions = this.options
  },
  data () {
    return {
      content: this.value,
      // list Options must be with format [{name: '', value: ''}]
      listOptions: [],
      showDropdownOption: false,
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    },
    setValue(value) {
      this.content = value
      this.$emit('input', this.content)
      this.showDropdownOption = false
    },
    filterOptions() {
      if (this.content) {
        this.listOptions = []
        this.options.forEach((item) => {
          const keyWord = this.content.trim().toLowerCase()
          if (item.name.toLowerCase().startsWith(keyWord)) {
            this.listOptions.push(item)
          }
        })
      } else {
        this.listOptions = this.options
      }
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
}
.selector-active {
  border-radius: 10px 10px 0 0;
}
input {
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background: none;
}
input::placeholder {
  font-weight: bold;
  font-size: 16px;
  color: white;
}
input:focus {
  outline: none;
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
