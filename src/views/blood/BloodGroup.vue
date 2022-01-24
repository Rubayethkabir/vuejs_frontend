<template>
  <div class="container mt-2">
    <div class="row blood-group-body">
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/A+' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("A+") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/A-' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("A-") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/B+' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("B+") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/B-' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("B-") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/AB+' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("AB+") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/AB-' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("AB-") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/O+' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("O+") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hexabody">
          <router-link :to="{ path: '/blood/O-' }" exact class="nav-link">
            <div class="hexagon-wrapper">
              <div class="hexagon">
                <i class="">
                  {{ $t("O-") }}
                </i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="row article-content">
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div class="card">
          <div class="card-header header-elements-inline">
            <h6 class="card-title">Latest posts - Shifa -blood</h6>
            <div class="header-elements">
              <div class="list-icons mb-2">
                <a
                  class="fa fa-close"
                  data-action="collapse"
                  data-abc="true"
                ></a>
              </div>
            </div>
          </div>
          <div class="card-body pb-0">
            <div class="row">
              <div class="col-xl-6">
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                      <router-link :to="{ path: '/blood/content-details/0' }">
                        <img
                          src="@/assets/images/blood1.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </router-link>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <router-link
                        :to="{ path: '/blood/content-details/0' }"
                        data-abc="true"
                      >
                        রক্তদানের উপকারিতা
                      </router-link>
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-book mr-2"></i> Book tutorials
                      </li>
                    </ul>
                    স্বেচ্ছায় নিজের রক্ত অন্য কারো প্রয়োজনে দান করাই রক্তদান।
                  </div>
                </div>
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                      <router-link :to="{ path: '/blood/content-details/1' }">
                        <img
                          src="@/assets/images/blood2.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </router-link>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <router-link
                        :to="{ path: '/blood/content-details/1' }"
                        data-abc="true"
                      >
                        রক্তদানের শর্তগুলো
                      </router-link>
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-question-circle mr-2"></i> FAQ section
                      </li>
                    </ul>
                    • রক্তদাতাকে সুস্থ থাকতে হবে এবং
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                      <router-link :to="{ path: '/blood/content-details/2' }">
                        <img
                          src="@/assets/images/blood3.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </router-link>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <router-link
                        :to="{ path: '/blood/content-details/2' }"
                        data-abc="true"
                      >
                        যাঁদের রক্তদান নিষেধ
                      </router-link>
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-question-circle mr-2"></i> FAQ section
                      </li>
                    </ul>
                    ক্যান্সার, হিমোফিলিয়া, ম্যালেরিয়াসহ জীবাণুঘটিত কোনো রোগী। •
                    এইচআইভি বা এইডস আক্রান্তরা।
                  </div>
                </div>
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                      <router-link :to="{ path: '/blood/content-details/3' }">
                        <img
                          src="@/assets/images/blood4.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </router-link>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <router-link :to="{ path: '/blood/content-details/3' }">
                        রক্ত দেওয়ার পর যা হয়
                      </router-link>
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-question-circle mr-2"></i> FAQ section
                      </li>
                    </ul>
                    রক্ত দেওয়ার পর কিছুটা মাথা ঘোরাতে পারে। বিশেষজ্ঞদের মতে, এ
                    সময় হাঁটাহাঁটি না করে
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row article-content">
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div class="row  align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="@/assets/images/blood5.jpg"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-8">
                নিয়মিত রক্তদানের মাধ্যমে শরীর যেভাবে উকৃত হয়-
              </h2>
              <p>
                নিয়মিত রক্তদান করলে ক্যানসারে আক্রান্ত হওয়ার ঝুঁকি কমে। বছরে
                তিনবার রক্ত দিলে শরীরে নতুন লোহিত কণিকা তৈরির হার বেড়ে যায়।
                এতে অস্থিমজ্জা সক্রিয় থাকে। দ্রুত রক্তস্বল্পতা পূরণ হয়। রক্তে
                কোলেস্টরেলের মাত্রা কমে যায়। এর ফলে রক্তচাপ নিয়ন্ত্রণে থাকে।
                ফলে হৃদরোগ ও হার্ট অ্যাটাকের ঝুঁকি কমে যায়।
                <router-link :to="{ path: '/blood/content-details/4' }">
                  <b>Read More</b>
                </router-link>
              </p>
            </div>
          </div>

          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <h2 class="display-8">
                রক্ত দেয়ার আগেই জেনে নিন কিছু জরুরি তথ্য
              </h2>
              <p>
                একজন মানুষ তার জীবদ্দশায় কতজন মানুষকে বাঁচানোর ক্ষমতা রাখেন?
                জেমস হ্যারিসন এমন এক ব্যক্তি যিনি একাই বাঁচিয়েছেন ২০ লাখ শিশুর
                প্রাণ। আসলেও তাই। এতোগুলো শিশুর প্রাণ বাঁচিয়েছেন স্বেচ্ছায় ও
                বিনামূল্যে নিজের রক্ত ও রক্তের উপাদান প্লাজমা দানের
                মাধ্যমে।এজন্য গিনেজ ওয়ার্ল্ড রেকর্ডসে নিজের নামও লিখিয়েছেন এই
                অস্ট্রেলিয়ার নাগরিক।...
                <router-link :to="{ path: '/blood/content-details/5' }">
                  <b>Read More</b>
                </router-link>
              </p>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="@/assets/images/blood6.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row article-content">
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div class="row  align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="@/assets/images/gallery10.jpg"
                height="200"
                weight="200"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-8">রক্ত দেয়া কেন প্রয়োজন ?</h2>
              <p>
                দুর্ঘটনায় আহত, ক্যান্সার বা অন্য কোন জটিল রোগে আক্রান্তদের
                জন্য, অস্ত্রোপচার কিংবা সন্তান প্রসব অথবা থ্যালাসেমিয়ার মতো
                বিভিন্ন রোগের চিকিৎসায় রক্ত সঞ্চালনের প্রয়োজন হয়। তবে
                বাংলাদেশে জনসংখ্যার তুলনায় রক্তদাতার সংখ্যা এখনো নগণ্য।...
                <router-link :to="{ path: '/blood/content-details/6' }">
                  <b>Read More</b>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BloodGallery />
    <BloodTeam />
  </div>
