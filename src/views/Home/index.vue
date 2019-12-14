<template>
  <div class="home">
    <p class="home-page">home page ...</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'foo'
    }
  },
  created() {
    console.log('s')
  }
}
</script>

<style lang="scss" scoped>
$color: #f0f;

.home {
  .home-page {
    color: $color;
    font-size: 24px;
  }
}
</style>
