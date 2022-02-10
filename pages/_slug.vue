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
      <div id="fct__loading_right" class="bg-black bg-opacity-75 py-6 px-6 text-white rounded-xl backdrop-filter backdrop-blur-lg">
        <div v-if="gamemodeData.rules">
          <h3 class="text-4xl font-cool mb-4 text-left border-b border-white border-opacity-10">
            Reglas del {{ gamemodeData.name }}
          </h3>
          <div>
            <ul v-if="gamemodeData.rules.length" id="fct__loading_rules_list" class="text-xl space-y-2">
              <li
                v-for="(rule, ruleIdx) in gamemodeData.rules"
                :key="ruleIdx"
                class="rounded pr-6 pl-3 py-1 relative"
              >
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
      this.player.setVolume(20)
    }
  }
}
</script>

<style scoped>
#fct__loading_rules_list li::before {
  content: '•';
  position: absolute;
  left: 0px;
  font-size: 9pt;
  opacity: .3;
}
</style>
