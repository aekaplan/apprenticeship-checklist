//= require checklist/Tasks.js

namespace("Checklist", {
  DesignTasks: Checklist.Tasks.extend({
    localStorage: new Backbone.LocalStorage("Checklist.DesignTasks"),
  })
});
