namespace("Checklist", {
  SectionView: Backbone.View.extend({
    initialize: function(args) {
      this.template = args.template;
    },

    render: function() {
      console.log(this.presentTasks());
      var data = {name: this.presentSectionName(), tasks: this.presentTasks()};
      this.$el.html(this.template(data));
      return this;
    },

    presentSectionName: function() {
      return Checklist.PresentationData.sections[this.collection.name];
    },

    presentTasks: function() {
      return _.map(this.collection.models, function(model) {
        return { description: Checklist.PresentationData.tasks[model.get('name')] }
      });
    }
  })
});
