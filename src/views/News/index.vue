<template>
  <div class='news'>
    <p class="news-page">news page</p>
    <p class="news-page">news page</p>
    <p class="news-page">news page</p>
    <p class="news-page">news page</p>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="scss" scoped>
$color: #f0f;

.news{
  .news-page{
    color: $color;
    font-size: 24px;
  }
}
</style>
