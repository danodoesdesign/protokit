<template>
  <div class="w-full grid grid-cols-1">
    <div class="col-span-1">
      <label for="text_field" class="block font-bold">{{ label }}</label>
      <p class="text-gray-800 mb-2">{{ hint }}</p>

      <input
        v-show="!disabled"
        type="text"
        :placeholder="placeholder"
        name="text_field"
        id="text_field"
      />

      <input
        v-show="disabled"
        type="text"
        disabled
        class="disabled"
        name="text_field"
        id="text_field"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    label: String,
    hint: String,
    placeholder: String,
    disabled: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
label {
  @apply block font-bold;
}

input {
  -webkit-appearance: none;
  border-radius: 0; /*mobile safari fix*/
  @apply border-gray-900 border-4 px-3 py-3 block w-full transform duration-200 mb-8;
  &:hover {
    @apply bg-gray-300;
  }
  ,
  &:focus {
    @apply border-indigo-500;
  }
}

::placeholder {
  @apply text-gray-600;
}

input.disabled {
  -webkit-appearance: none;
  border-radius: 0; /*mobile safari fix*/
  @apply bg-gray-600;
  &:hover {
    @apply cursor-not-allowed;
  }
}
</style>