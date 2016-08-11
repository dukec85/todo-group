import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(model, formValues) {
      model.setProperties(formValues);
      model.save().then(() => {
        this.transitionToRoute('todo-groups.index');
      });
    }
  }
});
