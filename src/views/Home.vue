<template>
  <div class="flex flex-col h-screen max-h-screen">
    <div
      class="
        z-20
        flex
        justify-center
        relative
        bg-header-pattern bg-cover
        px-4
        pt-8
        pb-32
      "
    >
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            class="
              flex-1
              py-3
              px-2
              rounded-tl-md rounded-bl-md
              focus:outline-none
            "
            type="text"
            placeholder="Please enter an IP address or leave empty for your IP informationPanel"
          />
          <i
            class="
              cursor-pointer
              bg-black
              text-white
              px-4
              rounded-tr-md rounded-br-md
              flex
              items-center
              fas
              fa-chevron-right
            "
          ></i>
        </div>
      </div>
      <InformationPanel />
    </div>
    <div id="map" class="h-full z-10"></div>
  </div>
</template>

<script>
import InformationPanel from "../components/InformationPanel.vue";
import leaflet from "leaflet";
import { onMounted } from "vue";

export default {
  name: "Home",

  components: {
    InformationPanel,
  },

  setup() {
    let myMap;

    onMounted(() => {
      myMap = leaflet.map("map").setView([51.505, -0.09], 13);

      leaflet
        .tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
          }
        )
        .addTo(myMap);
    });
  },
};
</script>
