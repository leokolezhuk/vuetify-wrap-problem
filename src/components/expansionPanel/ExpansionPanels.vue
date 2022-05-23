<script>
// import { VExpansionPanels } from 'vuetify/lib/components';
import {
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelContent,
  VExpansionPanelHeader
} from 'vuetify/lib';

export default {
  components: {
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelContent,
    VExpansionPanelHeader
  },
  extends: VExpansionPanels,
  provide() {
    return {
      expansionPanels: this
    };
  },
  computed: {
    classes() {
      return {
        ...VExpansionPanels.options.computed.classes.call(this),
        'v-expansion-panels--flat': true
      };
    }
  }
};
</script>

<style lang="scss">
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
