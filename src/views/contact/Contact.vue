<template>
  <div>
    <div class="">
      <div class="col text-center">
        <div class="container mt-1 p-3">
          <div class="d-flex flex-row align-items-center"></div>
          <div class="row">
            <div class="col-md-6">
              <img src="@/assets/images/contact.gif" />
            </div>
            <div class="col-md-6">
              <h2 class="form-title">Contact us</h2>
              <p class="justify text-muted">
                Have an enquiry or would like to give us feedback?<br />Fill out
                the form below to contact our team.
              </p>
              <form @submit.prevent="submit">
                <div class="form-group pt-2 pl-1">
                  <label for="exampleInputName">Your name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.name"
                    required
                  />
                </div>
                <div class="form-group pl-1">
                  <label for="exampleInputEmail1">Your email address</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="form.email"
                    required
                  />
                </div>
                <div class="form-group pl-1">
                  <label for="exampleFormControlTextarea1">Your message</label>
                  <textarea
                    class="form-control"
                    v-model="form.message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-md-3 offset-md-9">
                    <button type="submit" class="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.form);
      // this.$store.dispatch("sendMessage", this.form);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
.col-md-4 {
  margin-top: 27px;
}

.card:hover {
  transform: scale(1.1);
}

.container {
  background-color: white;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
}

.card {
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

img {
  padding-top: 110px;
  padding-left: 50px;
  width: 85%;
  height: 80%;
}

.text-muted {
  font-size: 13px;
  font-weight: bold;
}

.form-title {
  font-weight: bold;
}

.form-group label {
  font-size: 11px;
  font-weight: bold;
  padding-left: 5px;
  color: #828282;
}

.form-control {
  border: none;
  border-radius: 20px;
  background: rgba(165, 147, 69, 0.075);
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.btn {
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
  background-color: rgba(56, 147, 243, 0.67);
  text-align: center;
  border-radius: 5px;
}

.form-control:focus {
  color: #495057;
  border-color: #fff !important;
  outline: 0;
  box-shadow: 0 1px 1px 1px rgba(0, 123, 255, 0.25) !important;
}
</style>
