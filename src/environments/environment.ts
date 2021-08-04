// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY ?? null,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? null,
    databaseURL: process.env.FIREBASE_DATABASE_URL ?? null,
    projectId: process.env.FIREBASE_PROJECT_ID ?? null,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? null,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? null,
    appId: process.env.FIREBASE_APP_ID ?? null
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
