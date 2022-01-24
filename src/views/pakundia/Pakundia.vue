<template>
  <div>
    <div class="container mt-3 mb-3 pb-4">
      <div class="row mt-1 g-4">
        <div class="col-md-4">
          <router-link :to="{ path: '/pakundia-info' }" class="nav-link">
            <div class="card p-2" style="height:150px">
              <div class="" style="margin-top:40px">
                <h4 style="color:#F60552; font-size:24px;">
                  <b> পাকুন্দিয়া </b>
                </h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ path: '/info/history' }" class="nav-link">
            <div class="card p-2" style="height:150px">
              <div class="" style="margin-top:40px">
                <h4 style="color:#F60552; font-size:24px;">
                  <b> ইতিহাস </b>
                </h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ path: '/info/tradition' }" class="nav-link">
            <div class="card p-2" style="height:150px">
              <div class="" style="margin-top:40px">
                <h4 style="color:#F60552; font-size:24px;">
                  <b> ঐতিহ্য </b>
                </h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ path: '/info/culture' }" class="nav-link">
            <div class="card p-2" style="height:150px">
              <div class="" style="margin-top:40px">
                <h4 style="color:#F60552; font-size:24px;">
                  <b> সংস্কৃতি </b>
                </h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ path: '/map-pakundia' }" class="nav-link">
            <div class="card p-2" style="height:150px">
              <div class="" style="margin-top:40px">
                <h4 style="color:#F60552; font-size:24px;">
                  <b> ভূচিত্র </b>
                </h4>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ path: '/union' }" class="nav-link">
            <div class="card p-2" style="height:150px">
              <div class="" style="margin-top:40px">
                <h4 style="color:#F60552; font-size:24px;">
                  <b> ইউনিয়ন </b>
                </h4>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pakundia",
  data() {
    return {
      name: "Pakundia"
    };
  }
};
</script>

<style scoped>
.col-md-4 {
  margin-top: 27px;
}

.card {
  border: none;
  border-radius: 20px;
  transition: all 0.5s;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.1);
}

.heading {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}

.name {
  font-size: 15px;
  font-weight: bold;
}

.square {
  background-color: #fedcdd;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.email {
  font-size: 14px;
  margin-left: 25px;
  font-weight: bold;
}

.dummytext {
  font-size: 12px;
  font-weight: normal;
  color: #848590;
}

.icons i {
  color: #fa222a;
  margin-left: 25px;
}

.icons span {
  font-size: 13px;
  font-weight: normal;
  color: #848590;
}

.square1 {
  background-color: #cfe3fe;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons1 i {
  color: #497eea;
  margin-left: 25px;
}

.icons1 span {
  font-size: 13px;
  font-weight: normal;
  color: #848590;
}

.square2 {
  background-color: #ffefc5;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons2 i {
  color: #ffc227;
  margin-left: 25px;
}

.icons2 span {
  font-size: 13px;
  font-weight: normal;
  color: #848590;
}

.square5 {
  background-color: #41cfff;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons5 i {
  color: #41cfff;
  margin-left: 25px;
}

.icons5 span {
  font-size: 13px;
  font-weight: normal;
  color: #848590;
}

.square4 {
  background-color: #eae6fd;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons4 i {
  color: #6a35ff;
  margin-left: 25px;
}

.icons4 span {
  font-size: 13px;
  font-weight: normal;
  color: #848590;
}

.square3 {
  background-color: #fedfce;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons3 i {
  color: #ff8339;
  margin-left: 25px;
}

.icons3 span {
  font-size: 13px;
  font-weight: normal;
  color: #848590;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-body {
  position: relative;
  bottom: 35px;
}
</style>
