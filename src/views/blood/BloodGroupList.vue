<template>
  <div class="listBody">
    <div class="container mt-5 mb-5">
      <div class="d-flex justify-content-between mb-3">
        <span> <b>Donor's List</b> </span>

        <div class=" bg-gray-200">
          <div
            class="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8"
          >
            <div class="relative">
              <div class="absolute top-4 right-3">
                <input
                  type="text"
                  class="h-14 w-86 pr-8 pl-5 mr-1 rounded z-0 focus:shadow focus:outline-none"
                  placeholder="Search by Zone"
                  v-model="searchValue"
                  @keyup="handleSearch"
                />
                <span
                  ><i
                    class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                  ></i
                ></span>
              </div>
            </div>
          </div>
        </div>

        <router-link :to="{ path: '/blood' }">
          <button class="btn btn-success btn-sm add">
            <i class="fa fa-arrow-left"> </i> Back
          </button>
        </router-link>
      </div>
      <div class="row g-2" v-if="!isLoading">
        <div class="col-md-3" v-for="(item, index) in bloodList" :key="index">
          <div class="card p-2 py-3 text-center">
            <div class="img mb-2">
              <img
                :src="
                  item.picture
                    ? item.picture
                    : `https://i.imgur.com/LohyFIN.jpg`
                "
                width="70"
                height="70"
                class="rounded-circle"
              />
            </div>
            <h5 class="mb-0 text-uppercase">{{ item.name }}</h5>
            <small>0{{ item.mobile ? item.mobile : "N/A" }}</small>
            <small>{{ item.bloodZone ? item.bloodZone : "N/A" }}</small>
            <small>{{ item.diffDays ? item.diffDays : "N/A" }}</small>
            <div class="ratings mt-2">
              <i class="fa fa-star"></i> <i class="fa fa-star"></i>
              <i class="fa fa-star"></i> <i class="fa fa-star"></i>
            </div>
            <div class="mt-4 apointment">
              <router-link
                :to="{ path: `/blood/details/${item.id}` }"
                exact
                class="nav-link"
              >
                <button class="btn btn-warning text-uppercase">
                  View Details
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="bloodList == null">
          <p><b>No Record Found</b></p>
        </div>
      </div>
      <div class="row g-2" v-else>
        loading..
        <img
          src="@/assets/images/loading.gif"
          height="300"
          width="400"
          class="text-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BloodGroup",
  computed: mapGetters({
    bloodList: "blood/bloodList",
    isLoading: "blood/loading"
  }),
  data() {
    return {
      name: "jim",
      searchValue: "",
      bloodGroup: ""
    };
  },
  methods: {
    handleSearch() {
      console.log(this.searchValue);
      if (this.searchValue.length > 0) {
        console.log(this.searchValue);
        this.$store.dispatch("blood/getBloodListByName", this.searchValue);
      } else {
        this.$store.dispatch("blood/getBloodList", this.bloodGroup);
      }
    }
  },
  mounted() {
    this.bloodGroup = this.$route.params.bloodGroup;
    this.$store.dispatch("blood/getBloodList", this.bloodGroup);
    console.log(this.bloodList);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap");

body {
  font-family: "Maven Pro", sans-serif;
}

body {
  background-color: #eee;
}

.add {
  border-radius: 20px;
}

.card {
  border: none;
  border-radius: 10px;
  transition: all 1s;
  cursor: pointer;
  box-shadow: 1px 2px 20px -4px #777777;
  margin-bottom: 15px;
}

.card:hover {
  -webkit-box-shadow: 3px 5px 17px -4px #777777;
  box-shadow: 3px 5px 1px -4px #777777;
}

.ratings i {
  color: green;
}

.apointment button {
  border-radius: 20px;
  background-color: #eee;
  color: #000;
  border-color: #eee;
  font-size: 13px;
}
</style>
