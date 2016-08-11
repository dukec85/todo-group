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
    delete(todoItem) {
      todoItem.destroyRecord();
    },
      addTodoItem(todoGroups, formValues, reset) {
        const storeItem = this.store.createRecord('todo-item', formValues);
        storeItem.set('group', todoGroups);
        storeItem.save();
        reset();
      },
    },
});
