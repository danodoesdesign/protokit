<template>
  <div class="w-screen bg-gray-900">
    <div
      class="container flex justify-items-start items-start text-left h-20 shadow-xl"
    >
      <NuxtLink class="text-white self-center mt-1 no-underline" to="/"
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
  /* index.vue container's min height is cancelled below */
  min-height: 0;
}
</style>

<!--

<NuxtLink to="/agents">
        <div
          class="text-white hover:bg-black w-20 h-20 flex flex-col justify-center items-center hover:underline transform duration-200 border-b-8 border-transparent hover:border-purple-600"
        >
          <span class="mt-1">Home</span>
        </div>
      </NuxtLink>

      -->