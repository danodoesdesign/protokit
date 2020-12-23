<template>
  <div>
    <fieldset>
      <label class="block font-bold">{{ label }}</label>
      <p class="text-gray-800 mb-2">{{ hint }}</p>
      <slot></slot>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    hint: String,
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
</style>