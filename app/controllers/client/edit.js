import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    saveRecord: function () {
      let model = this.get('model');

      model.set('isSubmitted', true);
      model.save().then(() => this.transitionToRoute('clients'),
                        () => model.set('isSubmitted', false));
    },

    deleteRecord: function () {
      let model = this.get('model');

      model.delete().then(() => this.transitionToRoute('clients'));
    }
  }
});
