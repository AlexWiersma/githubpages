<template>

  <div class="arlo_tm_section" id="contact" style="margin-top: 24px;">
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
            </div>
          </div>
          <div class="rightbox">
            <div class="arlo_tm_contact_wrap">
              <div class="main_input_wrap">
                <form action="https://usebasin.com/f/553316899dd6" method="post" class="contact_form" id="contact_form">
                  <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                  <div class="empty_notice"><span>Please Fill Required Fields</span></div>
                  <div class="wrap">
                    <input id="name" type="text" name="name" placeholder="Your Name">
                  </div>
                  <div class="wrap">
                    <input id="email" name="email" type="email" placeholder="Your Email">
                  </div>
                  <div class="wrap">
                    <textarea id="message" name="message" placeholder="Your Message"/>
                    <input type="hidden" name="_gotcha" style="display: none;"/>
                  </div>
                  <div class="wrap">
                    <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
                  </div>
                  <div class="arlo_tm_button">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arlo_tm_footer_wrap">
        <div class="container">
          <p>&copy; Copyright {{ new Date().getFullYear() }}. All Rights are Reserved.</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>
