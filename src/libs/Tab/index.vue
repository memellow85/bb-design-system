<template>
  <div class="bb-tab">
    <ul>
      <li
        v-for="l in list"
        :key="l.id"
        :class="[{ selected: l.selected, 'no-icon': l.icon === '' }]"
        @click="$emit('changeHandler', l)"
      >
        <BBIcon v-if="l.icon !== ''" :icon="l.icon"></BBIcon>
        <p v-if="l.name" :class="[{ selected: l.selected }]">
          {{ l.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import BBIcon from '../Icon/index.vue'

export default {
  name: 'BBTab',
  components: { BBIcon },
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/libs';

.bb-tab {
  @extend %basicFlex;
  ul {
    @extend %basicFlex;
    @extend %flexCenter;
    background: $color-2;
    border-radius: $rounded-small;
    list-style: none;
    margin-block: 0;
    padding-inline: 0;
    li {
      @include padding(0.3rem);
      text-align: center;
      list-style: none;
      cursor: pointer;
      &.selected {
        color: $primary;
      }
      &:first-child {
        @include padding(null null null 0.7rem);
      }
      &:last-child {
        @include padding(null 0.7rem null null);
      }
      &.no-icon {
        p {
          @include padding(0 null null);
        }
      }
      p {
        @extend %p;
        @extend %small;
        @include padding(0.3rem null null);
      }
    }
  }
}
</style>
