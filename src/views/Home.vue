<template>
  <div>
    <MainContent />
    <Service />
    <OurTeam />
    <Contact />
  </div>
</template>

<script>
import MainContent from "@/views/home/MainContent";
import Service from "@/views/service/Service";
import OurTeam from "@/views/team/OurTeam";
import Contact from "@/views/contact/Contact";

export default {
  components: {
    MainContent,
    OurTeam,
    Service,
    Contact
  },

  metaInfo() {
    return { title: this.$t("home") };
  },

  data() {
    return {
      user: null
    };
  }
};
</script>
