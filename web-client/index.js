import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
import localeMessages from './src/translations/translationData.json';
import router from './src/router'

//shop teste
// (function () {
//   var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//   if (window.ShopifyBuy) {
//     if (window.ShopifyBuy.UI) {
//       ShopifyBuyInit();
//     } else {
//       loadScript();
//     }
//   } else {
//     loadScript();
//   }
//
//   function loadScript() {
//     var script = document.createElement('script');
//     script.async = true;
//     script.src = scriptURL;
//     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//     script.onload = ShopifyBuyInit;
//   }
//
//   function ShopifyBuyInit() {
//     var client = ShopifyBuy.buildClient({
//       domain: 'lacavazan.myshopify.com',
//       apiKey: '1aa8a52183aef33bcebff35710b2190a',
//       appId: '6',
//     });
//
//     ShopifyBuy.UI.onReady(client).then(function (ui) {
//       ui.createComponent('product', {
//         id: [168792457246],
//         node: document.getElementById('product-component-fc711bc3113'),
//         moneyFormat: 'R%24%20%7B%7Bamount_with_comma_separator%7D%7D',
//         options: {
//   "product": {
//     "variantId": "all",
//     "contents": {
//       "imgWithCarousel": false,
//       "variantTitle": false,
//       "description": false,
//       "buttonWithQuantity": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "calc(25% - 20px)",
//           "margin-left": "20px",
//           "margin-bottom": "50px"
//         }
//       }
//     }
//   },
//   "cart": {
//     "contents": {
//       "button": true
//     },
//     "styles": {
//       "footer": {
//         "background-color": "#ffffff"
//       }
//     }
//   },
//   "modalProduct": {
//     "contents": {
//       "img": false,
//       "imgWithCarousel": true,
//       "variantTitle": false,
//       "buttonWithQuantity": true,
//       "button": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0px",
//           "margin-bottom": "0px"
//         }
//       }
//     }
//   },
//   "productSet": {
//     "styles": {
//       "products": {
//         "@media (min-width: 601px)": {
//           "margin-left": "-20px"
//         }
//       }
//     }
//   }
// }
//       });
//     });
//   }
// })();


//Adicionar idiomas suportados
const languages = require('./src/constants/Languages');
for (var i = 0; i < languages.length; i++) {
  let locale = require('react-intl/locale-data/'+languages[i]);
  addLocaleData(locale);
}

//Detecting UI language
var localeCode;

if (navigator.languages && navigator.languages[0]){
  localeCode = navigator.languages[0];
} else if (navigator.languages) {
  localeCode = navigator.languages;
} else if (navigator.userLanguage) {
  localeCode = navigator.userLanguage
}

console.log("test");

if (!(localeCode in languages)) {
  localeCode = localeCode.toLowerCase().split(/[_-]+/)[0];
}

if (!(localeCode in languages)) {
  localeCode = languages[0];
}

ReactDOM.render(
  (
    <IntlProvider locale={localeCode} messages={localeMessages[localeCode]}>
      {router}
    </IntlProvider>
  )
  , document.getElementById('app'));
