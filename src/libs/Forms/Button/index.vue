<template>
  <button
    :class="['bb-button', dim, color]"
    :disabled="disabled"
    @click="$emit('submitHandler')"
  >
    <BBLoader v-if="loader"></BBLoader>
    <span v-else>{{ name }}</span>
  </button>
</template>

<script>
import BBLoader from '../../Loader/index.vue'

export default {
  name: 'BBButton',
  components: { BBLoader },
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'Button',
      required: true,
    },
    dim: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/libs';

button {
  @include padding(null 0.7rem);
  @extend %btn;
  @extend %p;
  @extend %flexCenter;
  cursor: pointer;
  &:disabled {
    background: $color-4;
  }
  &:hover {
    opacity: 0.8;
  }
  &.full {
    @include size(100%, 2.6rem);
  }
  &.small {
    @include size(auto, 2.2rem);
    min-width: 5rem;
  }
  &.red {
    background: $error;
  }
  &.grey {
    background: $color-8;
  }
}
</style>
