<template>
  <div class="block">
    <div
      class="flex items-center py-3 px-2 transform duration-200 cursor-pointer hover:bg-gray-300 hover:underline"
      @click="makeActive()"
    >
      <input
        class="form-radio cursor-pointer"
        :id="id"
        ref="theRadio"
        type="radio"
        :name="group"
        :value="text"
      />

      <label :for="id" class="cursor-pointer inline-flex items-center">
        {{ text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    group: String,
    text: String,
  },

  methods: {
    makeActive() {
      this.$refs.theRadio.checked = true;
      this.$refs.theRadio.focus();
    },
  },
};
</script>

<style lang="postcss" scoped>
input[type="radio"] {
  /* Hide original inputs */
  //visibility: hidden;
  opacity: 0;
  position: absolute;
}
input[type="radio"] + label:before {
  height: 12px;
  width: 12px;
  margin-right: 10px;
  content: " ";
  display: inline-block;
  vertical-align: baseline;
}

input[type="radio"]:focus + label:before {
  @apply transform duration-200 shadow-outline;
}

input[type="radio"]:checked + label:before {
  background: #1a202c;
}

input[type="radio"] + label:before {
  @apply border-4 border-gray-900 rounded-full h-6 w-6;
}
</style>