<template>
  <div class="flex flex-col h-screen max-h-screen">
    <div class="z-20 flex justify-center relative bg-header-pattern bg-cover px-4 pt-8 pb-32">
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            v-model="queryIp"
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="Please enter an IP address or leave empty for your IP informationPanel"
          />
          <i @click="getIpInformation" class="cursor-pointer bg-black text-white px-4 rounded-tr-md rounded-br-md flex items-center fas fa-chevron-right"></i>
        </div>
      </div>
      <InformationPanel v-if="ipInformation" :ipInformation="ipInformation" :isLoading="isLoading" />
    </div>
    <div id="map" class="h-full z-10"></div>
  </div>
</template>

<script>
import InformationPanel from '../components/InformationPanel.vue';
import axios from 'axios';
import leaflet from 'leaflet';
import { onMounted, ref } from 'vue';

export default {
  name: 'Home',

  components: {
    InformationPanel,
  },

  setup() {
    let myMap;

    const ipInformation = ref(null);
    const queryIp = ref('');
    const isLoading = ref(false);

    onMounted(() => {
      myMap = leaflet.map('map').setView([51.505, -0.09], 9);

      leaflet
        .tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`, {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
        })
        .addTo(myMap);
    });

    const getIpInformation = async () => {
      isLoading.value = true;
      try {
        const data = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${import.meta.env.VITE_GEOLOCATION_API_KEY}&ipAddress=${queryIp.value}`);
        const result = data.data;
        ipInformation.value = {
          address: result.ip,
          state: result.location.region,
          timezone: result.location.timezone,
          isp: result.isp,
          lat: result.location.lat,
          lng: result.location.lng,
        };
        leaflet.marker([ipInformation.value.lat, ipInformation.value.lng]).addTo(myMap);
        myMap.setView([ipInformation.value.lat, ipInformation.value.lng], 13);
      } catch (error) {
        alert(error.message);
      } finally {
        isLoading.value = false;
      }
    };

    return { ipInformation, queryIp, getIpInformation, isLoading };
  },
};
</script>
