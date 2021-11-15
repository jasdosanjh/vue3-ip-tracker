<template>
  <div class="flex flex-col h-screen max-h-screen">
    <div
      class="
        flex
        justify-center
        realtive
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
            placeholder="Please enter an IP address or leave empty for your IP information"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
