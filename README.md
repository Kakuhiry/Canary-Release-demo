# microservices-example

# Technologies

NodeJS & Express: To create a server where we can locally host our web page
Haproxy: To distribute the load between all our server
Docker: To create and run 3 containers of our node server, 2 with the same features and 1 with a new feature
MongoDB: To allow users to send a report if there's a problem with the new feature

#Implementation

Using the 3 docker containers we can have the 3 servers where to the requests, using Haproxy we can make sure that the requests are distributed between each of the running dockerized servers on which one of them there's one running an instance of the server with a new feature, which is making reservations in a restaurant, these are stored in a MongoDB database. In case of issues there a button to send a report, as one we need a way to track if that new feature is not working properly.
