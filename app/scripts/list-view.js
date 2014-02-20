console.log ('list view')

var ListView = Backbone.View.extend({
  
  className: 'list-item',

  createTemplate: _.template($('#list-item-template').text()),
  

  events: {

    "click"       : "jumboView",
    "click .down" : "expand",
    "click .new"  : "newAdd"
  },

  initialize: function(){
    
    $('.js-contact-list').prepend( this.el );
    this.listenTo( this.model, 'change', this.render)
    this.render();    

  },

  render: function() {
    var renderedTemplate = this.createTemplate( this.model.attributes )
    this.$el.html( renderedTemplate )
  },

  jumboView: function(){
    new MainView({model: this.model})
  },

  expand: function(){
    this.$el.find('.info-bio').slideToggle( "fast" )
  },

  newAdd: function(){
    new AddView({model: this.model})
  }

});

// $( ".down" ).click(function() {
//   $( ".info-bio" ).slideToggle( "smooth" );
// });