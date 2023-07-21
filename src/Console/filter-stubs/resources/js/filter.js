import Filter from './components/Filter.vue'

Nova.booting((app, store) => {
  app.component('{{ component }}', Filter)
})
