<template>
  <div
    :class="[
      'bb-icon flex flex-center',
      dim,
      color,
      { 'with-loader': loader, 'with-click': click },
    ]"
    @click="$emit('iconClickHandler')"
  >
    <BBLoader v-if="loader" type="circle"></BBLoader>
    <span :class="`icons mdi mdi-${icon}`"></span>
  </div>
</template>

<script>
import BBLoader from '../Loader/index.vue'

export default {
  name: 'BBIcon',
  components: { BBLoader },
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    click: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    dim: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/libs';

.bb-icon {
  @include position(relative, null);
  line-height: 1;
  span {
    &:before {
      font-size: $font-icons-size;
    }
  }
  &.with-loader {
    @include size(2rem);
    @extend %flex;
    @extend %flexCenter;
    span {
      &:before {
        font-size: $font-icons-size-loader;
      }
    }
  }
  &.with-click {
    &:hover {
      cursor: pointer;
    }
  }
  &.small {
    span {
      &:before {
        font-size: $font-icons-size-small;
      }
    }
  }
  &.medium {
    &.with-loader {
      span {
        &:before {
          font-size: $font-icons-size-loader;
        }
      }
    }
    span {
      &:before {
        font-size: $font-icons-size-medium;
      }
    }
  }
}
</style>
