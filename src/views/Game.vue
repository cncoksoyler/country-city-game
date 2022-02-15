<template>
  <div>
    <div class="max-w-full md:max-w-screen-sm mx-auto p-2">
      <h1>Let the game begin</h1>
      <div v-for="city in cities" :key="city.cca2">
        <h2>{{ city.name.common }}</h2>
        <img :src="city.flags.svg" class="w-full" /><br />
      </div>
    </div>
    <div class="grid grid-cols-2">
      <option value=""></option>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: this.$store.state.cities,
    };
  },
};
</script>

