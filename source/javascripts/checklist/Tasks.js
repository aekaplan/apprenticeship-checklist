namespace("Checklist", {
  Tasks: Backbone.Collection.extend({
    model: Checklist.Task,

    localStorage: undefined, // define in subclass

    sections: function() {
      var allSections = _.map(this.models, function(model) {
        return model.get('section');
      });
      return _.uniq(allSections);
    },

    tasksForSection: function(section) {
      return this.where({ section: section });
    },

    percentTasksCompleted: function() {
      return (this.completedTaskCount() / this.models.length);
    },

    completedTaskCount: function() {
      var completedTasks = this.filter(function(model) {
        return model.get('complete') === true;
      });
      return completedTasks.length;
    },

    markAllTasksIncomplete: function() {
      this.forEach(function(model) {
        model.save({ complete: false });
      });
    }

  })
});
