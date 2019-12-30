<template>

  <!-- WRAPPER ALL -->
  <div class="arlo_tm_wrapper_all">
  <mobile_menu/>

    <!-- CONTENT -->
    <div class="arlo_tm_content">

      <!-- LEFTPART -->
      <div v-bind:class="[openAndHideSideMenuElement('arlo_tm_leftpart_wrap')]">
        <div class="leftpart_inner">
          <div class="logo_wrap"></div>
          <div class="menu_list_wrap">
            <ul class="anchor_nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="leftpart_bottom">
            <div class="social_wrap">
              <ul>
                <li><a href="#"><i class="xcon-linkedin"></i></a></li>
                <li><a href="#"><i class="xcon-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div v-bind:class="[openAndHideSideMenuElement('arlo_tm_resize')]">
            <a v-on:click="openOrCloseSideMenu($event)" href="#">
              <i v-bind:class="[openAndHideSideMenuElement('xcon-angle-left')]"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /LEFTPART -->

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
          <div class="arlo_tm_section" id="contact">
            <div class="container">
              <div class="arlo_tm_title_holder contact">
                <h3>Contact Me</h3>
                <span>Get in touch with me</span>
              </div>
            </div>
            <div class="arlo_tm_footer_contact_wrapper_all">
              <div class="arlo_tm_contact_wrap_all">
                <div class="container">
                  <div class="leftbox">
                    <div class="arlo_tm_mini_title_holder contact">
                      <h4>Get in Touch</h4>
                    </div>
                    <div class="short_info_wrap">
                      <ul>
                        <li><p><label>Address:</label><span>123 Qwerty Avenue NYC, USA</span></p></li>
                        <li><p><label>Email:</label><span><a href="mailto:example@gmail.com">example@gmail.com</a></span></p></li>
                        <li><p><label>Phone:</label><span>+77 022 177 05 05</span></p></li>
                        <li><p><label>Website:</label><span><a href="mailto:example@gmail.com">www.yourdomain.com</a></span></p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="rightbox">
                    <div class="arlo_tm_contact_wrap">
                      <div class="main_input_wrap">
                        <form action="/" method="post" class="contact_form" id="contact_form">
                          <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                          <div class="empty_notice"><span>Please Fill Required Fields</span></div>
                          <div class="wrap">
                            <input id="name" type="text" placeholder="Your Name">
                          </div>
                          <div class="wrap">
                            <input id="email" type="text" placeholder="Your Email">
                          </div>
                          <div class="wrap">
                            <textarea id="message" placeholder="Your Message"></textarea>
                          </div>
                          <div class="arlo_tm_button">
                            <a id="send_message" href="#"><span>Send Message</span></a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="arlo_tm_footer_wrap">
                <div class="container">
                  <p>&copy; Copyright 2019. All Rights are Reserved.</p>
                </div>
              </div>
            </div>
          </div>
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

  const sideMenuVisibleType = Object.freeze({"open":1, "close":2, "hidden":3});
  const maxWidth = 1040;
  let windowWidth = 0;
  let prevSidemenuIsOpenState = sideMenuVisibleType.close;

  export default {
    components: {
      intro_top,
      mobile_menu,
      about_me,
      portfolio
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
