<template>
  <div class="container mt-2">
    <div class="row article-content">
      <div class="col text-center">
        <div class="container mt-1">
          <div class="d-flex flex-row align-items-center"></div>
          <div class="row">
            <div class="col-md-6">
              <div class="card p-3">
                <router-link :to="{ path: '/health/hospital-list' }" exact>
                  <div class="d-flex flex-row mb-3">
                    <img src="@/assets/images/pk.gif" width="70" />
                    <div class="d-flex flex-column ml-2">
                      <span> <b style="color:blue"> Hospital List </b> </span
                      ><span class="text-black-50">Hospital clinic</span
                      ><span class="ratings"
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ></span>
                    </div>
                  </div>
                  <h6 style="color:blue">
                    Get all hospital and clinic and any other medical
                    institiution in pakundia.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span style="color:blue">Medical institiution</span
                    ><span class="text-primary"
                      >More info&nbsp;<i class="fa fa-angle-right"></i
                    ></span>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card p-3">
                <router-link
                  :to="{ path: '/health/doctor-list' }"
                  exact
                  class="nav-link"
                >
                  <div class="d-flex flex-row mb-3">
                    <img src="@/assets/images/health.gif" width="70" />
                    <div class="d-flex flex-column ml-2">
                      <span> <b style="color:blue"> Doctor List </b> </span
                      ><span class="text-black-50">Doctors of Pakundia</span
                      ><span class="ratings"
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                        ><i class="fa fa-star"></i><i class="fa fa-star"></i
                      ></span>
                    </div>
                  </div>
                  <h6 style="color:blue">
                    All doctor list in pakundia with their speciality and
                    details information.
                  </h6>
                  <div class="d-flex justify-content-between install mt-3">
                    <span style="color:blue">All doctors</span
                    ><span class="text-primary"
                      >Details&nbsp;<i class="fa fa-angle-right"></i
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
            <h6 class="card-title" style="color:blue">Latest posts - Health</h6>
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
                <div class="media flex-column flex-sm-row mt-0 p-3">
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
                      <a href="#" data-abc="true" style="color:blue"
                        >Java Developer 5th Editions</a
                      >
                    </h6>
                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                      <li class="list-inline-item">
                        <i class="fa fa-book mr-2"></i> Book tutorials
                      </li>
                    </ul>
                    <p style="font-size:14px; color:blue">
                      <router-link
                        :to="{ path: '/articel/2' }"
                        class="content-title"
                      >
                        {{ testValue | truncate(70, " .....") }}
                      </router-link>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-xl-6">
                <div class="media flex-column flex-sm-row mt-0 p-3">
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
                    <p style="font-size:14px">
                      Lorem Ipsum is simply dummy text of the printing sg sg
                      hsdgh shg hh sdghs height
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="media flex-column flex-sm-row mt-0 p-3">
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
                    <p style="font-size:14px">
                      Lorem Ipsum is simply dummy text of the printing sgs gsgsg
                      sgsg sgsg
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="media flex-column flex-sm-row mt-0 p-3">
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
                    <p style="font-size:14px">
                      Lorem Ipsum is simply dummy text of the printing and also
                      this sql query is very important for.
                    </p>
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
              <h4 class="display-8">সর্বোৎকৃষ্ট সেবা: রক্তদান</h4>
              <br />
              <p style="line-height:30px;">
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
              <p style="line-height:30px;">
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
  name: "Health",
  data() {
    return {
      name: "jim",
      testValue:
        "Lorem Ipsum is simply dummy text of the printing sohgosg ohsog ogho dgdhdhhdhdfhg"
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

.card:hover {
  transform: scale(1.1);
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
.content-title {
  color: blue;
}
</style>
