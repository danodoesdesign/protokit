<template>
  <div>
    <a v-if="type == 'good'" role="menuitem" class="good">
      {{ label }}
    </a>
    <a v-if="type == 'bad'" class="bad" role="menuitem"> {{ label }}</a>
    <a v-if="type != 'good' && type != 'bad'" role="menuitem"> {{ label }}</a>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    label: String,
  },
};
</script>

<style lang="postcss" scoped>
a {
  @apply block no-underline px-4 py-2 transform duration-200;
  &:hover,
  &:focus {
    @apply underline bg-gray-300 cursor-pointer;
  }
}

a.good {
  @apply text-green-900 bg-green-200;
  &:hover,
  &:focus {
    @apply bg-green-300;
  }
}

a.bad {
  @apply text-red-900 bg-red-200;
  &:hover,
  &:focus {
    @apply bg-red-300;
  }
}
</style>