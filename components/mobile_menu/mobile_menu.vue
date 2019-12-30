<template>
 <!-- MOBILE MENU -->
  <div class="arlo_tm_mobile_header_wrap">
    <div class="main_wrap">
      <div v-on:click="toggleMobileMenu($event)" class="arlo_tm_trigger">
        <div class="hamburger hamburger--collapse-r">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="arlo_tm_mobile_menu_wrap" v-bind:style="{ display: mobileMenuIsOpen? 'block' : 'none' }">
      <div class="mob_menu">
        <ul class="anchor_nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /MOBILE MENU -->
</template>
<script>

  export default {
    data: function () {
      return {
        mobileMenuIsOpen: false,
      }
    },
    methods:{
      toggleMobileMenu: function (event) {
        this.mobileMenuIsOpen = !this.mobileMenuIsOpen
      }
    }
  }

</script>
