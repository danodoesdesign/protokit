<template>
  <div>
    <Header title="protokit">
      <HeaderItem :active="true" link="/form">Form</HeaderItem>
      <HeaderItem link="/template">Template</HeaderItem>
    </Header>
    <Breadcrumbs firstTitle="Protokit" />

    <div class="container px-5 lg:px-0 flex flex-col">
      <NuxtLink to="/" class="no-underline mt-5"
        ><Button type="tertiary" label="← Go back"
      /></NuxtLink>
      <div class="w-full p-10 mt-5 mb-20 bg-white shadow-xl grid grid-cols-4">
        <div class="col-span-4 md:col-span-3 lg:col-span-2">
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
                type="tertiary"
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
          <FieldGroup
            class="mt-3 mb-8"
            label="Can we harvest your personal data?"
          >
            <Radio
              id="01"
              group="dataHarvest"
              text="I already have a Facebook account"
            />
            <Radio id="02" group="dataHarvest" text="Yes" />
            <Radio id="03" group="dataHarvest" text="Probably" />
          </FieldGroup>
          <FieldGroup class="mb-8" label="Final declaration">
            <Checkbox
              id="04"
              text="I think therefore I am"
              @click.native="isContinueDisabled = !isContinueDisabled"
            />
          </FieldGroup>
          <div class="w-full flex flex-row justify-between">
            <Button type="tertiary" label="← Back a step" />
            <Button
              v-if="isContinueDisabled === false"
              class="self end"
              type="primary"
              label="Continue →"
              linkTo="http://www.google.com"
            />
            <Button
              v-if="isContinueDisabled === true"
              class="self end"
              :disabled="true"
              type="primary"
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

<script>
export default {
  transition: "fade",
  data() {
    return {
      isModalVisible: false,
      isContinueDisabled: true,
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
