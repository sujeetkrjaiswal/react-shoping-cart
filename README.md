# About the work
It uses React , redux , eslint, babel, scss and webpack & Jest for testing

## Commands to execute
command | description
--------|------------
yarn start | startes the dev server using express and has hot reloading capabilities. it will keep running the linter as well.
yarn build | builds and bundles the project in production mode and runs a server serving the production build
yarn analyze-bundle | anaalyzes the build to see if there is some error
yarn test | runs the jest test cases, because of time limitations only few test has been written just to demonstrate the test feature

## Note
I have used the style guide by airbnb. only with few exceptions like of semicolon turned to never. (I enforce semicolon only if I am writing in ES5)