<template>
  <v-expansion-panel-content class="secondary--text">
    <slot></slot>
  </v-expansion-panel-content>
</template>

<script>
import Vue from 'vue';
const VExpansionPanelContent = Vue.options.components['VExpansionPanelContent'];

export default {
  extends: VExpansionPanelContent
};
</script>
