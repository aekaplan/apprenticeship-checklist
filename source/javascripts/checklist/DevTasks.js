//= require checklist/Tasks.js

namespace("Checklist", {
  DevTasks: Checklist.Tasks.extend({
    localStorage: new Backbone.LocalStorage("Checklist.DevTasks"),
  })
});
