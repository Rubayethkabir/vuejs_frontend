<template>
  <div>
    <div class="container mt-5 mb-5">
      <div class="d-flex justify-content-center row">
        <div class="col-md-8">
          <div class="p-2">
            <h4>Hospital List</h4>
          </div>

          <div
            class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded single-hospital"
          >
            <div class="mr-1">
              <img
                class="rounded"
                src="https://i.imgur.com/XiFJkhI.jpg"
                width="70"
              />
            </div>
            <div class="d-flex flex-column align-items-center product-details">
              <span class="font-weight-bold">পাকুন্দিয়া সরকারি হসপিটাল</span>
              <div class="d-flex flex-row product-desc">
                <div class="size mr-1">
                  <span class="text-grey">pakundia sadar</span
                  ><span class="font-weight-bold">&nbsp; Pakundia</span>
                </div>
              </div>
            </div>

            <div class="d-flex flex-row align-items-center qty">
              <h5 class="text-grey mt-1 mr-1 ml-1">01769957492</h5>
            </div>
            <div>
              <h5 class="text-grey">Fully Government</h5>
            </div>
            <router-link
              :to="{ path: '/health/hospital-details/11' }"
              exact
              class="nav-link"
            >
              <div class="d-flex align-items-center">
                <i class="fa fa-eye mb-1 text-danger"></i>
              </div>
            </router-link>
          </div>

          <div
            class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded single-hospital"
          >
            <div class="mr-1">
              <img
                class="rounded"
                src="https://i.imgur.com/XiFJkhI.jpg"
                width="70"
              />
            </div>
            <div class="d-flex flex-column align-items-center product-details">
              <span class="font-weight-bold">Basic T-shirt</span>
              <div class="d-flex flex-row product-desc">
                <div class="size mr-1">
                  <span class="text-grey">Size:</span
                  ><span class="font-weight-bold">&nbsp;M</span>
                </div>
                <div class="color">
                  <span class="text-grey">Color:</span
                  ><span class="font-weight-bold">&nbsp;Grey</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center qty">
              <i class="fa fa-minus text-danger"></i>
              <h5 class="text-grey mt-1 mr-1 ml-1">2</h5>
              <i class="fa fa-plus text-success"></i>
            </div>
            <div>
              <h5 class="text-grey">$20.00</h5>
            </div>
            <div class="d-flex align-items-center">
              <i class="fa fa-trash mb-1 text-danger"></i>
            </div>
          </div>
          <div
            class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded single-hospital"
          >
            <div class="mr-1">
              <img
                class="rounded"
                src="https://i.imgur.com/XiFJkhI.jpg"
                width="70"
              />
            </div>
            <div class="d-flex flex-column align-items-center product-details">
              <span class="font-weight-bold">Basic T-shirt</span>
              <div class="d-flex flex-row product-desc">
                <div class="size mr-1">
                  <span class="text-grey">Size:</span
                  ><span class="font-weight-bold">&nbsp;M</span>
                </div>
                <div class="color">
                  <span class="text-grey">Color:</span
                  ><span class="font-weight-bold">&nbsp;Grey</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center qty">
              <i class="fa fa-minus text-danger"></i>
              <h5 class="text-grey mt-1 mr-1 ml-1">2</h5>
              <i class="fa fa-plus text-success"></i>
            </div>
            <div>
              <h5 class="text-grey">$20.00</h5>
            </div>
            <div class="d-flex align-items-center">
              <i class="fa fa-trash mb-1 text-danger"></i>
            </div>
          </div>
          <div
            class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded single-hospital"
          >
            <div class="mr-1">
              <img
                class="rounded"
                src="https://i.imgur.com/XiFJkhI.jpg"
                width="70"
              />
            </div>
            <div class="d-flex flex-column align-items-center product-details">
              <span class="font-weight-bold">Basic T-shirt</span>
              <div class="d-flex flex-row product-desc">
                <div class="size mr-1">
                  <span class="text-grey">Size:</span
                  ><span class="font-weight-bold">&nbsp;M</span>
                </div>
                <div class="color">
                  <span class="text-grey">Color:</span
                  ><span class="font-weight-bold">&nbsp;Grey</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center qty">
              <i class="fa fa-minus text-danger"></i>
              <h5 class="text-grey mt-1 mr-1 ml-1">2</h5>
              <i class="fa fa-plus text-success"></i>
            </div>
            <div>
              <h5 class="text-grey">$20.00</h5>
            </div>
            <div class="d-flex align-items-center">
              <i class="fa fa-trash mb-1 text-danger"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HospitalList",
  data() {
    return {
      name: "Hospital List"
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap");

.container {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 3px;
}
.size span {
  font-size: 11px;
}

.color span {
  font-size: 11px;
}

.product-deta {
  margin-right: 70px;
}

.gift-card:focus {
  box-shadow: none;
}

.pay-button {
  color: #fff;
}

.pay-button:hover {
  color: #fff;
}

.pay-button:focus {
  color: #fff;
  box-shadow: none;
}

.text-grey {
  color: #a39f9f;
}

.qty i {
  font-size: 11px;
}

.single-hospital {
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  padding-bottom: 4px;
  margin-bottom: 4px;
}
</style>
