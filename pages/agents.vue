<template>
  <div class="container px-10 xl:px-0 py-10 flex flex-col">
    <NuxtLink to="/" class="no-underline"
      ><Button :tertiary="true" label="← Go back"
    /></NuxtLink>
    <p class="mt-10">Welcome back</p>
    <h3 class="-mt-3">Daniel O'Hara</h3>
    <div class="mt-10 w-full">
      <div class="flex flex-row justify-between">
        <h4 class="mb-10">Your properties</h4>
        <Button
          class="-mt-2"
          :secondary="true"
          @click.native="showModal"
          label="+ Add new property"
        />
      </div>
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-5"
      >
        <NuxtLink to="/northbourne" class="no-underline font-normal mb-10">
          <div
            class="col-span-1 flex flex-col transform hover:-translate-y-1 hover:bg-gray-100 cursor-pointer duration-200 hover:shadow-2xl bg-white shadow-xl"
          >
            <div class="p-6 mb-6">
              <img
                class="h-32 mb-4 w-full object-cover translate transform z-10"
                src="https://source.unsplash.com/9LMRQdVv7hw/500x600"
              />
              <h5>Northbourne Ave</h5>
              <p class="font-alt text-sm">House</p>
              <Badge type="success">Leased until June 2022</Badge>
            </div>
          </div></NuxtLink
        >
        <NuxtLink to="/cudgewa" class="no-underline font-normal mb-10">
          <div
            class="col-span-1 flex flex-col transform hover:-translate-y-1 hover:bg-gray-100 cursor-pointer duration-200 hover:shadow-2xl bg-white shadow-xl"
          >
            <div class="p-6 mb-6">
              <img
                class="h-32 mb-4 w-full object-cover translate transform z-10"
                src="https://source.unsplash.com/_TPTXZd9mOo/500x600"
              />
              <h5>Cudgewa Lane</h5>
              <p class="font-alt text-sm">Townhouse</p>
              <Badge type="progress">Ready to list</Badge>
            </div>
          </div></NuxtLink
        >
      </div>
    </div>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      title="Adding a new property"
      buttonLabel="Okay"
    >
      <p class="mt-6">This feature isn't available just yet.</p>
      <p>
        Please <a href="http://dano.haus">contact us</a> and we'll register your
        new property manually.
      </p>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    test() {
      console.log("test() was run.");
    },
  },
};
</script>

<style scoped lang="postcss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: start;
  text-align: left;
}
</style>
