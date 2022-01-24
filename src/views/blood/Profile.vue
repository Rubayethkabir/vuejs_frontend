<template>
  <div class="profileBody">
    <div class="profile-content">
      <div class="container mt-3" v-if="bloodSingle">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7">
            <div class="card p-3 py-4">
              <div class="text-center">
                <img
                  :src="
                    bloodSingle.picture
                      ? bloodSingle.picture
                      : `https://i.imgur.com/bDLhJiP.jpg`
                  "
                  width="100"
                  class="rounded-circle"
                />
              </div>
              <div class="text-center mt-3">
                <!--<span class="bg-secondary p-1 px-4 rounded text-white"
                  >Pro</span
                >-->
                <h5 class="mt-2 mb-0">Name : {{ bloodSingle.name }}</h5>
                <span class="">Blood Group : {{ bloodSingle.blood }}</span>
                <br />
                <span class=""
                  >Designation :
                  {{
                    bloodSingle.current_designation
                      ? bloodSingle.current_designation
                      : "N/A"
                  }}</span
                >
                <br />
                <span
                  >Address :
                  {{ bloodSingle.address ? bloodSingle.address : "N/A" }}</span
                >
                <br />
                <span
                  >Gender :
                  {{ bloodSingle.gender ? bloodSingle.gender : "N/A" }}</span
                >
                <br />

                <span
                  >Blood Zone :
                  {{
                    bloodSingle.blood_zone ? bloodSingle.blood_zone : "N/A"
                  }}</span
                >
                <br />
                <span
                  >Last Blood Given Date :
                  {{
                    bloodSingle.last_blood_given_date
                      ? bloodSingle.last_blood_given_date
                      : "N/A"
                  }}</span
                >
                <br />

                <span
                  >Blood Contact Number : 0{{
                    bloodSingle.blood_contact_number
                      ? bloodSingle.blood_contact_number
                      : "N/A"
                  }}</span
                >
                <br />

                <div class="px-4 mt-1">
                  <p class="fonts">
                    Short Note :
                    {{
                      bloodSingle.short_note
                        ? bloodSingle.short_note
                        : "There is no shortNote"
                    }}
                  </p>
                </div>
                <!--
                <ul class="social-list">
                  <li><i class="fa fa-facebook"></i></li>
                  <li><i class="fa fa-dribbble"></i></li>
                  <li><i class="fa fa-instagram"></i></li>
                  <li><i class="fa fa-linkedin"></i></li>
                  <li><i class="fa fa-google"></i></li>
                </ul>
                -->

                <div class="buttons">
                  <!--
                  <button class="btn btn-outline-primary px-4">Message</button>
                  <button class="btn btn-primary px-4 ms-3 ml-2">
                    Contact
                  </button>
                  -->

                  <router-link :to="{ path: `/blood/${bloodSingle.blood}` }">
                    <button class="btn btn-info px-4 ms-3 ml-2">
                      Back
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" v-else>
        <h4>Loading....</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: mapGetters({
    bloodSingle: "blood/bloodSingle",
    isLoading: "blood/loading"
  }),
  data() {
    return {
      name: "jim"
    };
  },
  methods: {},
  mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch("blood/getBloodSingle", id);
    console.log(this.bloodSingle);
  }
};
</script>

<style scoped>
profileBody {
  background: #ffffff;
}

.card {
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 2px 20px -4px #777777;
}

.card:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #e1bee7;
  transform: scaleY(1);
  transition: all 0.5s;
  transform-origin: bottom;
}

.card:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #8e24aa;
  transform: scaleY(0);
  transition: all 0.5s;
  transform-origin: bottom;
}

.card:hover::after {
  transform: scaleY(1);
}

.fonts {
  font-size: 11px;
}

.social-list {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
}

.social-list li {
  padding: 10px;
  color: #8e24aa;
  font-size: 19px;
}

.buttons button:nth-child(1) {
  border: 1px solid #8e24aa !important;
  color: #8e24aa;
  height: 40px;
}

.buttons button:nth-child(1):hover {
  border: 1px solid #8e24aa !important;
  color: #fff;
  height: 40px;
  background-color: #8e24aa;
}

.buttons button:nth-child(2) {
  border: 1px solid #8e24aa !important;
  background-color: #8e24aa;
  color: #fff;
  height: 40px;
}
</style>
