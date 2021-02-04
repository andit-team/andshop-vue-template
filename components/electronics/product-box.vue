<template>
    <div>
        <div class="product-item rounded bg-white">
            <nuxt-link :to="'/products/'+product.slug">
            <div class="img-wrap mb-2">
                <img :src="product.thumbnail_image" alt="products" class="rounded-top">
            </div>
            <div class="product-content">
                <p class="product-tags text-uppercase">{{product.shop}}</p>
                <p class="product-title font-bold">{{product.name}}</p>
                <small>
                    <nuxt-link :to="'/categories/'+product.category.slug">
                    {{product.category.name}}
                    </nuxt-link>
                </small>
                <div class="rating_wrap mb-1">
                <div class="rating">
                    <div class="product_rate" style="width:87%"></div>
                </div>
                </div>
                <p>
                <!-- <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> -->
                <span class="discounted-price mr-1 color-red">$ {{product.price}}</span>
                <!-- <span class="special-tag badge bg-red white-color">Sale</span> -->
                </p>
            </div>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "Product-box",
    props:['product']
}
</script>