<template>
  <div>
    <div class="container mx-auto mt-5 col-md-10 pb-5">
      <div class="header">
        <div class="title">Our Team</div>
        <p>
          <small class="text-muted"
            >We are a homegrown, globally connected, <br /><u>Experimental</u>
            HUB that prides itself on its <u>Creativity</u><br />
            and <u>Innovation.</u>
          </small>
        </p>
      </div>
      <div class="row" style="justify-content: center">
        <div class="card col-md-3 mt-60">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="profile">
                <img src="@/assets/images/sagor2.jpg" />
              </div>
              <div class="card-title">
                Rubayeth Sagor<br />
                <small>Software Engineer</small><br />
                <small> <b>Co-Founder, </b></small>
                <small>Pakundia.me</small>
              </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    I expected anything less than perfect for the team of
                    experts. They are the best team ever!
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 mt-60">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="profile">
                <img src="@/assets/images/kawsar.jpg" />
              </div>
              <div class="card-title">
                Kawsar Ahmed<br />
                <small>Electrical Engineer</small><br />
                <small> <b>Designer, </b></small>
                <small>Pakundia.me</small>
              </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    I really enjoyed working with them, they are Group of
                    Professionals and they know what they're Doing
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 mt-60">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="profile">
                <img src="@/assets/images/didar.jpg" />
              </div>
              <div class="card-title">
                Didar Islam<br />
                <small>Content Manager</small><br />
                <small> <b> Founder, </b></small>
                <small>Shifa-Blood</small>
              </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    I always wanted to help people. we are here to help you
                    blood and medical support.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 mt-60">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="profile">
                <img src="@/assets/images/samrat.jpg" />
              </div>
              <div class="card-title">
                Samrat Mahmud<br />
                <small>Marine Engineer</small> <br />
                <small> <b>Advisor, </b></small>
                <small>Pakundia.me</small>
              </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    I expected anything less than perfect for the team of
                    experts. They are the best team ever!
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 mt-60">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="profile">
                <img src="@/assets/images/nasir.jpg" />
              </div>
              <div class="card-title">
                Al-Jubaer Nasir<br />
                <small>Teacher</small> <br />
                <small> <b>Advisor, </b></small>
                <small>Pakundia.me</small>
              </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    I really enjoyed working with them, they are Group of
                    Professionals and they know what they're Doing
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 mt-60">
          <div class="card-content">
            <div class="card-body p-0">
              <div class="profile">
                <img src="@/assets/images/robin.jpg" />
              </div>
              <div class="card-title">
                Robin Rahman<br />
                <small>Custom officer</small> <br />
                <small> <b>Advisor, </b></small>
                <small>Pakundia.me</small>
              </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    I always wanted cool videos of my concerts never knew whom
                    to talk to but they are amazing!
                  </small>
                </p>
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
  name: "OurTeam",
  data() {
    return {
      name: "Our Team"
    };
  }
};
</script>

<style scoped>
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

.title {
  font-size: 25px;
  font-weight: 100;
}

.icon {
  position: relative;
  bottom: 11px;
}

.mt-100 {
  margin-top: 100px;
}

.mt-60 {
  margin-top: 60px;
}

.profile img {
  width: 68px;
  height: 68px;
  border-radius: 50%;
}

.card {
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-body {
  position: relative;
  bottom: 35px;
}

.btn {
  margin-top: 36px;
  margin-bottom: 45px;
  background-color: #ab47bc;
  border: none;
  color: #fff;
}

.btn:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  color: #fff;
}

.header {
  padding-top: 40px;
}
</style>
