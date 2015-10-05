/**
 * Created by Eric on 10/5/2015.
 */
Messages = new Mongo.Collection("messages");
Messages.insert({greeting: "hello"}, function() {});