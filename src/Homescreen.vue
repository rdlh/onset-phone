<template>
  <div class="homescreen padded-container">
    <router-link :to="`/sms`" class="app">
      <div class="app-icon peach-color">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </div>
    </router-link>
    <router-link :to="`/contacts`" class="app">
      <div class="app-icon blue-color">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homescreen',
}
</script>

<style>
  .homescreen {
    width: 100%;
  }

  .app {
    width: 25%;
    text-decoration: none;
    color: #000;
    display: inline-block;
    box-sizing: border-box;
    padding: 10px;
  }

  .app-icon {
    width: 26px;
    height: 26px;
    text-align: center;
    padding: 10px;
    border-radius: 6px;
  }

  .peach-color {
    color: #fff;
    background: #f12711; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #f12711, #f5af19); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #f12711, #f5af19); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .blue-color {
    color: #fff;
    background: #2980B9; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #2980B9, #6DD5FA); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #2980B9, #6DD5FA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
