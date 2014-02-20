
var Contact = Backbone.Model.extend({
  defaults : {
    name: 'John Bonham',
    email: 'jbonham@ledzeppelin.com',
    avatar: 'http://blog.fixyourmix.com/wp-content/uploads/2009/03/johnbonham001.jpg',
    bio: 'ohn Henry Bonham (31 May 1948 – 25 September 1980) was an English musician and songwriter, best known as the drummer of Led Zeppelin. Bonham was esteemed for his speed, power, fast right foot, distinctive sound, and "feel" for the groove.[1] He is widely considered to be one of the greatest drummers in the history of rock music.[2][3][4][5] Rolling Stone readers named him the "best drummer of all time" in 2011.[6]'
  }

});

var ContactsCollection = Backbone.Collection.extend({ model: Contact })