<template>
  <!-- ABOUT -->
  <div class="arlo_tm_section relative" id="about">
    <div class="arlo_tm_about_wrapper_all">
      <div class="container">
        <div class="arlo_tm_title_holder">
          <h3>About Me</h3>
        </div>
        <div class="arlo_tm_about_wrap">
          <div class="author_wrap">
            <div class="leftbox">
              <div class="image layer">
                <img v-bind:src="avatarImage" alt=""/>
              </div>
            </div>
            <div class="rightbox">
              <div class="arlo_tm_mini_title_holder">
                <h4>I'm {{ fullname }} </h4>
              </div>
              <div class="definition">
                <p> {{ description }} </p>
                <div class="about_short_contact_wrap" style="margin-top: 24px">
                  <ul>
                    <li v-for="skill in skills">
                      {{ skill }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="buttons_wrap">
                <ul>
                  <li class="anchor">
                    <a href="#contact"><span>Send Message</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /ABOUT -->
</template>
<script>
  import json from "~/assets/data/data.json"
  export default {
    data: function () {
      return {
        fullname: json.person.full_name,
        description: json.person.about,
        avatarImage: json.person.about_image,
        skills: json.person.skills
      }
    }
  }
</script>
