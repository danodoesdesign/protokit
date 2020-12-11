<template>
  <div class="w-full grid grid-cols-1">
    <div class="col-span-1">
      <label for="text_area" class="block font-bold">{{ label }}</label>
      <p class="text-gray-800 mb-2">{{ hint }}</p>

      <textarea
        v-show="!disabled"
        rows="3"
        :placeholder="placeholder"
        name="text_area"
        id="text_area"
      >
      </textarea>

      <textarea
        v-show="disabled"
        disabled
        class="disabled resize-none"
        rows="3"
        name="text_area"
        id="text_area"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
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

textarea {
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

textarea.disabled {
  -webkit-appearance: none;
  border-radius: 0; /*mobile safari fix*/
  @apply bg-gray-600 border-gray-900;
  &:hover {
    @apply cursor-not-allowed;
  }
}
</style>