<template>
  <div>
    <Header title="dano does prototypes">
      <HeaderItem link="/agents">Agents</HeaderItem>
      <HeaderItem :active="true" link="/form">Form example</HeaderItem>
    </Header>
    <div class="container py-10 flex flex-col">
      <div class="w-full p-10 mb-20 bg-white shadow-xl grid grid-cols-4">
        <div class="col-span-4 md:col-span-3 lg:col-span-2">
          <NuxtLink to="/" class="no-underline"
            ><Button :tertiary="true" label="← Go back"
          /></NuxtLink>
          <div class="flex flex-row justify-between items-center">
            <h1>Form</h1>
            <Badge>Latest — version 6.8.4</Badge>
          </div>
          <p>
            We need your details so we can do this for you. You don't have to do
            this right now, but it will help later.
          </p>
          <h2>Your details</h2>
          <p>We ask for your basic information so we can identify you.</p>
          <div class="grid grid-cols-6">
            <div class="col-span-3 xl:col-span-4">
              <TextField label="Full name" />
            </div>
            <div class="col-span-3 xl:col-span-2 flex flex-row-reverse">
              <Button
                class="mt-8"
                :tertiary="true"
                label="What is this?"
                @click.native="showModal"
              />
            </div>
          </div>
          <Select
            label="Are you an Australian Citizen?"
            hint="You don't need to be honest"
          >
            <option>No, not really</option>
            <option>I try to be!</option>
            <option>아니요 저는 한국인입니다</option>
          </Select>
          <TextArea
            label="Describe your passions"
            hint="Try to keep it to 2 paragraphs"
          />
          <div class="w-full flex flex-row justify-between">
            <Button :tertiary="true" label="← Back a step" />
            <Button
              class="self end"
              :primary="true"
              label="Continue →"
              linkTo="http://www.google.com"
            />
          </div>
        </div>
      </div>
      <Modal
        v-show="isModalVisible"
        @close="closeModal"
        title="What is full name?"
        buttonLabel="Okay"
      >
        <p>
          Full is a special way of saying maxiumus containus. Your name is what
          other people call you when you're in trouble.
        </p>
        <h4>Example</h4>
        <p>Peter Henderson</p>
      </Modal>
    </div>
  </div>
</template>

<!-- Modal logic ========== -->
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
  },
};
</script>
<!-- Modal logic END ========== -->

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: start;
  text-align: left;
}
</style>
