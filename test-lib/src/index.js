import ExpansionPanel from './components/expansionPanel/ExpansionPanel';
import ExpansionPanels from './components/expansionPanel/ExpansionPanels';
import ExpansionPanelHeader from './components/expansionPanel/ExpansionPanelHeader';
import ExpansionPanelContent from './components/expansionPanel/ExpansionPanelContent';
import Vue from 'vue';

Vue.component('ExpansionPanels', ExpansionPanels);
Vue.component('ExpansionPanel', ExpansionPanel);
Vue.component('ExpansionPanelContent', ExpansionPanelContent);
Vue.component('ExpansionPanelHeader', ExpansionPanelHeader);


export {
    ExpansionPanel, ExpansionPanels, ExpansionPanelHeader, ExpansionPanelContent
}