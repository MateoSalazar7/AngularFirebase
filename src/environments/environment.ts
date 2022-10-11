// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

export const environment = {
  production: false,
    firebaseConfig: {
    apiKey: "AIzaSyABqUIvM_F9d6eGqBPQCI6rugQ-NIvSC-E",
    authDomain: "angularfirebase-student-eca81.firebaseapp.com",
    projectId: "angularfirebase-student-eca81",
    storageBucket: "angularfirebase-student-eca81.appspot.com",
    messagingSenderId: "250799426357",
    appId: "1:250799426357:web:b0b42092d48709ace29a7c",
    measurementId: "G-EVVY4SSRY7"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
