<template>
  <div class="design-system">
    <BBInput
      name="test1"
      placeholder="test1"
      icon="cog"
      :showLabel="false"
      @modelChanges="modelChanges"
    />
    <br />
    <BBInput name="test2" placeholder="test2" :showIcon="false" />
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
    <BBLoader color="green" type="circle"></BBLoader>
    <br />
    <BBCheckbox name="checkbox1" @modelChanges="modelChanges"></BBCheckbox>
    <br />
    <BBRadio name="radio1" @modelChanges="modelChanges"></BBRadio>
    <br />
    <BBIcon icon="cog" click @iconClickHandler="iconClickHandler"></BBIcon>
    <br />
    <BBIcon :loader="true" icon="cog" dim="medium"></BBIcon>
    <br />
  </div>
</template>

<script>
import BBInput from '../libs/Forms/Input'
import BBButton from '../libs/Forms/Button'
import BBCheckbox from '../libs/Forms/Checkbox'
import BBRadio from '../libs/Forms/Radio'
import BBLoader from '../libs/Loader'
import BBIcon from '../libs/Icon'

export default {
  name: 'DesignSystem',
  components: {
    BBInput,
    BBButton,
    BBLoader,
    BBCheckbox,
    BBRadio,
    BBIcon,
  },
  methods: {
    modelChanges($event) {
      console.log($event)
    },
    iconClickHandler() {
      console.log('Icon click')
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
