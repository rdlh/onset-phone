<template>
  <div class="smartphone">
    <!-- Header with Title and Back -->
    <div v-if="$route.name != 'Homescreen'" class="header">
      <span class="cursor-pointer" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left" style="display: inherit;margin-right: 10px;"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      </span>
      {{ typeof $route.meta.title == 'function' ? $route.meta.title($route) : $route.meta.title }}
      <router-link v-if="$route.meta.rightButton" :to="$route.meta.rightButton.href($route)">
        {{ $route.meta.rightButton.text }}
      </router-link>
    </div>

    <div v-bind:class="{ 'full-body': $route.name == 'Homescreen' }" class="body">
      <!-- Apps -->
      <router-view v-if="$root.loaded"></router-view>
      <div v-else class="lds-dual-ring"></div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

* {
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  -webkit-animation: fadein .2s; /* Safari, Chrome and Opera > 12.1 */
     -moz-animation: fadein .2s; /* Firefox < 16 */
      -ms-animation: fadein .2s; /* Internet Explorer */
       -o-animation: fadein .2s; /* Opera < 12.1 */
          animation: fadein .2s;
}

.header {
  display: flex;
  border-bottom: 1px solid #d8dfe3;
  background: #f1f4f6;
  padding: 10px;
}

.header a {
  width: 18px;
  height: 18px;
  text-align: center;
  border: 1px solid #818181;
  font-size: 14px;
  border-radius: 50%;
  margin-left: auto;
  color: #000000;
  text-decoration: none;
  line-height: 18px;
}

.body {
  display: flex;
  background: #fff;
  flex-grow: 1;
  /* 41px = header height */
  max-height: calc(100% - 41px);
}

.body.full-body {
  max-height: 100%
}

/* Utils */

.padded-container {
  padding: 10px;
}

.cursor-pointer {
  cursor: pointer;
}

/* PHONE DESIGN */

.smartphone {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 280px;
  height: 498px;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
}

/* The horizontal line on the top of the device */
.smartphone:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .phone {
  width: 280px;
  height: 498px;
  background: white;
}

/* LOADER */

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-left: calc(50% - 44px);
  margin-top: 50%;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #3578e5;
  border-color: #3578e5 transparent #3578e5 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
