<template>
  <div>
    <div v-if="type == 'success'">
      <div class="badge success">
        <slot></slot>
      </div>
    </div>
    <div v-if="type == 'fail'">
      <div class="badge fail">
        <slot></slot>
      </div>
    </div>
    <div v-if="type == 'progress'">
      <div class="badge progress">
        <slot></slot>
      </div>
    </div>
    <div v-else>
      <div class="badge">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>

<style lang="postcss" scoped>
.badge {
  @apply bg-gray-200 flex flex-col justify-center px-3 h-8 text-gray-900 text-sm;

  &.success {
    @apply bg-green-200 text-green-900;
  }
  &.fail {
    @apply bg-red-200 text-red-900;
  }
  &.progress {
    @apply bg-blue-200 text-blue-900;
  }
}
</style>