# Running

# /etc/hosts
A localhost forwarding port must be defined within /etc/hosts or your app will not run!
Read the Subdomain section of the general Readme to know more.

- Example `code /etc/hosts`
    1. Locate line that says `127.0.0.1 localhost`
    2. Under this line add `127.0.0.1 dev.dev-legalshield.com`
    3. `dotnet run` should open a window to `https://localhost:3401` (or your port) an error should state *ArgumentOutOfRangeException: Length cannot be less than zero. (Parameter 'length')*
    4. Now open Chrome, navigate to `https://dev.dev-legalshield.com:3401` (or your port) and app should run

# Development in React
1. `dotnet run`
2. [on mac] (Menu) Terminal > Run Task... > Watch
3. Whenever changes occur, save, reload your window, changes will be live in window

# CORS issues
- In order to bypass cors issues: install this plugin
- [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control)
- Enable it and reload, this is needed for Profiles in this example

# Github Token & .npmrc 
- If NPM is failing you may have an issue with your `.npmrc` file
- Replace your `${GIT_PERSONAL_ACCESS_TOKEN}` with your token if all else fails, if you do, **do not stage this change to any commits**
- Getting started: [See the UX Framework README.md for more info on setting up a GIT_PERSONAL_ACCESS_TOKEN](https://github.com/LegalShield/adonis-ux-framework)

# Testing
 1. Dotnet Tests: `dotnet test`
 2. **Eslint**: [on mac] (Menu) Terminal > Run Task... > Lint

 # Docker 
- To build the initial docker image or to rebuild the image `docker build -t internal-testing-web --build-arg GIT_USERNAME=${GIT_USERNAME} --build-arg GIT_PERSONAL_ACCESS_TOKEN=${GIT_PERSONAL_ACCESS_TOKEN} . --no-cache`
- To run in **foreground** mode `docker-compose up internal_testing_web`
- To stop in foreground mode `ctrl + c`
- To run in **detached** mode `docker-compose up -d internal_testing_web`
- To stop in detached mode `docker-compose stop`
- To **rebuild** the image `docker build -t internal_testing_web . --no-cache`
- *Troubleshooting* **remove all docker containers** `docker rm -f $(docker container ls -a -q)`
- *Troubleshooting* **remove all docker images** `docker rmi -f $(docker image ls -a -q)`

