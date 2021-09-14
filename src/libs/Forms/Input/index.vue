<template>
  <BBField
    :name="name"
    :showLabel="showLabel"
    :icon="icon"
    :showIcon="showIcon && value === ''"
    :class="['bb-field-input', { 'bb-focus': focus, 'bb-icon': showIcon }]"
  >
    <input
      v-model="value"
      autocomplete="off"
      :type="type"
      class="big"
      :id="name"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      @focus="focus = true"
      @blur="focus = false"
      @keypress.enter="$emit('submitHandler')"
    />
  </BBField>
</template>

<script>
import BBField from '../Field/index.vue'

export default {
  name: 'BBInput',
  components: { BBField },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: BBField.props.name,
    showLabel: BBField.props.showLabel,
    icon: BBField.props.icon,
    showIcon: BBField.props.showIcon,
  },
  data() {
    return {
      focus: false,
      value: '',
    }
  },
  watch: {
    value() {
      this.$emit('modelChanges', { key: this.name, value: this.value })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/libs';

input {
  @include padding(0);
  @include size(100%, 1.5rem);
  box-shadow: none;
  box-sizing: border-box;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 0.15rem solid $color-3;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  -webkit-appearance: none;
  background: transparent;
  font-family: $font-family;
  font-weight: $normal;
  -moz-appearance: none;
  outline: 0 none transparent;
  &.big {
    @include size(100%, 2.5rem);
  }
}

.bb-field-input {
  &.bb-icon {
    input {
      &::-webkit-input-placeholder {
        @include padding(null null null 1.3rem);
        color: $color-6;
      }
    }
  }
}
</style>
