Faktura.Invoice = Ember.Model.extend({
    id: Ember.attr(),
    items: Ember.hasMany("Faktura.Item", { key: "items", embedded: true }),
    number: Ember.attr(),
    issueDate: Ember.attr(),
    deliveryDate: Ember.attr(),
    dueDate: Ember.attr(),
    seller: Ember.attr(),
    buyer: Ember.attr(),
    currency: Ember.attr(),
    language: Ember.attr(),
    comment: Ember.attr()
});

Faktura.Invoice.reopenClass({
    url: "invoices",
    adapter: Faktura.FirebaseAdapter.create()
});
