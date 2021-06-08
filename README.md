# Panorama Project

#### 1. Configuration
change configurations on `src/panorama-config.js` which includes backend api & aws cognito setup

#### 2. Commands

`npm install` - Install dependencies <br />

`yarn start` - Run development server <br />

`yarn build:prod` - Build the app for production to the `build` folder <br />

#### Build Step ####
Step 1: change configurations on `src/panorama-config.js`

Step 2: Run `npm install`

Step 3: Run `yarn build:prod`. If your pc does not have yarn, please install first `https://classic.yarnpkg.com/en/docs/install`

Step 4: Copy all content of folder `build/dist` to yor hosting

step 5: setup nginx
