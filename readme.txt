To use these files...

Step 1: install node.js libraries
	
	Start the command prompt, execute "npm init", and press enter until the prompt ends.
	
	Enter the following commands:
		npm install --save body-parser
		npm install --save express
		npm install --save express-session
		npm install --save http
		npm install --save mysql
		npm install --save path

Step 2: Create a MySQL server, and import the SQL_Database.sql into a schema named "dbmsproj".
	The username/password of your server needs to be root/root.
	//The name/username/password can be different but you'll need to edit the web_server.js code!

Step 3: Run web_server.js using "node web_server.js"

Step 4: Open up a browser and put "http://localhost:42069" as the address

