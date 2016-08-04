import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy(todoGroups) {
      todoGroups.destroyRecord();
    }
  }
});
