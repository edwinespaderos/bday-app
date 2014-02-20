console.log ('list view')

var ListView = Backbone.View.extend({
  
  className: 'list-item',

  createTemplate: _.template($('#list-item-template').text()),
  

  events: {

    "click": "jumboView"
  },

  initialize: function(){
    $('.js-contact-list').prepend( this.el );
    
    this.render();    

  },

  render: function() {
    var renderedTemplate = this.createTemplate( this.model.attributes )
    this.$el.html( renderedTemplate )
  },

  jumboView: function(){
    new MainView({model: this.model})
  }

});

// $( ".down" ).click(function() {
//   $( ".info-bio" ).slideToggle( "smooth" );
// });