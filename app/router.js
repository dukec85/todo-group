import Ember from 'ember';
import config from './config/environment';
export default Router;

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo-group', {path:'/todo-groups'}, function() {
    this.route('new');
  })

  Router.map(function() {
    this.route('todo-group.detail', {path:'/todo-groups'}, function() {
      this.route('new');


});
