<template>
  <div class="w-screen h-screen bg-black relative overflow-hidden">
    <div class="w-full h-full">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/1800852601254688756/9DB023E1D69F6C3CD7318CE256BE3695212CD37D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="FCT Background"
        class="w-full h-full object-cover"
      >
    </div>
    <div class="fixed w-full h-full inset-0 z-50 flex justify-center items-center">
      <img id="fct__loading_left" src="https://i.imgur.com/18eWLKH.png" alt="FCT Logo" class="max-h-96">
      <div id="fct__loading_right" class="bg-black bg-opacity-50 border-black border-opacity-75 py-8 px-12 text-white rounded-2xl backdrop-filter backdrop-blur-lg">
        <h2 class="text-4xl italic font-title mb-4 text-center">
          Fideos con Tuco
        </h2>
        <h3 class="text-2xl font-title mb-3 text-center border-b border-white border-opacity-25">
          Reglas
        </h3>
        <div>
          <nuxt-content :document="rules" />
        </div>
        <div v-if="playerData" class="border-t border-white border-opacity-50">
          {{ playerData }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, $axios, route }) {
    const rules = await $content('rules').fetch()

    return {
      rules
    }
  },
  data () {
    return {
      browser: null,
      vendor: null,
      gameDetailsCalled: false,
      playerData: null
    }
  },
  mounted () {
    this.browser = window.navigator.userAgent
    this.vendor = window.navigator.vendor

    window.GameDetails = this.onGameDetails

    // this.$nextTick(async () => {
    //   const plySteamID = this.$route.query.sid
    // })
  },
  methods: {
    onGameDetails () {
      this.gameDetailsCalled = true
    }
  }
}
</script>
