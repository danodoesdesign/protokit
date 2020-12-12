<template>
  <div class="container px-10 xl:px-0 py-10 flex flex-col">
    <NuxtLink to="/agents" class="no-underline"
      ><Button :tertiary="true" label="← Go back"
    /></NuxtLink>
    <div class="bg-white w-full px-10 py-10 shadow-xl mt-10">
      <img
        class="h-64 w-full object-cover"
        src="https://source.unsplash.com/_TPTXZd9mOo/1000x1000"
      />
      <div class="grid grid-cols-6">
        <div class="col-span-3 flex flex-col">
          <h3 class="mt-10">Cudgewa Lane</h3>
          <p class="font-alt">Townhouse</p>
          <Badge type="progress">Ready to list</Badge>
        </div>
        <div class="col-span-3 flex flex-row-reverse items-center">
          <Button :primary="true" label="List online now" />
          <DropdownButton label="Edit" class="mr-5">
            <DropdownItem label="Change details" />
            <DropdownItem label="Remove" type="bad" />
          </DropdownButton>
        </div>
      </div>
    </div>
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
