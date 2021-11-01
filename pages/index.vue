<template>
  <div class="py-4 px-8">
    <h2 class="text-4xl font-bold">
      Browser info
    </h2>
    <div class="text-gray-500">
      <p v-text="browser" />
      <p v-text="vendor" />
    </div>
    <div v-if="gameDetailsCalled" class="mt-8">
      Game details called!
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      browser: null,
      vendor: null,
      gameDetailsCalled: false
    }
  },
  mounted () {
    this.browser = window.navigator.userAgent
    this.vendor = window.navigator.vendor

    window.GameDetails = this.onGameDetails
  },
  methods: {
    onGameDetails () {
      this.gameDetailsCalled = true
    }
  }
}
</script>
