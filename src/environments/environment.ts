// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    //add var config properties to connect firebase to app
    apiKey: "AIzaSyD2BihLkm2MHVEZVk-u74E5vhpO_dQAUVw",
    authDomain: "chat-demo-ce2ec.firebaseapp.com",
    databaseURL: "https://chat-demo-ce2ec.firebaseio.com",
    projectId: "chat-demo-ce2ec",
    storageBucket: "",
    messagingSenderId: "398983578438"
  }
};
