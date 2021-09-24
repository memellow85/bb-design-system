<template>
  <div :class="['wrapper-loader', dim, color, type]">
    <div v-if="type === 'line'"><span>•</span><span>•</span><span>•</span></div>
    <div v-if="type === 'circle'"><span></span></div>
  </div>
</template>

<script>
export default {
  name: 'BBLoader',
  props: {
    dim: {
      type: String,
      default: 'is-medium',
    },
    color: {
      type: String,
      default: 'white',
    },
    type: {
      type: String,
      default: 'line',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/libs';

$border-circle: 0.1rem;

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

@keyframes loader-circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-circle-inner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-circle-effect {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.wrapper-loader {
  &.line {
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
  &.circle {
    @include position(absolute, 0 null null 0);
    > div {
      @include size(2rem);
      display: block;
      animation: loader-circle 3s linear infinite;

      span {
        @include position(absolute, 0 0 0 0);
        @include size(2rem);
        display: block;
        margin: auto;
        clip: rect(16px, 32px, 32px, 0);
        animation: loader-circle-inner 1.5s cubic-bezier(0.77, 0, 0.175, 1)
          infinite;

        &::before {
          @include position(absolute, 0 0 0 0);
          @include size(2rem);
          content: '';
          display: block;
          margin: auto;
          border: $border-circle solid transparent;
          border-top: $border-circle solid $color-8;
          border-radius: 50%;
          animation: loader-circle-effect 1.5s cubic-bezier(0.77, 0, 0.175, 1)
            infinite;
          box-sizing: border-box;
        }

        &::after {
          @include position(absolute, 0 0 0 0);
          @include size(2rem);
          content: '';
          display: block;
          margin: auto;
          border: $border-circle solid rgba($color-8, 0.5);
          border-radius: 50%;
          box-sizing: border-box;
        }
      }
    }
    &.yellow {
      > div {
        span {
          &::before {
            border-top: $border-circle solid $warning;
          }
          &::after {
            border: $border-circle solid rgba($warning, 0.5);
          }
        }
      }
    }
    &.green {
      > div {
        span {
          &::before {
            border-top: $border-circle solid $primary;
          }
          &::after {
            border: $border-circle solid rgba($primary, 0.5);
          }
        }
      }
    }
    &.red {
      > div {
        span {
          &::before {
            border-top: $border-circle solid $error;
          }
          &::after {
            border: $border-circle solid rgba($error, 0.5);
          }
        }
      }
    }
  }
}
</style>
