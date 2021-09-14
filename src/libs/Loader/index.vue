<template>
  <div :class="['wrapper-loader', dim, color]">
    <div><span>•</span><span>•</span><span>•</span></div>
  </div>
</template>

<script>
export default {
  props: {
    dim: {
      type: String,
      default: 'is-medium',
    },
    color: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/libs';

@keyframes wave {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

.wrapper-loader {
  display: inline-block;
  &.is-small {
    @include font-size(12px, 1);
  }
  &.is-medium {
    @include font-size(16px, 1);
  }
  &.is-large {
    @include font-size(22px, 1);
  }
  &.white {
    span {
      color: $white;
    }
  }
  &.green {
    span {
      color: $primary;
    }
  }
  span {
    @include margin(null 0.15rem null null);
    animation-name: wave;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    &:last-child {
      @include margin(0);
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}
</style>
