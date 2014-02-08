namespace("Checklist", {
  SectionView: Backbone.View.extend({
    initialize: function(args) {
      this.template = args.template;
    },

    events: {
      'click input': 'updateTask'
    },

    render: function() {
      var data = {name: this.presentSectionName(), tasks: this.presentTasks()};
      this.$el.html(this.template(data));
      return this;
    },

    presentSectionName: function() {
      return Checklist.DesignerPresentationData[this.collection.name].title;
    },

    presentTasks: function() {
      return _.map(this.collection.models, function(model) {
        return {
          description: Checklist.DesignerPresentationData[this.collection.name].tasks[model.get('name')],
          complete: model.get('complete'),
          name: model.get('name')
        }
      }, this);
    },

    updateTask: function(e) {
      var taskName = $(e.currentTarget).data('name');
      var complete = $(e.currentTarget).checked;
      var model = this.collection.findWhere({name: taskName});
      model.save({complete: complete});
    }
  })
});
