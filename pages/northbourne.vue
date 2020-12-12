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
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col">
          <h3 class="mt-10">Northbourne Avenue</h3>
          <p class="font-alt">House</p>
          <Badge type="success">Has tenants until June 2022</Badge>
        </div>
        <div class="flex flex-col">
          <DropdownButton label="Manage">
            <DropdownItem label="Organise maintennence" />
            <DropdownItem label="Evict tenants 😈🔪😡" type="bad" />
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
