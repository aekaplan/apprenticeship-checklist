namespace("Checklist", {
  Tasks: Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("Checklist.Tasks"),
    model: Checklist.Task,

    sections: function() {
      var allSections = _.map(this.models, function(model) {
        return model.get('section');
      });
      return _.uniq(allSections);
    },

    tasksForSection: function(section) {
      return this.where({ section: section });
    }

  })
});
