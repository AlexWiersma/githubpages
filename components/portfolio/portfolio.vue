<template>
  <div class="arlo_tm_section relative" id="portfolio">
    <div class="arlo_tm_portfolio_wrapper_all">
      <!-- PORTFOLIO FILTER -->
      <div class="arlo_tm_second_portfolio">
        <div class="container">
          <div class="arlo_tm_portfolio_wrap">
            <div class="arlo_tm_title_holder portfolio" style="margin-top: 24px;">
              <h3>Portfolio</h3>
              <span>Check out my latest work</span>
            </div>
            <div class="arlo_tm_portfolio_titles"></div>

            <div v-for="project in projects">

              <div class="arlo_tm_about_wrap author_wrap">
                <div class="leftbox">
                  <div class="image layer">
                    <img :src=project.image>
                  </div>
                </div>
                <div class="rightbox">
                  <div class="definition">
                    <div class="arlo_tm_mini_title_holder">
                      <h4>{{ project.project }}</h4>
                    </div>
                    <div class="definition">
                      <p> {{ project.description }} </p>
                    </div>
                    <div class="about_short_contact_wrap" style="margin-top: 24px">
                      <ul>
                        <li><strong>Employer:</strong> {{ project.employer }}</li>
                        <li><strong>Client:</strong> {{ project.client }}</li>
                        <li><strong>Role:</strong> {{ project.role }}</li>
                        <li><strong>Period:</strong> {{ project.period }}</li>
                        <li><strong>Technology:</strong> {{ project.technology }}</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div class="arlo_tm_about_wrap author_wrap">
              <div class="leftbox">
                <div class="arlo_tm_mini_title_holder">
                  <h4>Other iOS apps made an iOS Developer include:</h4>
                </div>
              </div>
              <div class="rightbox">
                <div v-for="project in portfolio_misc">
                  <div class="arlo_tm_mini_title_holder">
                   <h5>Employer: {{ project.employer }}</h5>
                  </div>
                  <div class="about_short_contact_wrap" style="margin-top: 24px">
                    <ul v-for="item in project.projects">
                      <li>{{ item }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /PORTFOLIO FILTER -->
    </div>
  </div>
</template>
<script>
  import json from "~/assets/data/data.json"

  export default {
    data: function () {
      return {
        projects: json.person.portfolio,
        portfolio_misc: json.person.portfolio_misc
      }
    }


  }
</script>
