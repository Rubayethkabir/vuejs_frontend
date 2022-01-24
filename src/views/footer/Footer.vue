<template>
  <div class="">
    <div class="container-fluid mt-5">
      <div class="card bg-white">
        <div class="row mb-4">
          <div class="col-md-4 col-sm-4 col-xs-4">
            <div class="footer-text pull-left">
              <div class="d-flex">
                <h1
                  class="font-weight-bold mr-2 px-3"
                  style="color:white; background-color:#957bda"
                >
                  PK
                </h1>
                <h1 style="color: #957bda">Pakundia</h1>
              </div>
              <p class="card-text">
                We are developing a system where one can help the other and get
                help. Let's all be good together. Be good to yourself and be
                good to others.
              </p>
              <div class="social mt-2 mb-3">
                <i class="fa fa-facebook-official fa-lg"></i>
                <i class="fa fa-instagram fa-lg"></i>
                <i class="fa fa-twitter fa-lg"></i>
                <i class="fa fa-linkedin-square fa-lg"></i>
                <i class="fa fa-facebook"></i>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-2 col-xs-2"></div>
          <div class="col-md-2 col-sm-2 col-xs-2">
            <h5 class="heading">Services</h5>
            <ul>
              <li>Health</li>
              <li>Education</li>
              <li>
                <router-link :to="{ path: '/blood' }"> Blood </router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-2 col-xs-2">
            <h5 class="heading">Support</h5>
            <ul class="card-text">
              <li>Matrimonial</li>
              <li>Products</li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-2 col-xs-2">
            <h5 class="heading">Organization</h5>
            <ul class="card-text">
              <li>About Us</li>
              <li>10 Takar Foundation</li>
              <li>Voice of Pakundia</li>
            </ul>
          </div>
        </div>
        <div class="divider mb-4"></div>
        <div class="row" style="font-size:10px;">
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="pull-left">
              <p><i class="fa fa-copyright"></i> 2021 Amar Pakundia</p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="pull-right mr-4 d-flex policy">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      name: "Footer"
    };
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap");

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul > li {
  padding: 4px;
  color: #c5cae9;
}

ul > li:hover {
  color: #957bda;
  cursor: pointer;
}

hr {
  border-width: 3px;
}

.card {
  padding: 2% 7%;
}

.social > i {
  padding: 1%;
  font-size: 15px;
}

.social > i:hover {
  color: #957bda;
  cursor: pointer;
}

.policy > div {
  padding: 4px;
}

.heading {
  font-family: "Titillium Web", sans-serif;
  color: black;
}

.divider {
  border-top: 2px solid;
}
</style>
