<template>
  <div class="contacts-container">
    <router-link
      :to="`/contacts/${contact.phone}`"
      class="contact cursor-pointer padded-container"
      v-for="contact in $root.contacts"
      v-bind:key="contact.phone"
    >
      <div>
        <span class="avatar" :style="contactStyle(contact.phone)">{{ contact.name[0] }}</span>
      </div>
      <div>
        <b>{{ contact.name }}</b>
        <br>
        <span class="preview-message">{{ contact.phone.replace('555', '555-') }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'contacts-list',
  methods: {
    contactStyle: function (phone) {
      return {
        'background-color': this.hexToRgba(phone.replace('555', ''), '.3'),
        'color': '#' + phone.replace('555', '')
      }
    },
    hexToRgba: function (hex, opacity) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? 'rgba(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ',' + opacity + ')' : '';
    }
  }
}
</script>
