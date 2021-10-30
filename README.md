
Hello everyone!
This my first side project. It’s a simple website built with React, React-Router and GitHub Pages. 
Still work in progress.

Take a look here: https://xladyeagle.github.io/react-website/


## Dependencies

Tested with: [node](https://nodejs.org/) >= v10.19.0 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/xLadyEagle/react-website.git # replace [xLadyEagle] with your github username if you fork first.
cd react-website
nvm install # this is optional - make sure you're running >= node v10.19.0 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

1. Install GitHub Pages package as a dev-dependency:
```bash
    cd my-app
    npm install gh-pages --save-dev
  ```
2. Add properties to package.json file.
    The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{reponame}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this:
    "homepage": "http://xLadyEagle.github.io/react-website"

    Second in the existing scripts property add predeploy and deploy.
    ```bash
    "scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
    ```
3. Deploy it to GitHub Pages, just running the following command :

	`npm run deploy`

Make a commit to `main` and push your changes. That's it.

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `react-website/build/`. Copy this and self-host or deploy to a CDN.
