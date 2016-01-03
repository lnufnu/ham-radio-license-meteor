Questions = new Mongo.Collection('questions');
Answers = new Mongo.Collection('answers');

if (Meteor.isServer) {

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  Api.addCollection(Questions);

  Api.addCollection(Answers);

}
