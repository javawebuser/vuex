<template>
  <div>
    <input type="text" v-model="n" @input="changeNumber">
    <span></span>
    <add></add>
    <p>--------------------------------</p>
  </div>
</template>

<script>
import add from './components/add'
import jian from './components/jian'

export default {
  data () {
    return {
      n: 1
    }
  },
  components: {
    add,
    jian
  },
  methods: {
    changeNumber () {
      const regPos = /^\d+(\.\d+)?$/
      const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/
      if (regPos.test(this.n) || regNeg.test(this.n)) {
        document.querySelector('span').innerHTML = ''
        this.$store.commit('changeNumber', this.n)
      } else {
        document.querySelector('span').innerHTML = '请输入数字'
      }
    }
  }
}
</script>
