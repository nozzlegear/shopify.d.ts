# shopify.d.ts

An NPM-installable Typescript declaration for the [Shopify frontend wrapper](http://mayert-douglas4935.myshopify.com/pages/api).

### Installation

For Typescript 1.9+, just install this package via NPM and make sure your tsconfig.json's `moduleResolution` property is not set to `classic`. Typescript will automatically pick up this definition from your node modules folder.

```bash
npm install github:nozzlegear/shopify.d.ts#COMMIT --save-dev
```

For those on Typescript 1.8 and below, use [Typings](https://github.com/typings/typings) to install this declaration:

```bash
typings install github:nozzlegear/shopify.d.ts#COMMIT --save-dev
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
