console.log('EL EDWIN');

$(document).ready(function() {

  // start app
  var contacts = new ContactsCollection( data )

  contacts.each(function(contact){
    new ListView({model: contact});
  })

});


