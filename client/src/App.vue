<template>
  <div>
    <NavBar />
  </div>
  <div class="flex items-center justify-center mb-4">
    <div class="relative w-full h-custom-height">
      <!-- Background image with Tailwind gradient overlay -->
      <div class="absolute inset-0">
        <img class="absolute inset-0 h-full w-full object-cover" src="C:\Users\Jericho James\blog\myblog\src\components\images\background.jpg" alt="Background Image"/>
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-400 bg-opacity-75 to-transparent"></div>
      </div>
      <!-- Text content -->
      <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-body">
        <p class="text-center mb-7">Nurture your creativity</p>
        <h1 class="text-4xl">DISCOVER, SHARE, AND INSPIRE.</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>
