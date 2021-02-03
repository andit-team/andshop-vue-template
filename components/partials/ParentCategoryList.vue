<template>
  <ul class="parent_category_list"> 
    <li>
      <nuxt-link to="/search-results">
        <span>
          <img :src="require('@/assets/images/all-icon/m-clothing.svg')" alt="andshop">
          Clothing
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>
        <div class="mega-menu row">
            <div class="col">
              <ul>
                <strong>Featured Item</strong>
                <li><nuxt-link to="/search-results">Pents & Shoe</nuxt-link></li>
                <li><nuxt-link to="/search-results">Jeans & Belt</nuxt-link></li>
                <li><nuxt-link to="/search-results">Tie & Tie Clip</nuxt-link></li>
                <li><nuxt-link to="/search-results">Trousers & Shoe</nuxt-link></li>
                <li><nuxt-link to="/search-results">Vestibulum sed</nuxt-link></li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <strong>Popular Item</strong>
                <li><nuxt-link to="/search-results">Donec porttitor</nuxt-link></li>
                <li><nuxt-link to="/search-results">Donec vitae facilisis</nuxt-link></li>
                <li><nuxt-link to="/search-results">Curabitur tempus</nuxt-link></li>
                <li><nuxt-link to="/search-results">Vivamus in tortor</nuxt-link></li>
                <li><nuxt-link to="/search-results">Trousers</nuxt-link></li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <li><img :src="require('@/assets/images/others/menu_banner1.jpg')" alt="20% off on Sale"></li>
              </ul>
            </div>
        </div>
    </li>
    <li>
      <nuxt-link to="/search-results">
        <span>
          <img :src="require('@/assets/images/all-icon/m-laptop.svg')" alt="andshop">
          Computers & Accessories
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>
      <div class="mega-menu row">
        <div class="col">
          <ul>
            <strong>Laptop</strong>
            <li><nuxt-link to="/search-results">HDD & Pendrive</nuxt-link></li>
            <li><nuxt-link to="/search-results">RAM & SSD</nuxt-link></li>
            <li><nuxt-link to="/search-results">Graphics Card</nuxt-link></li>
            <li><nuxt-link to="/search-results">Motherboard</nuxt-link></li>
            <li><nuxt-link to="/search-results">Gaming Machine</nuxt-link></li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <strong>Desktop</strong>
            <li><nuxt-link to="/search-results">HDD & Pendrive</nuxt-link></li>
            <li><nuxt-link to="/search-results">RAM & SSD</nuxt-link></li>
            <li><nuxt-link to="/search-results">Graphics Card</nuxt-link></li>
            <li><nuxt-link to="/search-results">Motherboard</nuxt-link></li>
            <li><nuxt-link to="/search-results">Gaming PC</nuxt-link></li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li class="my-1"><img :src="require('@/assets/images/others/menu_banner2.jpg')" alt="20% off on Sale"></li>
            <li class="my-1"><img :src="require('@/assets/images/others/menu_banner3.jpg')" alt="20% off on Sale"></li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <nuxt-link to="/search-results">
        <span>
          <img :src="require('@/assets/images/all-icon/m-decor.svg')" alt="andshop">
          Home Decor
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>      
      <div class="mega-menu row">
        <div class="col">
          <ul>
            <strong>Living Room</strong>
            <li><nuxt-link to="/search-results">Bed & Bedside</nuxt-link></li>
            <li><nuxt-link to="/search-results">Sofa & Tea Table</nuxt-link></li>
            <li><nuxt-link to="/search-results">Divan</nuxt-link></li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <strong>Kitchen</strong>
            <li><nuxt-link to="/search-results">Rack & Pan</nuxt-link></li>
            <li><nuxt-link to="/search-results">Spoon & Plate</nuxt-link></li>
            <li><nuxt-link to="/search-results">Blender & Cup</nuxt-link></li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <strong>Dining Room</strong>
            <li><nuxt-link to="/search-results">Bed & Bedside</nuxt-link></li>
            <li><nuxt-link to="/search-results">Sofa & Tea Table</nuxt-link></li>
            <li><nuxt-link to="/search-results">Divan</nuxt-link></li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <strong>Workstation</strong>
            <li><nuxt-link to="/search-results">Table & Chair</nuxt-link></li>
            <li><nuxt-link to="/search-results">Rocking Chair</nuxt-link></li>
            <li><nuxt-link to="/search-results">Desk & Tool</nuxt-link></li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <nuxt-link to="/search-results">
        <span>
          <img :src="require('@/assets/images/all-icon/m-vegetables.svg')" alt="andshop">
          Fruits & Vegetables
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>
      <div class="mega-menu row">
        <div class="col">
          <ul>
            <strong>Fresh Fruits</strong>
            <li><nuxt-link to="/search-results">Onion</nuxt-link></li>
            <li><nuxt-link to="/search-results">Red Tomato</nuxt-link></li>
            <li><nuxt-link to="/search-results">Big Potato</nuxt-link></li>
            <li><nuxt-link to="/search-results">Green Chili</nuxt-link></li>
            <li><nuxt-link to="/search-results">Ginger</nuxt-link></li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <strong>Fresh Vegetables</strong>
            <li><nuxt-link to="/search-results">Cabbage</nuxt-link></li>
            <li><nuxt-link to="/search-results">Green Capsicum</nuxt-link></li>
            <li><nuxt-link to="/search-results">Red Potato</nuxt-link></li>
            <li><nuxt-link to="/search-results">Baby Corn</nuxt-link></li>
            <li><nuxt-link to="/search-results">Radish Red</nuxt-link></li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <strong>Fresh Fruits</strong>
            <li><nuxt-link to="/search-results">Onion</nuxt-link></li>
            <li><nuxt-link to="/search-results">Red Tomato</nuxt-link></li>
            <li><nuxt-link to="/search-results">Big Potato</nuxt-link></li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <nuxt-link to="/search-results">
        <span>
          <img :src="require('@/assets/images/all-icon/m-electronics.svg')" alt="andshop">
          Electronics
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/search-results">        
        <span>
          <img :src="require('@/assets/images/all-icon/m-sunglasses.svg')" alt="andshop">
          Watches & Eyewear
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>
    </li>
    <li>
    <nuxt-link to="/search-results">
      <span>
        <img :src="require('@/assets/images/all-icon/m-mobile.svg')" alt="andshop">
        Mobiles & Tablets
      </span>
      <i class="fas fa-angle-right"></i>
    </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/search-results">
        <span>
          <img :src="require('@/assets/images/all-icon/m-bags.svg')" alt="andshop">
          Bags
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/search-results">
        <span>
          <img :src="require('@/assets/images/all-icon/m-jewellery.svg')" alt="andshop">
          Jewellery
        </span>
        <i class="fas fa-angle-right"></i>
      </nuxt-link>
    </li>
    <li>
    <nuxt-link to="/search-results">
      <span>
        <img :src="require('@/assets/images/all-icon/m-furniture.svg')" alt="andshop">
        Furniture
      </span>
      <i class="fas fa-angle-right"></i>
    </nuxt-link>
    </li>
  </ul>
</template>

<script>

  export default {
    name : 'productCategoryList',
    data(){
      return{
      }
    },
  }
</script>

<style>

</style>
