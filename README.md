# shopify.d.ts

An NPM-installable Typescript declaration for the [Shopify frontend wrapper](http://mayert-douglas4935.myshopify.com/pages/api).

### Installation

For Typescript 2.0+, just install this package via NPM or [Yarn](https://github.com/yarnpkg/yarn).

```bash
npm install github:nozzlegear/shopify.d.ts#COMMIT --save-dev

# Or use Yarn
yarn add github:nozzlegear/shopify.d.ts#COMMIT --dev
```

### Usage

The [Shopify frontend wrapper](http://mayert-douglas4935.myshopify.com/pages/api) will automatically load the `Shopify` object into the browser window. Once this declaration is installed, you'll automatically have intellisense and typings for that Shopify object:

```ts
// You can immediately use the Shopify variable in your .ts and .tsx files.
Shopify.getCart();

// You can also import interfaces used by that Shopify variable
import { Option, Variant } from "shopify";

const option: Option = ...;
...
```
