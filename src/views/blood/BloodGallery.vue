<template>
  <div>
    <div class="container mx-auto gallery mt-3 pb-3">
      <div class="header ">
        <div class="title text-center"><h3>Gallery of Shifa Blood</h3></div>
      </div>
      <div class="row" style="justify-content: center">
        <div class="card col-md-6">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="image">
                <img src="@/assets/images/gallery1.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-6">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="image">
                <img src="@/assets/images/gallery2.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-6">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="image">
                <img src="@/assets/images/gallery3.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-6">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="image">
                <img src="@/assets/images/gallery4.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-6">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="image">
                <img src="@/assets/images/gallery5.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-6">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="image">
                <img src="@/assets/images/gallery8.jpg" />
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
  name: "BloodGallery",
  data() {
    return {
      name: "BloodGallery Team"
    };
  }
};
</script>

<style scoped>
.gallery {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}
.header {
  padding: 20px;
}
.image {
  border: 2px solid #fff;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 300;
  transition: all 2s ease-in-out;
}

.image:hover img {
  transform: scale(2, 2);
  cursor: pointer;
}
</style>
