<template>
  <div>
    <div class="card card-timeline px-2 border-none">
      <ul class="bs4-order-tracking">
        <router-link :to="{ path: '/' }">
          <li class="step active">
            <div><i class="fas fa-user"></i></div>
            Let's Start
          </li>
          <li class="step active">
            <div><i class="fal fa-people-carry"></i></div>
            To Help
          </li>
          <li class="step active">
            <div><i class="fal fa-users"></i></div>
            Other
          </li>
          <li class="step active">
            <div><i class="far fa-coins"></i></div>
            People
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    appName: "config/appName",
    user: "auth/user"
  }),

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.bs4-order-tracking {
  margin-bottom: 15px;
  overflow: hidden;
  color: #878788;
  padding-left: 0px;
  margin-top: 15px;
}

.bs4-order-tracking li {
  list-style-type: none;
  font-size: 13px;
  width: 25%;
  float: left;
  position: relative;
  font-weight: 400;
  color: #878788;
  text-align: center;
}

.bs4-order-tracking li:first-child:before {
  margin-left: 15px !important;
  padding-left: 11px !important;
  text-align: left !important;
}

.bs4-order-tracking li:last-child:before {
  margin-right: 5px !important;
  padding-right: 11px !important;
  text-align: right !important;
}

.bs4-order-tracking li > div {
  color: #fff;
  width: 29px;
  text-align: center;
  line-height: 29px;
  display: block;
  font-size: 12px;
  background: #878788;
  border-radius: 50%;
  margin: auto;
}

.bs4-order-tracking li:after {
  content: "";
  width: 150%;
  height: 2px;
  background: #878788;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 15px;
  z-index: -1;
}

.bs4-order-tracking li:first-child:after {
  left: 50%;
}

.bs4-order-tracking li:last-child:after {
  left: 0% !important;
  width: 0% !important;
}

.bs4-order-tracking li.active {
  font-weight: bold;
  color: #dc3545;
}

.bs4-order-tracking li.active > div {
  background: #dc3545;
}

.bs4-order-tracking li.active:after {
  background: #dc3545;
}

.card-timeline {
  background-color: #fff;
  z-index: 0;
}

.heading-title {
  color: #dc3545;
}
</style>
