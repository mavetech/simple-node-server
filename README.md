# How the program works?
The Node.js program uses Express Framework to serve HTTP web requests and uses **EJS template engine** to return an HTTP file as a response.

When a request is made to the root URL (/) of the server, the server renders the **'index.ejs'** file, pass the **title** and **message** variables to the template, and send it as a response to the client.


## Requirements for running the node.js program

### In order to run the Node.js Express server, you will need to have the following installed on your system:

Node.js: This is the JavaScript runtime that allows you to execute JavaScript on the server-side. You can download it from the official website (https://nodejs.org/en/).

To confirm that you have Node.js and npm (Node Package Manager) properly installed on your system, you can run the following command in your terminal:

````
node --version
npm --version
````

## Running the Node.js Program

Assuming that you have already installed Node.js and the necessary dependencies listed in the package.json file, you can run the program by following these steps:

1. Open the terminal and navigate to the root directory of your project where the package.json file is located.

2. Run the following command to install the dependencies listed in the **package.json** file:
````
npm install
````
3. Once the dependencies are installed, you can start the server by running the following command:
````
npm start
````
This command will execute the script defined in the package.json file, this script is usually called **start** and runs the **"node server.js"** command.

4. Once the server is running, you can test it by visiting http://localhost:3000 in your web browser.

5. If you have made any changes to your code and you want to see the effect, you will have to stop the server by pressing CTRL+C on the terminal and then re-run the command npm start again.

You can also run the server by using the **node app.js** command on the terminal, but using the **npm start** command is more recommended as it uses the script defined in the **package.json** file, and it's more flexible in case you want to change the command to run the server.

You can also use other package.json scripts such as npm run dev, npm run build, npm run test ... etc

You can check the package.json file to see the scripts that are defined.
