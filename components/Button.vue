<template>
  <div>
    <button v-show="primary" class="flex flex-row btn-primary">
      {{ label }}
    </button>
    <button v-show="secondary" class="flex flex-row btn-secondary">
      {{ label }}
    </button>
    <button v-show="tertiary" class="flex flex-row btn-tertiary">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
.btn-primary {
  @apply px-6 py-3 underline font-bold border-gray-900 bg-gray-900 text-white border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply no-underline bg-gray-800 shadow-md transform -translate-y-1;
  }
}
.btn-secondary {
  @apply px-6 py-3 underline font-bold border-gray-900 bg-white border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply no-underline bg-gray-300;
  }
}
.btn-tertiary {
  @apply px-6 py-3 underline font-bold border-white bg-white border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply no-underline bg-gray-300  border-gray-300;
  }
}
</style>