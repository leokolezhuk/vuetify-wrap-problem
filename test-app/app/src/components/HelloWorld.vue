<template>
  <v-container>
    <ExpansionPanels>
      <ExpansionPanel>
        <v-expansion-panel-header>Header 1</v-expansion-panel-header>
        <v-expansion-panel-content>CCC 1</v-expansion-panel-content>
      </ExpansionPanel>
      <ExpansionPanel>
        <v-expansion-panel-header>Header 2</v-expansion-panel-header>
        <v-expansion-panel-content>CCC 2</v-expansion-panel-content>
      </ExpansionPanel>
    </ExpansionPanels>
  </v-container>
</template>

<script>
  import { ExpansionPanels, ExpansionPanel } from 't11';

  export default {
    components: {ExpansionPanels, ExpansionPanel},
    name: 'HelloWorld',    
  }
</script>
