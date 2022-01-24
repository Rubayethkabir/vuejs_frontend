<template>
  <div class="">
    <div class="col text-center">
      <div class="container mt-1 pb-5">
        <div class="d-flex flex-row align-items-center"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card p-3">
              <router-link :to="{ path: '/pakundia' }" exact class="nav-link">
                <div class="d-flex flex-row mb-3">
                  <img src="@/assets/images/pk.gif" width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span><b> Pakundia </b> </span
                    ><span class="text-black-50">Pakundia Info</span
                    ><span class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                  </div>
                </div>
                <h6>
                  Get more information about pakundia.
                </h6>
                <div class="d-flex justify-content-between install mt-3">
                  <span>Pakundia</span
                  ><span class="text-primary"
                    >Details&nbsp;<i class="fa fa-angle-right"></i
                  ></span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-3">
              <router-link :to="{ path: '/' }" exact class="nav-link">
                <div class="d-flex flex-row mb-3">
                  <img src="@/assets/images/health.gif" width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span style="color:blue;font-weight:bold">Health</span
                    ><span class="text-black-50">Hospital & Doctor</span
                    ><span class="ratings"
                      ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ><i class="fa fa-star"></i><i class="fa fa-star"></i
                    ></span>
                  </div>
                </div>
                <h6 style="color:blue;">
                  All hospital, clinic list and doctor list in pakundia.
                </h6>
                <div class="d-flex justify-content-between install mt-3">
                  <span style="color:blue;">Hospital & Doctor</span
                  ><span class="text-primary"
                    >View&nbsp;<i class="fa fa-angle-right"></i
                  ></span>
                </div>
              </router-link>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card p-3">
              <router-link :to="{ path: '/' }" exact class="nav-link">
                <div class="d-flex flex-row mb-3">
                  <img src="@/assets/images/education.gif" width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span style="color:purple;font-weight:bold">Education</span
                    ><span class="text-black-50"> Instiute & Teacher</span
                    ><span class="ratings"
                      ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ><i class="fa fa-star"></i><i class="fa fa-star"></i
                    ></span>
                  </div>
                </div>
                <h6 style="color:purple;">
                  You can see educational institute and teacher list.
                </h6>
                <div class="d-flex justify-content-between install mt-3">
                  <span style="color:purple;">Institute & Teacher</span
                  ><span class="text-primary"
                    >View&nbsp;<i class="fa fa-angle-right"></i
                  ></span>
                </div>
              </router-link>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card p-3">
              <router-link :to="{ path: '/blood' }" exact class="nav-link">
                <div class="d-flex flex-row mb-3">
                  <img src="@/assets/images/blood.gif" width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span style="color:red"><b> Shifa-Blood </b> </span
                    ><span class="text-black-50">Blood Donors</span
                    ><span class="ratings"
                      ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ><i class="fa fa-star"></i><i class="fa fa-star"></i
                    ></span>
                  </div>
                </div>
                <h6 style="color:red">
                  If you need blodd, you can search here.
                </h6>
                <div class="d-flex justify-content-between install mt-3">
                  <span style="color:red">Blood donors</span
                  ><span class="text-primary"
                    >Search Here&nbsp;<i class="fa fa-angle-right"></i
                  ></span>
                </div>
              </router-link>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card p-3">
              <div class="d-flex flex-row mb-3">
                <img src="@/assets/images/matrimonial2.gif" width="70" />
                <div class="d-flex flex-column ml-2">
                  <span style="color:#F3058B;font-weight:bold">Matrimonial</span
                  ><span class="text-black-50">Brides & Grooms</span
                  ><span class="ratings"
                    ><i class="fa fa-star"></i><i class="fa fa-star"></i
                    ><i class="fa fa-star"></i><i class="fa fa-star"></i
                  ></span>
                </div>
              </div>
              <h6 style="color:#F3058B;">
                You can find your betterhalf from here.
              </h6>
              <div class="d-flex justify-content-between install mt-3">
                <span style="color:#F3058B;">Brides & Grooms</span
                ><span class="text-primary"
                  >See more&nbsp;<i class="fa fa-angle-right"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-3">
              <div class="d-flex flex-row mb-3">
                <img src="@/assets/images/business3.gif" width="70" />
                <div class="d-flex flex-column ml-2">
                  <span style="color:#4A3D5D;font-weight:bold">Business</span
                  ><span class="text-black-50">Business & Product</span
                  ><span class="ratings"
                    ><i class="fa fa-star"></i><i class="fa fa-star"></i
                    ><i class="fa fa-star"></i><i class="fa fa-star"></i
                  ></span>
                </div>
              </div>
              <h6 style="color:#4A3D5D;">
                Grow your business institute and project from here.
              </h6>
              <div class="d-flex justify-content-between install mt-3">
                <span style="color:#4A3D5D;">Business & Product</span
                ><span class="text-primary"
                  >Grow&nbsp;<i class="fa fa-angle-right"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      name: "MainContent"
    };
  }
};
</script>

<style scoped>
.ratings i {
  color: green;
}

.install span {
  font-size: 12px;
}

.col-md-4 {
  margin-top: 27px;
}

.card:hover {
  transform: scale(1.1);
}

.heading {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
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
</style>
