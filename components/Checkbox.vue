<template>
  <div class="block">
    <div
      class="flex items-center px-2 py-3 duration-200 transform cursor-pointer hover:bg-gray-600 hover:bg-opacity-25 hover:underline"
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
        class="absolute z-10 hidden checkmark"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
      <input
        class="cursor-pointer form-checkbox"
        :id="id"
        ref="theCheckbox"
        type="checkbox"
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
    text: String,
  },

  methods: {
    //
    toggleCheck() {
      var theCheckbox = this.$refs.theCheckbox;
      var checkmark = this.$refs.checkmark;

      if (theCheckbox.checked == true) {
        //
        theCheckbox.checked = false;
        checkmark.classList.add("hidden");
        checkmark.classList.remove("visible");
        //
        //
      } else if (theCheckbox.checked == false) {
        //
        theCheckbox.checked = true;
        checkmark.classList.add("visible");
        checkmark.classList.remove("hidden");
        //
        //
      } else {
        console.log("Something's gone wrong lol");
      }

      theCheckbox.focus();
      //
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
  height: 11px;
  width: 11px;
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