<template>
  <div class="info-windows">
    <google-map id="map" ref="Map">
      
        <h4>{{ infoWindowContext.title }}</h4>
        <p>{{ infoWindowContext.description }}</p>
      </google-map-infowindow>
    </google-map>
  </div>
</template>

<script>
// import cities from "~/assets/cities.json";

export default {
  data() {
    return {
      showInfo: false,
      infoWindowContext: {
        position: {
          lat: 44.2899,
          lng: 11.8774
        },
        title: "Google Map of pakundia",
        description: "This is a google map of pakundia"
      }
      //   infoWindowsList: cities
    };
  },
  mounted() {
    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1
    };
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: "us" },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
      types: ["establishment"]
    };
  },
  methods: {
    toggleInfoWindow(context) {
      this.infoWIndowContext = context;
      this.showInfo = true;
    },
    infoClicked(context) {
      console.log(context);
    }
  }
};
</script>
