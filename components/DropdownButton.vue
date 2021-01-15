<template>
  <div class="grid grid-cols-1">
    <div class="col-span-1">
      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            @click="toggleHide()"
          >
            {{ label }}
            <!-- Heroicon name: chevron-down -->
            <svg
              id="chevron"
              class="w-6 h-6 ml-2 -mr-1 duration-200 transform"
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
          </button>
        </div>
        <div
          id="dropdown_menu"
          style="display: none"
          class="absolute right-0 w-56 mt-2 duration-200 origin-top-right transform bg-white border-4 border-gray-900 divide-y divide-gray-100 shadow-2xl ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    label: String,
  },
  methods: {
    toggleHide() {
      var dropdownMenu = document.getElementById("dropdown_menu");
      var chevron = document.getElementById("chevron");
      //
      if (dropdownMenu.style.display === "none") {
        //
        dropdownMenu.style.display = "block";
        chevron.classList.add("rotate-180");
        dropdownMenu.focus();
        //
        //
      } else {
        //
        dropdownMenu.style.display = "none";
        chevron.classList.remove("rotate-180");
        //
      }
    },
  },
  events: {},
};
</script>

<style lang="postcss" scoped>
p {
  @apply px-4 mb-0 py-2;
}
button {
  outline: none;
  @apply px-6 py-3 no-underline font-bold border-gray-900 bg-white border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply underline bg-gray-500 bg-opacity-25;
  }
  &:focus {
    @apply shadow-outline;
  }
}
</style>