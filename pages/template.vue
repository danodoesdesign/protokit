<template>
  <div>
    <Header title="protokit">
      <HeaderItem link="/form">Form</HeaderItem>
      <HeaderItem :active="true" link="/template">Template</HeaderItem>
    </Header>
    <Breadcrumbs firstTitle="Protokit" />

    <div class="container flex flex-col px-5 lg:px-0">
      <NuxtLink to="/" class="mt-5 no-underline"
        ><Button type="tertiary" label="← Go back"
      /></NuxtLink>
      <div class="w-full p-10 mt-5 mb-20 bg-white shadow-xl">
        Stuff goes here
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
};
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: start;
  text-align: left;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
