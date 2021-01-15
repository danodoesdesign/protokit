<template>
  <div class="w-screen bg-gray-900">
    <div
      class="container flex items-start h-20 px-5 text-left shadow-xl justify-items-start lg:px-0"
    >
      <NuxtLink class="self-center mt-1 text-white no-underline" to="/"
        ><h4>{{ title }}</h4></NuxtLink
      >
      <div class="flex-grow"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
.container {
  min-height: 0;
}
</style>

<!--

<NuxtLink to="/agents">
        <div
          class="flex flex-col items-center justify-center w-20 h-20 text-white duration-200 transform border-b-8 border-transparent hover:bg-black hover:underline hover:border-purple-600"
        >
          <span class="mt-1">Home</span>
        </div>
      </NuxtLink>

      -->