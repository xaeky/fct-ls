<template>
  <div class="w-screen h-screen bg-black relative overflow-hidden">
    <!--
    <iframe
      id="music-player"
      frameborder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      width="0%"
      height="0%"
      src="https://www.youtube.com/embed/?rel=0&loop=1&autoplay=1&controls=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&listType=playlist&list=PLkqkCTgS0Ea1ajuuqs0yZTYoRRK_U9thC&enablejsapi=1&widgetid=1"
      style="visibility: hidden;"
    />
    -->
    <client-only>
      <youtube
        :video-id="gamemodeData.playlist[Math.floor(gamemodeData.playlist.length * Math.random())]"
        player-width="0"
        player-height="0"
        :player-vars="{ autoplay: 1 }"
        @ready="onPlayerReady"
        @paused="onPaused"
        @error="onError"
      />
    </client-only>
    <div class="w-full h-full">
      <img
        :src="gamemodeData.bg"
        alt="FCT Background"
        class="w-full h-full object-cover"
      >
    </div>
    <div class="fixed w-full h-full inset-0 z-50 flex justify-center items-center">
      <img id="fct__loading_left" :src="gamemodeData.logo" alt="Gamemode Logo" class="max-h-96">
      <div id="fct__loading_right" class="bg-black bg-opacity-50 border-black border-opacity-75 py-8 px-12 text-white rounded-2xl backdrop-filter backdrop-blur-lg">
        <h2 class="text-4xl italic font-title mb-4 text-center">
          {{ gamemodeData.name }}
        </h2>
        <div v-if="gamemodeData.rules">
          <h3 class="text-2xl font-title mb-3 text-left border-b border-white border-opacity-10 pb-3">
            Reglas
          </h3>
          <div>
            <ul v-if="gamemodeData.rules.length" class="list-disc">
              <li v-for="(rule, ruleIdx) in gamemodeData.rules" :key="ruleIdx">
                {{ rule }}
              </li>
            </ul>
          </div>
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
  async asyncData ({ $content, $axios, params }) {
    const gamemodeData = await $content('gamemodes', params.slug).fetch()

    return {
      gamemodeData
    }
  },
  data () {
    return {
      browser: null,
      vendor: null,
      gameDetailsCalled: false,
      playerData: null,
      player: null
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
    },
    onPlayerReady (e) {
      this.player = e.target
      this.player.setVolume(25)
      console.log(this.player)
      console.log('PLAYING')
    },
    onPaused () {
      console.log('PAUSED')
    },
    onError () {
      console.log('ERROR!')
    }
  }
}
</script>
