<template>
  <div class="container bg-white">
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph</p>
      <p class="font-alt">Alternative font paragraph</p>
      <Button :primary="true" label="primary button" />
      <Button :secondary="true" label="secondary button" />
      <Button :tertiary="true" label="tertiary button" />
      <div class="links">
        <a href="https://danodoes.design/"> Generic link </a>
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
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
