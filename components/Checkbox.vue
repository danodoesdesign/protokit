<template>
  <div class="block">
    <div
      class="flex items-center py-3 px-2 transform duration-200 cursor-pointer hover:bg-gray-300 hover:underline"
      @click="toggleCheck()"
      @keyup.space="toggleCheck()"
      @keyup.enter="toggleCheck()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="23px"
        height="23px"
        ref="checkmark"
        class="checkmark absolute z-10 hidden"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
      <input
        class="form-checkbox"
        :id="id"
        ref="theCheckbox"
        type="checkbox"
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
    text: String,
  },

  methods: {
    toggleCheck() {
      if (this.$refs.theCheckbox.checked == true) {
        this.$refs.theCheckbox.checked = false;
        this.$refs.checkmark.classList.add("hidden");
        this.$refs.checkmark.classList.remove("visible");
      } else if (this.$refs.theCheckbox.checked == false) {
        this.$refs.theCheckbox.checked = true;
        this.$refs.checkmark.classList.add("visible");
        this.$refs.checkmark.classList.remove("hidden");
      } else {
        console.log("Something's gone wrong lol");
      }

      this.$refs.theCheckbox.focus();
    },
  },
};
</script>

<style lang="postcss" scoped>
input[type="checkbox"] {
  /* Hide original inputs */
  //visibility: hidden;
  opacity: 0;
  position: absolute;
}
input[type="checkbox"] + label:before {
  height: 12px;
  width: 12px;
  margin-right: 10px;
  content: " ";
  display: inline-block;
  vertical-align: baseline;
}

input[type="checkbox"]:focus + label:before {
  @apply transform duration-200 shadow-outline;
}

input[type="checkbox"]:checked + label:before {
  background: #1a202c;
}

input[type="checkbox"] + label:before {
  @apply border-4 border-gray-900  h-6 w-6;
}

.checkmark {
  margin-left: 2px;
}
</style>