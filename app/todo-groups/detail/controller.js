import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy(value){
      value.destroyRecord();
    },
    toggle(todoItem) {
      todoItem.toggleProperty('done');
      todoItem.save();
    },
    editSubmit(group, formValues){

      group.setProperties(formValues);
      group.save().then(() => {

      this.transitionToRoute('todo-group.index');
    });
  }
}
});
