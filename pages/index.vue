<template>
  <div class="container py-10 flex flex-col">
    <h2 class="mb-8">Typography</h2>
    <div class="w-full p-10 mb-20 bg-white shadow-xl">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph</p>
      <p class="font-alt">Alternative font paragraph</p>
      <a href="https://danodoes.design/"> Generic link </a>
    </div>

    <h2 class="mb-8">Buttons</h2>
    <div class="w-full p-10 mb-20 bg-white shadow-xl">
      <Button class="mb-4" :primary="true" label="primary button" />
      <Button class="mb-4" :secondary="true" label="secondary button" />
      <Button class="mb-4" :tertiary="true" label="tertiary button" />
      <DropdownButton label="dropdown button" />
    </div>

    <h2 class="mb-8">Inputs</h2>
    <div class="w-full p-10 mb-20 bg-white shadow-xl">
      <div class="w-full grid grid-cols-3">
        <div class="col-span-1">
          <TextField
            class="mb-4"
            label="Text field"
            hint="This is a good spot for text"
            placeholder="Type your text here"
            :disabled="false"
          />
          <TextField
            class="mb-4"
            label="Text field (disabled)"
            hint="This is a good spot for text"
            placeholder="Type your text here"
            :disabled="true"
          />
        </div>
      </div>

      <div class="w-full grid grid-cols-3">
        <div class="col-span-1">
          <TextArea
            class="mb-4"
            label="Text area"
            hint="This is a good spot for text"
            placeholder="Type your text here"
            :disabled="false"
          />
          <TextArea
            class="mb-4"
            label="Text area (disabled)"
            hint="This is a good spot for text"
            placeholder="Type your text here"
            :disabled="true"
          />
        </div>
      </div>

      <div class="w-full grid grid-cols-3">
        <div class="col-span-1">
          <Select
            class="mb-4"
            label="Select"
            hint="This is a good spot for text"
            :disabled="false"
          />
          <Select
            class="mb-4"
            label="Select (disabled)"
            hint="This is a good spot for text"
            :disabled="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

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
