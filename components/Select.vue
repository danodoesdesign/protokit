<template>
  <div class="grid w-full grid-cols-1 mb-8">
    <div class="col-span-1">
      <label for="select" class="block font-bold">{{ label }}</label>
      <p class="mb-2 text-gray-800">{{ hint }}</p>
      <div class="flex flex-row">
        <select v-show="!disabled" type="text" name="select" id="select">
          <slot></slot>
        </select>

        <select
          v-show="disabled"
          type="text"
          disabled
          class="disabled"
          name="select"
          id="select"
        >
          <slot></slot>
        </select>
        <div class="flex flex-col justify-center pointer-events-none">
          <!-- Heroicon name: selector -->
          <svg
            class="z-10 w-5 h-5 -ml-8 text-gray-900 transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    label: String,
    hint: String,
    disabled: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
label {
  @apply block font-bold;
}

select {
  appearance: none;
  outline: none;

  @apply border-gray-900 border-4  rounded-none px-3 py-3 block w-full transform duration-200 cursor-pointer;
  &:hover {
    @apply bg-gray-300;
  }
  ,
  &:focus {
    @apply shadow-outline;
  }
}

select.disabled {
  apperance: none;
  @apply bg-gray-600;
  &:hover {
    @apply cursor-not-allowed;
  }
}
</style>