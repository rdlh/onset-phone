import Vue from 'vue'
import VueRouter from 'vue-router'

// Change language here if needed
import translations from './translations/fr.json'

import App from './App.vue'
import Homescreen from './Homescreen.vue'
import Sms from './components/sms/Sms.vue'
import Contacts from './components/contacts/Contacts.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Homescreen, name: 'Homescreen', meta: { title: translations.homescreen.title } },
  { path: '/sms', component: Sms, name: 'Conversations', meta: { title: translations.conversations.title } },
  { path: '/sms/:phone_number', component: Sms, name: 'Conversation', meta: {
    title: function (route) {
      let contact = window.phoneApp ? window.phoneApp.contacts.find(function (contact) {
        return contact.phone == route.params.phone_number
      }) : { name: route.params.phone_number.replace('555', '555-') }
      return contact ? contact.name : route.params.phone_number.replace('555', '555-')
    },
    rightButton: {
      text: 'i',
      href: function (route) {
        return '/contacts/' + route.params.phone_number
      }
    }
  } },
  { path: '/contacts', component: Contacts, name: 'Contacts', meta: { title: translations.contacts.title,
    rightButton: {
      text: '+',
      href: function () {
        return '/contacts/new'
      }
    }
  } },
  { path: '/contacts/new', component: Contacts, name: 'NewContact', meta: { title: translations.contacts.new } },
  { path: '/contacts/:phone_number', component: Contacts, name: 'Contact', meta: { title: function (route) {
    let contact = window.phoneApp ? window.phoneApp.contacts.find(function(contact){ return contact.phone == route.params.phone_number }) : { name: route.params.phone_number.replace('555', '555-') }
    return contact ? contact.name : route.params.phone_number.replace('555', '555-')
  } } }
]
Vue.use(VueRouter)

const router = new VueRouter({ routes })

let data = {
  currentUserPhone: '555000000',
  contacts: [
    { name: "Contact 1", phone: "555111111" },
    { name: "Contact 2", phone: "555222222" },
    { name: "Contact 3", phone: "555333333" },
    { name: "Contact 4", phone: "555444444" },
    { name: "Contact 5", phone: "555555555" },
    { name: "Contact 6", phone: "555666666" },
    { name: "Contact 7", phone: "555777777" },
    { name: "Contact 8", phone: "555888888" },
    { name: "Contact 9", phone: "555999999" }
  ],
  messages: [
    { from: '555000000', to: '555111111', content: '1' },
    { from: '555000000', to: '555111111', content: '2' },
    { from: '555000000', to: '555111111', content: '3' },
    { from: '555111111', to: '555000000', content: '4' },
    { from: '555111111', to: '555000000', content: '5' },
    { from: '555111111', to: '555000000', content: '6' },
    { from: '555000000', to: '555111111', content: '7' },
    { from: '555000000', to: '555111111', content: '8' },
    { from: '555111111', to: '555000000', content: '9' },
    { from: '555111111', to: '555000000', content: '10' },
    { from: '555000000', to: '555111111', content: '11' },
    { from: '555111111', to: '555000000', content: '12' },
    { from: '555000000', to: '555111111', content: ':)' },
    { from: '555000000', to: '555222222', content: '1' },
    { from: '555000000', to: '555222222', content: '2' },
    { from: '555000000', to: '555222222', content: '3' },
    { from: '555222222', to: '555000000', content: '4' },
    { from: '555222222', to: '555000000', content: '5' },
    { from: '555222222', to: '555000000', content: '6' },
    { from: '555000000', to: '555222222', content: '7' },
    { from: '555000000', to: '555222222', content: '8' },
    { from: '555222222', to: '555000000', content: '9' },
    { from: '555222222', to: '555000000', content: '10' },
    { from: '555000000', to: '555222222', content: '11' },
    { from: '555222222', to: '555000000', content: '12' },
    { from: '555000000', to: '555222222', content: ':)' },
    { from: '555000000', to: '555333333', content: '1' },
    { from: '555000000', to: '555333333', content: '2' },
    { from: '555000000', to: '555333333', content: '3' },
    { from: '555333333', to: '555000000', content: '4' },
    { from: '555333333', to: '555000000', content: '5' },
    { from: '555333333', to: '555000000', content: '6' },
    { from: '555000000', to: '555333333', content: '7' },
    { from: '555000000', to: '555333333', content: '8' },
    { from: '555333333', to: '555000000', content: '9' },
    { from: '555333333', to: '555000000', content: '10' },
    { from: '555000000', to: '555333333', content: '11' },
    { from: '555333333', to: '555000000', content: '12' },
    { from: '555000000', to: '555333333', content: ':)' },
    { from: '555000000', to: '555123123', content: '1' },
    { from: '555000000', to: '555123123', content: '2' },
    { from: '555000000', to: '555123123', content: '3' },
    { from: '555123123', to: '555000000', content: '4' },
    { from: '555123123', to: '555000000', content: '5' },
    { from: '555123123', to: '555000000', content: '6' },
    { from: '555000000', to: '555123123', content: '7' },
    { from: '555000000', to: '555123123', content: '8' },
    { from: '555123123', to: '555000000', content: '9' },
    { from: '555123123', to: '555000000', content: '10' },
    { from: '555000000', to: '555123123', content: '11' },
    { from: '555123123', to: '555000000', content: '12' },
    { from: '555000000', to: '555123123', content: ':)' }
  ]
}

data.translations = translations
// Autoload in dev mode, but don't autoload in game
data.loaded = window.ue == null

// eslint-disable-next-line
window.phoneApp = new Vue({ el: '#app', data: data, router, render: h => h(App) })
