# My Awesome Poll App
This is a client side only poll application. Built with angular, and for state management ngxs has been used.
Also for the chart, ngx-charts is used.

## Downloading the project
To start the project please clone the project with your command-line/terminal of choice:
```git clone https://github.com/mertakl/poll-app.git```

## Running the project
To run the project:
Go to the following directory from the current root:
```shell
cd ./poll-app
```
Install the packages:
```shell
npm install
```
Then run with following command:
```shell
npm run start
```

The application will be available on :
```
http://127.0.0.1:4200/
```
Or alternatively, if you want to access the deployed application. You can access it from the following url;
```
https://my-awesome-poll-app.netlify.app/
```

## Using the site
You will be able to create new poll. When you are typing, you will see question and answers will change in realtime.
Whenever user selects a choice and clicks on "Vote" button, graph will automatically be updated. In order to vote, 
at least two choices must be created. 
User cannot type more than 80 characters on input fields. If they type, the field will be disabled.

## Building
In order to build the application run;
```shell
npm run build
```
A build will be generated inside;
```
./poll-app/dist/poll-app
```
You can copy files within this folder and put them inside your server.

## Running e2e tests
In order to run e2e tests, issue the following command;
```shell
npm run e2e
```
A new browser window will open. From that window, click on poll.spec.ts. Another window will open
and tests will run.


