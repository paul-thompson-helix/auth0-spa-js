import 'ts-polyfill/lib/es2015-collection';
import 'ts-polyfill/lib/es2015-core';
import 'ts-polyfill/lib/es2015-iterable';
import 'ts-polyfill/lib/es2015-promise';
import 'ts-polyfill/lib/es2015-reflect';
import 'ts-polyfill/lib/es2016-array-include';
import 'ts-polyfill/lib/es2017-object';
import 'ts-polyfill/lib/es2017-string';
import 'ts-polyfill/lib/es2017-typed-arrays';
import 'ts-polyfill/lib/es2018-promise';
import 'unfetch/polyfill/index';
if (!window.crypto && (<any>window).msCrypto) {
  (<any>window).crypto = (<any>window).msCrypto;
}
if (!window.crypto) {
  throw new Error(
    'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
  );
}
export * from './index';
export { default } from './index';
