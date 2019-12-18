<template>
  <div class="conversations-container">
    <router-link
      :to="`/sms/${phoneNumber}`"
      class="conversation cursor-pointer padded-container"
      v-for="phoneNumber in Object.keys(conversations)"
      v-bind:key="phoneNumber"
    >
      <div>
        <span class="avatar" v-if="conversations[phoneNumber].name == phoneNumber" :style="conversationStyle(phoneNumber)">?</span>
        <span class="avatar" v-else :style="conversationStyle(phoneNumber)">{{ conversations[phoneNumber].name[0] }}</span>
      </div>
      <div>
        <b>{{ conversations[phoneNumber].name.replace('555', '555-') }}</b>
        <br>
        <span class="preview-message">{{ conversations[phoneNumber].messages[conversations[phoneNumber].messages.length - 1].content }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'conversations',
  props: ['conversations'],
  methods: {
    goToConversation: function (phoneNumber) {
      this.$parent.currentConversationWith = phoneNumber
      this.$root.goTo('sms', 'conversation', this.conversations[phoneNumber].name.replace('555', '555-'))
    },
    conversationStyle: function (phoneNumber) {
      return {
        'background-color': this.hexToRgba(phoneNumber.replace('555', ''), '.3'),
        'color': '#' + phoneNumber.replace('555', '')
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
