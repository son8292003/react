# testreact
A simple react project to display data from REST api using table.

## To run this project
1 clone this projectt  
2 at the root folder of the project, run  
```
npm install  
```
3 cd node_modules\.bin\  
4 run
```
wdio config  
```
5 follow the setting below  
```
? Where do you want to execute your tests? On my local machine  
? Which framework do you want to use? mocha  
? Shall I install the framework adapter for you? Yes  
? Where are your test specs located? ./e2etests/*.js  
? Which reporter do you want to use?  dot - https://github.com/webdriverio/wdio-dot-reporter  
? Shall I install the reporter library for you? Yes  
? Do you want to add a service to your test setup?  selenium-standalone - https://github.com/webdriverio/wdio-selenium-  
standalone-service  
? Shall I install the services for you? Yes  
? Level of logging verbosity silent  
? In which directory should screenshots gets saved if a command fails? ./errorShots/  
? What is the base url? http://localhost  
```
6 edit wdio.conf.js, replace "browserName: ‘firefox’," with "browserName: ‘chrome’,"  
7 cd ..\..
8 (optional) run test cases  
```
npm run test
```
9 (optional) run e2e test cases  
```
npm run selenium-setup
npm run selenium-start
npm run e2e-tests
```
10 start the application
```
npm start
```
