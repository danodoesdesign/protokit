<template>
  <div>
    <fieldset>
      <label class="block font-bold">{{ label }}</label>
      <p class="mb-2 text-gray-800">{{ hint }}</p>
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