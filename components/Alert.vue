<template>
  <transition name="alert-fade">
    <div class="flex flex-col items-center">
      <div
        class="flex flex-col bg-gray-900 text-white shadow-2xl w-11/12 md:w-3/5 max-w-screen-lg fixed bottom-0 mb-10 z-50"
      >
        <div class="flex flex-row p-5 bg-gray-900 items-center">
          <h6 class="mb-0 ml-5">{{ text }}</h6>
          <span class="flex-grow"></span>
          <Button
            @click.native="close"
            v-if="buttonLabel"
            type="tertiary"
            :label="buttonLabel"
            class="ml-4"
          />
          <Button
            @click.native="close"
            v-if="buttonLabel === null"
            type="tertiary"
            label="Dismiss"
            class="ml-4"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    text: String,
    buttonLabel: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
.alert-fade-enter,
.alert-fade-leave-active {
  opacity: 0;
}

.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>