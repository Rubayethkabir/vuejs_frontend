function page(path) {
  return () =>
    import(/* webpackChunkName: '' */ `@/views/${path}`).then(
      m => m.default || m
    );
}

export default [
  { path: "/", name: "home", component: page("Home.vue") },
  { path: "/about", name: "about", component: page("About.vue") },
  { path: "/login", name: "login", component: page("auth/Login.vue") },
  { path: "/register", name: "register", component: page("auth/Register.vue") },
  {
    path: "/pakundia",
    name: "Pakundia",
    component: page("pakundia/Pakundia.vue")
  },
  {
    path: "/info/:content",
    name: "Pakundia",
    component: page("pakundia/Info.vue")
  },
  {
    path: "/articel/:id",
    name: "Pakundia",
    component: page("pakundia/Article.vue")
  },
  {
    path: "/map-pakundia",
    name: "MapPakundia",
    component: page("pakundia/MapPakundia.vue")
  },
  {
    path: "/blood",
    name: "BloodGroup",
    component: page("blood/BloodGroup.vue")
  },
  {
    path: "/blood/:bloodGroup",
    name: "BloodGroupList",
    component: page("blood/BloodGroupList.vue")
  },
  {
    path: "/blood/details/:id",
    name: "Profile",
    component: page("blood/Profile.vue")
  },
  {
    path: "/blood/content-details/:id",
    name: "BloodContentDetails",
    component: page("blood/ContentDetails.vue")
  },
  {
    path: "/health",
    name: "Health",
    component: page("health/Health.vue")
  },
  {
    path: "/health/hospital-list",
    name: "HospitalList",
    component: page("health/HospitalList.vue")
  },
  {
    path: "/health/hospital-details/:id",
    name: "HospitalDetails",
    component: page("health/HospitalDetails.vue")
  },
  {
    path: "/health/doctor-list",
    name: "DoctorList",
    component: page("health/DoctorList.vue")
  },
  {
    path: "/doctor/details/:id",
    name: "Profile",
    component: page("health/DoctorProfile.vue")
  },

  {
    path: "/education",
    name: "education",
    component: page("education/Education.vue")
  },
  {
    path: "/education/institute-list",
    name: "InstituteList",
    component: page("education/InstituteList.vue")
  },
  {
    path: "/education/Institute-details/:id",
    name: "InstituteDetails",
    component: page("education/InstituteDetails.vue")
  },
  {
    path: "/education/teacher-list",
    name: "TeacherList",
    component: page("education/TeacherList.vue")
  },
  {
    path: "/teacher/details/:id",
    name: "TeacherProfile",
    component: page("education/TeacherProfile.vue")
  },

  {
    path: "/account",
    component: page("account/Index.vue"),
    children: [
      { path: "", redirect: { name: "account.profile" } },

      {
        path: "profile",
        name: "account.profile",
        component: page("account/Profile.vue")
      },

      {
        path: "password",
        name: "account.password",
        component: page("account/Password.vue")
      }
    ]
  },
  { path: "*", component: page("errors/404.vue") }
];
