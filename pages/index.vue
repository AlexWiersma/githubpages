<template>

  <!-- WRAPPER ALL -->
  <div class="arlo_tm_wrapper_all">
<!-- Note: Disabled menu due to font issues -->
<!--  <mobile_menu/>-->

    <!-- CONTENT -->
    <div class="arlo_tm_content">

      <!-- LEFTPART -->
      <!-- Note:  Disabled menu due to font issues -->
<!--      <div v-bind:class="[openAndHideSideMenuElement('arlo_tm_leftpart_wrap')]">-->
<!--        <div class="leftpart_inner">-->
<!--          <div class="logo_wrap"></div>-->
<!--          <div class="menu_list_wrap">-->
<!--            <ul class="anchor_nav">-->
<!--              <li><a href="#home">Home</a></li>-->
<!--              <li><a href="#about">About</a></li>-->
<!--              <li><a href="#portfolio">Portfolio</a></li>-->
<!--              <li><a href="#contact">Contact</a></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="leftpart_bottom">-->
<!--            <div class="social_wrap">-->
<!--              <ul>-->
<!--                <li><a href="https://www.linkedin.com/in/awiersma/"><i class="xcon-linkedin"></i></a></li>-->
<!--                <li><a href="https://www.instagram.com/alex.wiersma/"><i class="xcon-instagram"></i></a></li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div v-bind:class="[openAndHideSideMenuElement('arlo_tm_resize')]">-->
<!--            <a v-on:click="openOrCloseSideMenu($event)" href="#">-->
<!--              <i v-bind:class="[openAndHideSideMenuElement('xcon-angle-left')]"></i>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; /LEFTPART &ndash;&gt;-->

      <!-- RIGHTPART -->
      <div v-bind:class="[openAndHideSideMenuElement('arlo_tm_rightpart')]">
        <div class="rightpart_inner">
          <intro_top/>

          <!-- ABOUT -->
          <about_me/>
          <!-- /ABOUT -->

         <!-- PORTFOLIO -->
          <portfolio/>
          <!-- /PORTFOLIO -->

          <!-- CONTACT & FOOTER -->
          <contact/>
          <!-- /CONTACT & FOOTER -->

        </div>
      </div>
      <!-- /RIGHTPART -->

    </div>
  </div>
</template>

<script>
  import intro_top from '~/components/intro/intro_top';
  import mobile_menu from '~/components/mobile_menu/mobile_menu';
  import about_me from '~/components/about/about_me'
  import portfolio from "../components/portfolio/portfolio";
  import contact from "../components/contact/contact";

  const sideMenuVisibleType = Object.freeze({"open":1, "close":2, "hidden":3});
  const maxWidth = 1040;
  let windowWidth = 0;
  let prevSidemenuIsOpenState = sideMenuVisibleType.close;

  export default {
    components: {
      intro_top,
      mobile_menu,
      about_me,
      portfolio,
      contact
    },
    data: function () {
      return {
        mobileMenuIsOpen: false,
        sidemenuIsOpen: sideMenuVisibleType.open
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
        this.onResize();
      });
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },

    methods: {
      onResize: function() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < maxWidth && this.sidemenuIsOpen !== sideMenuVisibleType.hidden) {
          this.prevSidemenuIsOpenState = this.sidemenuIsOpen;
          this.sidemenuIsOpen = sideMenuVisibleType.hidden;
        } else if (this.windowWidth > maxWidth && this.sidemenuIsOpen === sideMenuVisibleType.hidden)  {
          this.sidemenuIsOpen = this.prevSidemenuIsOpenState
        }
      },
      openOrCloseSideMenu: async function (event) {
        switch (this.sidemenuIsOpen) {
          case sideMenuVisibleType.open:
            this.sidemenuIsOpen = sideMenuVisibleType.close;
            break;
          case sideMenuVisibleType.close:
            this.sidemenuIsOpen = sideMenuVisibleType.open;
            break;
          case sideMenuVisibleType.hidden:
            break;
        }
      },
      openAndHideSideMenuElement: function(currentValue) {
        if (this.sidemenuIsOpen === sideMenuVisibleType.hidden) {
          if (currentValue === 'arlo_tm_rightpart') {
            return currentValue + " " + "full"
          }
          return currentValue + " " + "hide";
        }

        let openValue = this.sidemenuIsOpen === sideMenuVisibleType.open ? "opened" : "";
        return currentValue + " " + openValue;
      },
      toggleMobileMenu: function (event) {
        this.mobileMenuIsOpen = !this.mobileMenuIsOpen
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
</style>
