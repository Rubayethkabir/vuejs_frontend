<template>
  <div class="profileBody">
    <div class="profile-content">
      <div class="container mt-3" v-if="doctorSingle">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7">
            <div class="card p-3 py-4">
              <div class="text-center">
                <img
                  :src="
                    doctorSingle.picture
                      ? doctorSingle.picture
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
                <h5 class="mt-2 mb-0">Name : {{ doctorSingle.name }}</h5>
                <span class="">doctor Group : {{ doctorSingle.doctor }}</span>
                <br />
                <span class=""
                  >Designation :
                  {{
                    doctorSingle.current_designation
                      ? doctorSingle.current_designation
                      : "N/A"
                  }}</span
                >
                <br />
                <span
                  >Address :
                  {{
                    doctorSingle.address ? doctorSingle.address : "N/A"
                  }}</span
                >
                <br />
                <span
                  >Gender :
                  {{ doctorSingle.gender ? doctorSingle.gender : "N/A" }}</span
                >
                <br />

                <span
                  >doctor Zone :
                  {{
                    doctorSingle.doctor_zone ? doctorSingle.doctor_zone : "N/A"
                  }}</span
                >
                <br />
                <span
                  >Last doctor Given Date :
                  {{
                    doctorSingle.last_doctor_given_date
                      ? doctorSingle.last_doctor_given_date
                      : "N/A"
                  }}</span
                >
                <br />

                <span
                  >doctor Contact Number : 0{{
                    doctorSingle.doctor_contact_number
                      ? doctorSingle.doctor_contact_number
                      : "N/A"
                  }}</span
                >
                <br />

                <div class="px-4 mt-1">
                  <p class="fonts">
                    Short Note :
                    {{
                      doctorSingle.short_note
                        ? doctorSingle.short_note
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

                  <router-link :to="{ path: `/doctor/${doctorSingle.doctor}` }">
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
    doctorSingle: "doctor/doctorSingle",
    isLoading: "doctor/loading"
  }),
  data() {
    return {
      name: "jim"
    };
  },
  methods: {},
  mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch("doctor/getDoctorSingle", id);
    console.log(this.doctorSingle);
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
