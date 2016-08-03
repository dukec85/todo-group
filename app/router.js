import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo-group', { path: '/todo-group' }, function() {
    this.route('new');
  });

  this.route('todo-groups', function() {
    this.route('new');

    this.route(':id', function() {
      this.route('edit');
    });
  });
});

export default Router;
