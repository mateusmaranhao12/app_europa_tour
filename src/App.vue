<template>
  <div class="app-view">
    <router-view />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Paytone+One');

* {
    font-family: "Paytone One", sans-serif;
}

.app-view {
  background-color: #070707;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body::-webkit-scrollbar {
  width: 12px;
  /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #000000;
  /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #d79c1e;
  /* color of the scroll thumb */
  border-radius: 20px;
  /* roundness of the scroll thumb */
  border: 3px solid #000000;
  /* creates padding around scroll thumb */
}
</style>
