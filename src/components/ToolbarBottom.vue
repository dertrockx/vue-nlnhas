<template>
  <footer>
    <div class="footer-item">Home</div>
    <div class="footer-item">Feed</div>
    <div class="footer-item">About</div>
  </footer>
</template>
<script>
export default {
  name: "ToolbarBottom"
}
</script>
<style lang="scss">

footer {
  display: grid;
  background: #ddd;
  grid-template-columns: repeat(3, 1fr);
  grid-area: "footer";
  text-align: center;

  .footer-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

}



</style>