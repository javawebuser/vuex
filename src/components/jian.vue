<template>
  <div>
    <h3>count:{{ count }}</h3>
    <button @click="sub">-{{ $store.state.n }}</button>
    <button @click="subAsync">subAsync-{{ $store.state.n }}</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['jian']),
    ...mapActions(['jianAsync']),
    sub () {
      this.jian(this.$store.state.n)
    },
    subAsync () {
      this.jianAsync(this.$store.state.n)
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
