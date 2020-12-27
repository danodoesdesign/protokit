<template>
  <div class="flex flex-col">
    <button class="z-10" @click="toggle()">
      <div
        class="flex flex-row bg-gray-300 p-4 cursor-pointer transform duration-200 hover:bg-gray-400 focus:shadow-outline focus:outline-none"
        id="accordian"
      >
        <h6 class="m-0 mt-1">{{ title }}</h6>
        <div class="flex-grow"></div>
        <!-- Heroicon name: chevron-down -->
        <svg
          id="icon"
          class="h-6 w-6 transform duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </button>
    <transition name="smooth"
      ><div
        id="accordianHiddenSection"
        class="hidden flex flex-col px-4 pt-5 bg-gray-100"
      >
        <slot></slot></div
    ></transition>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggle() {
      console.log("toggle run");
      var icon = document.getElementById("icon");
      var accordian = document.getElementById("accordian");
      var accordianHiddenSection = document.getElementById(
        "accordianHiddenSection"
      );
      if (this.isExpanded == false) {
        console.log("isExpanded was false");
        icon.classList.add("rotate-180");
        accordianHiddenSection.classList.remove("hidden");
        accordian.focus();
        this.isExpanded = true;
      } else {
        console.log("isExpanded is " + this.isExpanded);
        icon.classList.remove("rotate-180");
        accordianHiddenSection.classList.add("hidden");
        accordian.blur();
        this.isExpanded = false;
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
button {
  outline: none;
  &:focus {
    @apply shadow-outline;
  }
}
</style>
