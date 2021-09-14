<template>
  <label class="bb-field-radio">
    <span class="bb-field-radio__input">
      <input
        v-model="value"
        type="radio"
        :disabled="disabled"
        :name="name"
        :value="name"
      />
      <span class="bb-field-radio__control"></span>
    </span>
    <span class="bb-field-radio__label">{{ name }}</span>
  </label>
</template>

<script>
export default {
  name: 'BBRadio',
  props: {
    name: {
      type: String,
      default: 'radio',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
@include create-input('bb-field-radio');
</style>
