# shopify.d.ts

An NPM-installable Typescript declaration for the [Shopify frontend wrapper](http://mayert-douglas4935.myshopify.com/pages/api).

### Installation

```bash
npm install github:nozzlegear/shopify.d.ts#COMMIT --save-dev
```

### Usage

The [Shopify frontend wrapper](http://mayert-douglas4935.myshopify.com/pages/api) will automatically load the `Shopify` object into the browser window. To get type definitions in your Typescript modules, just import this definition file and declare the `Shopify` variable as an instance of `ShopifyStatic`:

```ts
import {ShopifyStatic} from "shopify";

declare const Shopify: ShopifyStatic;

//Now you can use Shopify in your Typescript module with full type definitions
Shopify.getCart();

...
```
