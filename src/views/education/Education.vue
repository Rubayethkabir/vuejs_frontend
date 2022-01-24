<template>
  <div class="container mt-2">
    <div class="row article-content">
      <div class="col text-center">
        <div class="container mt-1">
          <div class="d-flex flex-row align-items-center"></div>
          <div class="row">
            <div class="col-md-6">
              <div class="card p-3">
                <router-link :to="{ path: '/education/institute-list' }" exact>
                  <div class="d-flex flex-row mb-3">
                    <img src="@/assets/images/pk.gif" width="70" />
                    <div class="d-flex flex-column ml-2">
                      <span>Institute List</span
                      ><span class="text-black-50">Payment Services</span
                      ><span class="ratings"
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ></span>
                    </div>
                  </div>
                  <h6>
                    Get more context on your users with stripe data inside our
                    platform.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>Installed 172 times</span
                    ><span class="text-primary"
                      >View&nbsp;<i class="fa fa-angle-right"></i
                    ></span>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card p-3">
                <router-link
                  :to="{ path: '/education/teacher-list' }"
                  exact
                  class="nav-link"
                >
                  <div class="d-flex flex-row mb-3">
                    <img src="@/assets/images/health.gif" width="70" />
                    <div class="d-flex flex-column ml-2">
                      <span>Teacher List</span
                      ><span class="text-black-50">Project Management</span
                      ><span class="ratings"
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ></span>
                    </div>
                  </div>
                  <h6>
                    Capture and sync subscribers from your mailchimp platform.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span>Installed 1234 times</span
                    ><span class="text-primary"
                      >View&nbsp;<i class="fa fa-angle-right"></i
                    ></span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row article-content">
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div class="card">
          <div class="card-header header-elements-inline">
            <h6 class="card-title">Latest posts - Health</h6>
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
                      <a href="#" data-abc="true">
                        <img
                          src="https://i.imgur.com/H0SJA0j.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <a href="#" data-abc="true"
                        >Java Developer 5th Editions</a
                      >
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-book mr-2"></i> Book tutorials
                      </li>
                    </ul>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </div>
                </div>
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                      <a href="#" data-abc="true">
                        <img
                          src="https://i.imgur.com/I2Gq4ML.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <a href="#" data-abc="true">Hybris Developer</a>
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-video-camera mr-2"></i> Video tutorials
                      </li>
                    </ul>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                      <a href="#" data-abc="true">
                        <img
                          src="https://i.imgur.com/4Iu9qtM.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <a href="#" data-abc="true">React Native 2nd Editions</a>
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-video-camera mr-2"></i> Video tutorials
                      </li>
                    </ul>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </div>
                </div>
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                      <a href="#" data-abc="true">
                        <img
                          src="https://i.imgur.com/8pHTmIb.jpg"
                          class="img-fluid img-preview rounded"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="media-body">
                    <h6 class="media-title">
                      <a href="#" data-abc="true"
                        >Python Architect 3rd Edition</a
                      >
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-question-circle mr-2"></i> FAQ section
                      </li>
                    </ul>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
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
                src="https://images.ctfassets.net/cnu0m8re1exe/7AEbLz6qcg2qV5SrDinLSH/aaaba02c914757f115dfe5e46822d719/blood.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-8">সর্বোৎকৃষ্ট সেবা: রক্তদান..</h2>
              <p>
                কারণ একজনের দান করা রক্ত বাঁচাতে পারে অন্যের জীবন। রাসুলুল্লাহ
                (সা.) ও তার বাণীতে বলেছেন, ‘তোমাদের কেউ তার অপর ভাইয়ের উপকার
                করতে সক্ষম হলে সে যেন তা করে (মুসলিম)। ’ কিন্তু আমাদের দেশের
                হাসপাতালগুলোতে এখনও প্রয়োজনের তুলনায় রক্তের সরবরাহ কম। এখনও
                প্রতিবছর অনেক রোগী রক্তের অভাবে মারা যায়। এর কারণ এ সম্পর্কে
                আমাদের অজ্ঞতা ও অমূলক কুসংস্কার। তাই রক্তদান সম্পর্কে আমাদের
                সকলের খুঁটিনাটি জানা অত্যন্ত জরুরি। রক্ত
              </p>
            </div>
          </div>

          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <h2 class="display-8">যারা যারা রক্ত দিতে পারবে ...</h2>
              <p>
                রক্তদাতা কারা ও দানের শর্ত সমূহ : ১৮ থেকে ৬০ বছর বয়স্ক যে কোন
                সুস্থ নর-নারী রক্ত দাতা হতে পারেন। কিন্তু রক্তদাতা হতে গেলে
                আপনাকে আরও কিছু বিষয়ের উপর নজর রাখতে হবে। যেমন যাদের রক্তে
                হিমোগ্লোবিনের মাত্রা ১২.৫ এর কম নয় এবং ওজন ৪৫ কেজির উপরে তারা
                প্রতি ৩ মাস অন্তর অন্তর রক্ত দান করতে পারেন। তবে খেয়াল রাখা
                প্রয়োজন যে, রক্তদানের সময় শরীরের তাপমাত্রা ও রক্তচাপ অবশ্যই
                স্বাভাবিক থাকা আবশ্যক। এছাড়াও রক্তদানের আরও কিছু ছোট ছোট বিষয়
                খেয়াল রাখতে হয়। যেমন- রক্তদানের আগে ৪৮ ঘণ্টার মধ্যে দাতা কোন
                এন্টিবায়োটিক ওষুধ গ্রহণ করেছেন কিনা, অথবা তিনি জন্ডিস, সিফিলিস,
                গনোরিয়া, এইডসের মত রোগে ভুগছেন কিনা। কারা রক্ত দিতে পারবেন না :
                ..
              </p>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <img
                class="img-fluid rounded-circle"
                src="https://thumbs.dreamstime.com/b/blood-donation-vector-illustration-donate-concept-bag-heart-world-donor-day-june-isolated-white-background-125314541.jpg"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvQwSpNYHqpuipmixzg95Zay6TP0Jhjc70KpNt2e4U5NPXy-NKl5UTjmvpEw5OsX0jrY&usqp=CAU"
                height="600"
                weight="600"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-8">For those about to rock...</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet
                aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                voluptatum molestiae adipisci, beatae obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      name: "jim"
    };
  }
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  margin: 15px 30px;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

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
