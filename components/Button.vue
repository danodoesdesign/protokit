<template>
  <div class="inline-block">
    <a class="inline-block" :href="linkTo" aria-hidden="true" tabindex="-1">
      <button v-show="primary" class="flex flex-row btn-primary">
        {{ label }}
      </button>
      <button v-show="secondary" class="flex flex-row btn-secondary">
        {{ label }}
      </button>
      <button v-show="tertiary" class="flex flex-row btn-tertiary">
        {{ label }}
      </button>
    </a>
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
    linkTo: String,
  },
};
</script>

<style lang="postcss" scoped>
.btn-primary {
  outline: none;
  @apply px-6 py-3 no-underline font-bold border-gray-900 bg-gray-900 text-white border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply underline bg-gray-800 border-gray-800 shadow-md transform -translate-y-1;
  }
  &:focus {
    @apply shadow-outline;
  }
}
.btn-secondary {
  outline: none;
  @apply px-6 py-3 no-underline font-bold border-gray-900  border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply underline bg-gray-300;
  }
  &:focus {
    @apply shadow-outline;
  }
}
.btn-tertiary {
  outline: none;
  @apply px-6 py-3 no-underline font-bold border-transparent border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply underline bg-gray-300  border-gray-300;
  }
  &:focus {
    @apply shadow-outline;
  }
}
a {
  @apply no-underline;
}
</style>