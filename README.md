run "npm install", open your favorite browser, and go to localhost:5000

##Exercise 1:
 Today in class, we got to the point where we had all our crud operations built on the server. Now we need to finish our templating. Add a column on the table whose row displays a delete button. On click, call the /delete on the server to finish the D in CRUD. Finally, add a column with a button "update" in each row. Upon clicking, fetch the values "model" and "type" with jQuery and use the /put we built in our server to update our database. After clicking the delete and update buttons, update the table in our html to reflect the changes in the database. This might be hard, but I know you can do it!!!

## Exercise 2: 
  Create a mongo/mongoose database like we did on Wednesday. Feel free to use this repo as a starting point, or feel free to use the code you wrote yesterday. 
  
  We're going to build two html files that do different functionality interacting with the same database you build. Yesterday, we built an interface that displayed an actor or acctress and some information about him/her. Using that same database, one could also construct an interface that displayed the movie he/she was in, using the field "starredIn" and a background image of the movie poster. That's an example of two different interfaces using one database. Do something similar, keep it simple!

## Exercise 3:
  Expand on the database you just built utilizing all four principle of CRUD. Extending the movie star example, you could build an interface that allows user inputs of an actor/acctres, his/her age, and a movie he or she starred in. Build a seperate interface that displays all of them. Whatever you decide to do, see if you can figure out how to inject an image url into your database!