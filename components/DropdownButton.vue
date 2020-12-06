<template>
  <div class="w-full grid grid-cols-1">
    <div class="col-span-1">
      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="inline-flex justify-center w-full border border-gray-300 shadow-sm px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            @click="toggleHide()"
          >
            {{ label }}
            <!-- Heroicon name: chevron-down -->
            <svg
              id="chevron"
              class="-mr-1 ml-2 h-6 w-6 transform duration-200"
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

        <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
        <div
          id="dropdown_menu"
          style="display: none"
          class="origin-top-right absolute right-0 mt-2 w-56 shadow-2xl border-gray-900 border-4 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 transform duration-200"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="">
            <a
              href="#"
              class="block px-4 py-2 transform duration-200 hover:bg-gray-300 focus:bg-gray-300"
              role="menuitem"
              >Edit</a
            >
            <a
              href="#"
              class="block px-4 py-2 transform duration-200 hover:bg-gray-300 focus:bg-gray-300"
              role="menuitem"
              >Duplicate</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-green-900 bg-green-200 transform duration-200 hover:bg-green-300 focus:bg-green-300"
              role="menuitem"
              >Positive</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-red-900 bg-red-200 transform duration-200 hover:bg-red-300 focus:bg-red-300"
              role="menuitem"
              >Destructive</a
            >
          </div>
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
      if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
        chevron.classList.add("rotate-180");
      } else {
        dropdownMenu.style.display = "none";
        chevron.classList.remove("rotate-180");
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
button {
  @apply px-6 py-3 underline font-bold border-gray-900 bg-white border-4 transform duration-200;
  &:hover,
  &:focus {
    @apply no-underline bg-gray-300;
  }
}
</style>