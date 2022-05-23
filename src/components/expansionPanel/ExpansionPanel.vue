<template>
  <VExpansionPanel class="expansion-panel">
    <slot></slot>
  </VExpansionPanel>
</template>

<script>
import { VExpansionPanel } from 'vuetify/lib';

export default {
  components: {
    VExpansionPanel
  },
  extends: VExpansionPanel
};
</script>

<style lang="scss" scoped>
.v-expansion-panels > .v-expansion-panel {
  border-top: 1px solid;
}

.v-expansion-panels {
  & > .v-expansion-panel {
    &:last-child {
      border-bottom: 1px solid;
      border-color: var(--v-background-darken3);
    }
  }
}

.theme--dark.v-expansion-panels,
.theme--light.v-expansion-panels {
  & > .v-expansion-panel {
    border-color: var(--v-background-darken3);
    background-color: var(--v-background);
  }
}
</style>
