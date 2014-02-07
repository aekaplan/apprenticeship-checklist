namespace("Checklist", {
  SectionView: Backbone.View.extend({
    initialize: function(args) {
      this.template = args.template;
    },

    render: function() {
      var data = {name: this.presentSectionName(), tasks: this.presentTasks()};
      this.$el.html(this.template(data));
      return this;
    },

    presentSectionName: function() {
      return Checklist.PresentationData[this.collection.name].title;
    },

    presentTasks: function() {
      return _.map(this.collection.models, function(model) {
        return {
          description: Checklist.PresentationData[this.collection.name].tasks[model.get('name')],
          complete: model.get('complete')
        }
      }, this);
    }
  })
});
