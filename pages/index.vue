<template>
  <div>
    <Header title="dano does prototypes">
      <HeaderItem link="/agents">Agents</HeaderItem>
      <HeaderItem link="/form">Form example</HeaderItem>
    </Header>
    <div class="container py-10 flex flex-col">
      <div class="flex flex-row justify-between w-full">
        <h1 class="mb-10">dano does prototypes</h1>
        <div class="flex-grow"></div>
        <div class="flex flex-col items-end justify-center">
          <Badge class="mb-3">TailwindCSS</Badge>
          <Badge class="mb-3">Vue.js</Badge>
          <Badge>NuxtJS</Badge>
        </div>
      </div>
      <div class="w-2/3 mb-20">
        <p>
          Hi stranger! You've found what is, effectively, my own UI kit I've
          created to help me learn more about Vue.js while having a practical
          output.
        </p>
        <p>
          I intend to use these basic elements alongside a carbon-copy Figma
          library to freakin hyper-speed the creation of concept prototypes in
          my work at
          <a href="http://futurefriendly.team">Future Friendly</a>.
        </p>
        <p>
          Parts of this are responsive, but for the purpose of rapidly
          prototyping for concept testing we often control the device being
          tested on. Thus, this a desktop-first tool set.
        </p>
        <p>Soon to be available on Github.</p>
      </div>
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
      <div class="w-full p-10 mb-20 bg-white shadow-xl flex flex-col">
        <Button class="mb-4" type="primary" label="primary button" />
        <Button class="mb-4" type="secondary" label="secondary button" />
        <Button class="mb-4" type="tertiary" label="tertiary button" />
        <DropdownButton label="dropdown button">
          <p>Choose one reason at a time</p>
          <DropdownItem @click.native="test()" label="EditTest" type="bad" />
          <DropdownItem label="EditTest2" type="good" />
          <DropdownItem label="EditTest3" />
        </DropdownButton>
      </div>

      <h2 class="mb-8">Checkbox and Radios</h2>
      <div class="w-full p-10 mb-20 bg-white shadow-xl">
        <div class="w-1/3">
          <FieldGroup
            label="Choose an option"
            hint="Choose literally anything it doesn't matter."
            class="mb-10"
          >
            <Radio id="01" group="thisGroup" text="This option" />
            <Radio id="02" group="thisGroup" text="Second" />
            <Radio id="03" group="thisGroup" text="Third" />
          </FieldGroup>
          <FieldGroup
            label="Choose an option"
            hint="Choose literally anything it doesn't matter."
          >
            <Checkbox id="04" text="This option" />
            <Checkbox id="05" text="Second" />
            <Checkbox id="06" text="Third" />
          </FieldGroup>
        </div>
      </div>

      <h2 class="mb-8">Inputs</h2>
      <div class="w-full p-10 mb-20 bg-white shadow-xl">
        <div class="w-full grid grid-cols-3 col-gap-6">
          <div class="col-span-1">
            <TextField
              class="mb-4"
              label="Text field"
              hint="This is a good spot for text"
              placeholder="Type your text here"
              :disabled="false"
            />
          </div>
          <div class="col-span-1">
            <TextField
              class="mb-4"
              label="Text field (disabled)"
              hint="This is a good spot for text"
              placeholder="Type your text here"
              :disabled="true"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 col-gap-6">
          <div class="col-span-1">
            <TextArea
              class="mb-4"
              label="Text area"
              hint="This is a good spot for text"
              placeholder="Type your text here"
              :disabled="false"
            />
          </div>
          <div class="col-span-1">
            <TextArea
              class="mb-4"
              label="Text area (disabled)"
              hint="This is a good spot for text"
              placeholder="Type your text here"
              :disabled="true"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 col-gap-6">
          <div class="col-span-1">
            <Select
              class="mb-4"
              label="Select"
              hint="This is a good spot for text"
              :disabled="false"
            >
              <option>TestFirst</option>
              <option>TestSecond</option>
            </Select>
          </div>
          <div class="col-span-1">
            <Select
              class="mb-4"
              label="Select (disabled)"
              hint="This is a good spot for text"
              :disabled="true"
            >
              <option>TestFirst2</option>
            </Select>
          </div>
        </div>
      </div>
      <h2 class="mb-8">Badges</h2>
      <div class="w-full p-10 mb-20 bg-white shadow-xl flex flex-col">
        <Badge class="mb-4">Default</Badge>
        <Badge class="mb-4" type="progress">In progress</Badge>
        <Badge class="mb-4" type="success">Successful</Badge>
        <Badge class="mb-4" type="fail">Failed</Badge>
      </div>
      <h2 class="mb-8">Modal</h2>
      <div class="w-full p-10 mb-20 bg-white shadow-xl">
        <Button
          :primary="true"
          label="Click to open modal"
          @click.native="showModal"
        />
        <Modal
          v-show="isModalVisible"
          @close="closeModal"
          title="Test modal"
          buttonLabel="Very good"
          >Here is some content</Modal
        >
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

<style lang="postcss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: start;
  text-align: left;
}
</style>
