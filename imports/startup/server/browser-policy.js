import { BrowserPolicy } from 'meteor/browser-policy-common';
BrowserPolicy.content.allowOriginForAll('https://js.stripe.com/')
BrowserPolicy.content.allowOriginForAll('https://checkout.stripe.com/')
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
