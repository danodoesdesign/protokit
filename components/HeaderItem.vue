<template>
  <NuxtLink :to="link">
    <div
      v-if="active == false"
      class="flex flex-col items-center justify-center w-auto h-20 px-5 text-white duration-200 transform border-b-8 border-transparent hover:bg-black hover:underline hover:border-purple-600"
    >
      <span class="mt-1">
        <slot></slot>
      </span>
    </div>
    <div
      v-if="active == true"
      class="flex flex-col items-center justify-center w-auto h-20 px-5 text-white duration-200 transform border-b-8 border-purple-600 hover:bg-black hover:underline"
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
