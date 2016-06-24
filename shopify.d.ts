declare module "shopify"
{
    export type ShopifyCallback = (cart: Cart) => void;
    export type ImageSize = "pico" | "icon" | "thumb" | "compact" | "medium" | "grande" | "1024x1024" | "master";

    export interface ShopifyStatic
    {
        /**
         * Gets the customer's cart. If a callback is not given, an alert will be shown to the customer stating how many items are in their cart.
         */
        getCart(cb?: ShopifyCallback): void;

        /**
         * Adds the item/variant with the given id to the customer's cart.
         */
        addItem(id: number, quantity: number, cb?: ShopifyCallback): void;

        /**
         * Serializes a form with the given id and attempts to add it as an item to the cart.
         */
        addItemFromForm(formId: string, cb?: ShopifyCallback): void;

        /**
         * Attaches the given attributes to the customer's cart.
         */
        updateCartAttributes(attributes: Object, cb?: ShopifyCallback): void;

        /**
         * Updates the cart note.
         */
        updateCartNote(note: string, cb?: ShopifyCallback): void;

        /**
         * Removes the item with the given id from the customer's cart.
         */
        removeItem(itemId: number, cb?: ShopifyCallback): void;

        /**
         * Updates the item with the given id in the customer's cart.
         */
        changeItem(itemId: number, quantity: number, cb?: ShopifyCallback): void;

        /**
         * Clears the customer's cart.
         */
        clear(cb?: ShopifyCallback): void;

        /**
         * Gets the product with the given handle.
         */
        getProduct(handle: string, cb?: (product: Product) => void): void;

        /**
         * Changes the size of a Shopify product's image URL. Does not actually resize an image, just updates the URL to point to the new size.
         * @returns The new image URL.
         */
        resizeImage(imageUrl: string, size: ImageSize): string;

        /**
         * Formats a given amount to the shop's default format, or to the given format.
         * @returns The formatted money string.
         */
        formatMoney(amount: number, format?: string): string;
    }

    export interface Cart
    {
        token?: string;
        note?: string;
        attributes?: Object;
        original_total_price?: number;
        total_price?: number;
        total_discount?: number;
        total_weight?: number;
        item_count?: number;
        line_items?: LineItem[];
        requires_shipping?: boolean;
    }

    export interface LineItem
    {
        id?: number;
        properties?: any;
        quantity?: number;
        variant_id?: number;
        key?: string;
        title?: string;
        price?: number;
        line_price?: number;
        original_line_price?: number;
        total_discount?: number;
        discounts?: any[];
        sku?: any;
        grams?: number;
        vendor?: string;
        product_id?: number;
        gift_card?: boolean;
        url?: string;
        image?: string;
        handle?: string;
        requires_shipping?: boolean;
        product_type?: string;
        product_title?: string;
        product_description?: string;
        variant_title?: any;
        variant_options?: string[];
    }

    export interface Product
    {
        id?: number;
        title?: string;
        handle?: string;
        description?: string;
        published_at?: Date;
        created_at?: Date;
        vendor?: string;
        type?: string;
        tags?: any[];
        price?: number;
        price_min?: number;
        price_max?: number;
        available?: boolean;
        price_varies?: boolean;
        compare_at_price?: any;
        compare_at_price_min?: number;
        compare_at_price_max?: number;
        compare_at_price_varies?: boolean;
        variants?: Variant[];
        images?: string[];
        featured_image?: string;
        options?: Option[];
        url?: string;
    }

    export interface Variant
    {
        id?: number;
        title?: string;
        option1?: string;
        option2?: any;
        option3?: any;
        sku?: any;
        requires_shipping?: boolean;
        taxable?: boolean;
        featured_image?: any;
        available?: boolean;
        name?: string;
        options?: string[];
        price?: number;
        weight?: number;
        compare_at_price?: any;
        inventory_quantity?: number;
        inventory_management?: string;
        inventory_policy?: string;
        barcode?: string;
    }

    export interface Option
    {
        name?: string;
        position?: number;
        values?: string[];
    }
}