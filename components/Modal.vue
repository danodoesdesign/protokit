<template>
  <transition name="modal-fade"
    ><div class="z-50 modal-backdrop">
      <div
        class="flex flex-col w-4/5 max-w-screen-lg overflow-x-auto bg-white shadow-2xl md:w-4/6 xl:w-6/12"
      >
        <div class="p-8">
          <header class="flex flex-row justify-between">
            <h3>{{ title }}</h3>
          </header>
          <slot></slot>
        </div>
        <footer class="flex flex-row-reverse justify-between p-8 bg-gray-200">
          <Button :primary="true" :label="buttonLabel" @click.native="close" />
        </footer>
      </div></div
  ></transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    title: String,
    buttonLabel: String,
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="postcss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>