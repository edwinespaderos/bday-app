var MainView = Backbone.View.extend({
  

  createTemplate: _.template($('#jumbo-item-template').text()),



  initialize: function(){
    $('.jumbotron').html( this.el );
    
    this.render();    

  },

  render: function(){
    var renderedTemplate = this.createTemplate( this.model.attributes )
    this.$el.html( renderedTemplate );
  }

  

});
