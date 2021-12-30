<template>
  <div class="w-screen h-screen bg-black relative overflow-hidden">
    <div class="w-full h-full" />
    <div class="fixed w-full h-full inset-0 z-50 flex justify-center items-center">
      <img id="fct__loading_left" src="https://i.imgur.com/18eWLKH.png" alt="FCT Logo" class="max-h-96">
      <div id="fct__loading_right" class="bg-black bg-opacity-50 border-black border-opacity-75 py-8 px-12 text-white rounded-2xl backdrop-filter backdrop-blur-lg">
        <h2 class="text-4xl italic font-title mb-4 text-center">
          Fideos con Tuco
        </h2>
        <h3 class="text-2xl font-title mb-3 text-center border-b border-white border-opacity-25">
          Modo de juego desconocido
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      browser: null,
      vendor: null,
      gameDetailsCalled: false,
      playerData: null
    }
  }
}
</script>
