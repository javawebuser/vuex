<template>
  <div>
    <h3>count:{{ $store.state.count }}</h3>
    <button @click="add">+{{ $store.state.n }}</button>
    <button @click="addAsync">addAsync+{{ $store.state.n }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    add () {
      this.$store.commit('add', this.$store.state.n)
    },
    addAsync () {
      this.$store.dispatch('addAsync', this.$store.state.n)
    }
  }
}
</script>
