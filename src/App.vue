<template>
  <div>
    <div class="container clearfix">
      <div class="container-items shenfenzhengfuwu"></div>
      <div class="container-items yeshen"></div>
      <div class="container-items yeshenzhong"></div>
      <div class="container-items zhinengmensuofuwu"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~sprite.scss";

.container {
  &-items {
    float: left;
  }
}

.shenfenzhengfuwu {
  @include sprite($shenfenzhengfuwu);
}

.yeshen {
  @include sprite($yeshen);
}

.yeshenzhong {
  @include sprite($yeshenzhong);
}

.zhinengmensuofuwu {
  @include sprite($zhinengmensuofuwu);
}
</style>
