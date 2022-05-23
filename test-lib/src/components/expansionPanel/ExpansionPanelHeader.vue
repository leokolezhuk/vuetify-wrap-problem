<template>
  <v-expansion-panel-header class="secondary--text">
    <template v-slot:actions>
      <v-icon> $chevrondown </v-icon>
    </template>
    <slot></slot>
  </v-expansion-panel-header>
</template>

<script>
import Vue from 'vue';
const VExpansionPanelHeader = Vue.options.components['VExpansionPanelHeader'];

export default {
  extends: VExpansionPanelHeader
};
</script>
