<template>
  <div class="block">
    <div
      class="flex items-center px-2 py-3 duration-200 transform cursor-pointer hover:bg-gray-600 hover:bg-opacity-25 hover:underline"
      @click="makeActive()"
    >
      <input
        class="cursor-pointer form-radio"
        :id="id"
        ref="theRadio"
        type="radio"
        :name="group"
        :value="text"
      />

      <label class="inline-flex items-center cursor-pointer">
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
      var theRadio = this.$refs.theRadio;
      theRadio.checked = true;
      theRadio.focus();
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