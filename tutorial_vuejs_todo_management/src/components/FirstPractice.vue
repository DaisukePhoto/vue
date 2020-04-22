<template>
  <div>
    <p>{{ count }}回クリックしたよ</p>
    <button v-on:click="increment">カウントを増やす</button>
  </div>
</template>

<script>
export default {
  name: 'FirstPractice',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment: function () {
      this.count += 1
    }
  }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