</template>

<script>
import BloodGallery from "@/views/blood/BloodGallery.vue";
import BloodTeam from "@/views/blood/BloodTeam.vue";

export default {
  name: "BloodGroup",
  components: {
    BloodGallery,
    BloodTeam
  },
  data() {
    return {
      name: "jim"
    };
  }
};
</script>

<style>
.blood-group-body {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.article-content {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.blood-content {
  background: #ffffff;
}
.hexabody {
  overflow: hidden;
  background: linear-gradient(18deg, #ffffff, #ffffff);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.hexagon-wrapper {
  margin: auto;
  display: flex;
  text-align: initial;
  width: 130px;
  height: 130px;
  cursor: pointer;
}

.hexagon {
  position: relative;
  width: 46%;
  height: 80%;
  margin: auto;
  color: white;
  background: linear-gradient(-180deg, red, #fda3b2);
  display: flex;
  align-content: center;
  justify-content: center;
  transition: 0.5s;
}

.hexagon i {
  z-index: 1;
  margin: auto;
  font-size: 50px;
  color: transparent;
  background: linear-gradient(45deg, #a58fe9, #e37682);
  background-clip: text;
  -webkit-background-clip: text;
}

.hexagon:before,
.hexagon:after {
  position: absolute;
  content: "";
  background: inherit;
  height: 100%;
  width: 100%;
  border-radius: 0;
  transition: 0.5s;
  transform-origin: center;
}
.hexagon:before {
  transform: rotateZ(60deg);
}
.hexagon:after {
  transform: rotateZ(-60deg);
}
.hexagon:hover {
  border-radius: 50px;
  transition: 0.5s;
}
.hexagon:hover:before {
  border-radius: 50px;
  transition: 0.5s;
}
.hexagon:hover:after {
  border-radius: 50px;
  transition: 0.5s;
}
.blood-heading {
  font-weight: bold;
  font-size: 32px;
}
.content {
  font-size: 20px;
  line-height: 45px;
}

.mt-50 {
  margin-top: 50px;
}

.mb-50 {
  margin-bottom: 50px;
}

.card-header:not([class*="bg-"]):not([class*="alpha-"]) {
  background-color: transparent;
  padding-top: 1.25rem;
}

.header-elements-inline {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

a {
  text-decoration: none !important;
  color: red;
}

.img-preview {
  max-height: 5rem;
}
</style>
