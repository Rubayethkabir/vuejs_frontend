<template>
  <div>
    <navbar></navbar>
    <div class="mt-0">
      <transition name="page" mode="out-in">
        <slot>
          <router-view />
        </slot>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/views/footer/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
