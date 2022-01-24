<template>
  <div class="container">
    <div class="card">
      <h4 style="margin-top:15px;font-weight:bold">{{ title }}</h4>
      <p>{{ details }}</p>
    </div>
    <button class="btn btn-danger back-button" @click="$router.go(-1)">
      Back
    </button>
  </div>
</template>

<script>
import jsonData from "./bloodContent.json";
export default {
  name: "ContentDetails",
  data() {
    return {
      name: "ContentDetails",
      jsonData: jsonData,
      title: "",
      details: ""
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.setContent(id);
    //   this.$store.dispatch('getPakundiaInfo');
  },
  methods: {
    setContent(id) {
      this.title = this.jsonData[id].title;
      this.details = this.jsonData[id].details;
    }
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
}
p {
  padding: 20px;
  text-align: justify;
  line-height: 40px;
}
.back-button {
  margin: 8px;
}
</style>
