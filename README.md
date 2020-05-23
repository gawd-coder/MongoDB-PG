# MongoDB-PG
Hook is a function in mocha that tells it to run a section of code before it either runs test or after it

Before adding mongo hook => 

![image](https://user-images.githubusercontent.com/57283161/82694861-a7506700-9c81-11ea-9d2c-8fa9dec27ff3.png)

After adding mongo hook => 

![image](https://user-images.githubusercontent.com/57283161/82694954-ce0e9d80-9c81-11ea-828c-936f9da6ec99.png)

Everytime we run npm run test, we are saving a new mariochar entry as mongoDB creates a new mariochar with a unique id every time it is run hence leading to many duplicates.

Finding Record by name

![image](https://user-images.githubusercontent.com/57283161/82721521-5ff6c480-9cdb-11ea-9037-254ec2c42fa7.png)

Finding Record by id which we find through Robo3t

![image](https://user-images.githubusercontent.com/57283161/82721690-3e96d800-9cdd-11ea-8dad-c2260d8d0d9d.png)

Deleting and Updating Records

![image](https://user-images.githubusercontent.com/57283161/82722178-f201cb80-9ce1-11ea-8310-f7aca231b27d.png)
