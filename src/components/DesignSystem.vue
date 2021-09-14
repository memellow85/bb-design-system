<template>
  <div class="design-system">
    <BBInput
      name="test1"
      placeholder="test2"
      icon="cog"
      :showLabel="false"
      @modelChanges="modelChanges"
    />
    <br />
    <BBInput name="test1" placeholder="test2" :showIcon="false" />
    <br />
    <BBInput
      name="password"
      placeholder="password"
      type="password"
      :showIcon="false"
    />
    <br />
    <BBButton name="Button 1"></BBButton>
    <BBButton name="Button 2" color="red"></BBButton>
    <BBButton name="Button 3" color="grey"></BBButton>
    <br />
    <BBLoader color="green"></BBLoader>
    <br />
    <BBCheckbox name="checkbox1" @modelChanges="modelChanges"></BBCheckbox>
    <br />
    <BBRadio name="radio1" @modelChanges="modelChanges"></BBRadio>
    <br />
  </div>
</template>

<script>
import BBInput from '../libs/Forms/Input'
import BBButton from '../libs/Forms/Button'
import BBCheckbox from '../libs/Forms/Checkbox'
import BBRadio from '../libs/Forms/Radio'
import BBLoader from '../libs/Loader'

export default {
  name: 'DesignSystem',
  components: {
    BBInput,
    BBButton,
    BBLoader,
    BBCheckbox,
    BBRadio,
  },
  methods: {
    modelChanges($event) {
      console.log($event)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/libs';

.design-system {
  @include margin(30px);
}
</style>
