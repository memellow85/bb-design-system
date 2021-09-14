<template>
  <div class="bb-field">
    <template v-if="showLabel">
      <label :for="name">{{ name }}</label>
    </template>
    <template v-if="icon && showIcon">
      <span :class="`icon small mdi mdi-${icon}`"></span>
    </template>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BBField',
  props: {
    name: {
      type: String,
      required: true,
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/libs';

label {
  @extend %strong;
}

.bb-field {
  @include position(relative, null);
  @include margin(null null 1rem null);
  &:after {
    @include position(absolute, null null 0 0);
    @include size(0, 0.1rem);
    content: '';
    display: block;
    background: $primary;
    transition: all 0.3s;
  }
  &.bb-focus {
    .icon {
      &:before {
        color: $primary;
      }
    }
    &:after {
      width: 100%;
    }
  }
  .icon {
    @include position(absolute, 0.6rem null null null);
  }
}
</style>
