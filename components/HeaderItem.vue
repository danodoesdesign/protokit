<template>
  <NuxtLink :to="link">
    <div
      v-if="active == false"
      class="text-white hover:bg-black w-auto h-20 px-5 flex flex-col justify-center items-center hover:underline transform duration-200 border-b-8 border-transparent hover:border-purple-600"
    >
      <span class="mt-1">
        <slot></slot>
      </span>
    </div>
    <div
      v-if="active == true"
      class="text-white hover:bg-black w-auto h-20 px-5 flex flex-col justify-center items-center hover:underline transform duration-200 border-b-8 border-purple-600"
    >
      <span class="mt-1">
        <slot></slot>
      </span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    active: Boolean,
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
