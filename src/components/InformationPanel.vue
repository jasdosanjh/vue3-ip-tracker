<template>
  <div v-if="isLoading" class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row bg-white gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md">
    <div class="flex flex-col">
      <pulse-loader class="text-center mb-2" size="16px"></pulse-loader>
      <p class="text-2xl">Please wait...</p>
    </div>
  </div>

  <div v-else class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row bg-white gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md">
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">IP Address</h3>
      <span class="text-2xl">{{ ipInformation.address }}</span>
    </div>

    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Location</h3>
      <span class="text-2xl">{{ ipInformation.state }}</span>
    </div>

    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Timezone</h3>
      <span class="text-2xl">GMT {{ ipInformation.timezone }}</span>
    </div>

    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">ISP</h3>
      <span class="text-2xl">{{ ipInformation.isp }}</span>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'InformationPanel',

  components: {
    PulseLoader,
  },

  props: {
    ipInformation: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
