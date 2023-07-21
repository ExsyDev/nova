import Tool from './components/Tool.vue'

Nova.booting((app, store) => {
  app.component('{{ component }}', Tool)
})
