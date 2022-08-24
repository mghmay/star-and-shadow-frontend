// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8080',
  MODEL_CUSTOMER: {
    customerId: 1,
    storeId: 1,
    firstName: 'MARY',
    lastName: 'SMITH',
    fullName: 'MARY SMITH',
    email: 'MARY.SMITH@sakilacustomer.org',
    addressId: 5,
  },
  STAFF_MODEL: {
    staffId: 2,
  },
  CATEGORY_MODEL: {
    data: {
      'All films': '',
      Animation: 'animation',
      Children: 'children',
      Classics: 'classics',
      Comedy: 'comedy',
      Documentary: 'documentary',
      Drama: 'drama',
      Family: 'family',
      Foreign: 'foreign',
      Games: 'games',
      Horror: 'horror',
      Music: 'music',
      New: 'new',
      'Sci-Fi': 'scifi',
      Sports: 'sports',
      Travel: 'travel',
      Action: 'action',
    },
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
