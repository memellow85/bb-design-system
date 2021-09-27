<template>
  <label class="bb-field-checkbox">
    <span class="bb-field-checkbox__input">
      <input
        v-model="value"
        type="checkbox"
        :disabled="disabled"
        :name="name"
      />
      <span class="bb-field-checkbox__control"></span>
    </span>
    <span class="bb-field-checkbox__label">{{ name }}</span>
  </label>
</template>

<script>
export default {
  name: 'BBCheckbox',
  props: {
    name: {
      type: String,
      default: 'checkbox',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: false,
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
@include create-input('bb-field-checkbox');
</style>
