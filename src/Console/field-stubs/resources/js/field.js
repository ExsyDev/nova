import IndexField from './components/IndexField.vue'
import DetailField from './components/DetailField.vue'
import FormField from './components/FormField.vue'

Nova.booting((app, store) => {
  app.component('index-{{ component }}', IndexField)
  app.component('detail-{{ component }}', DetailField)
  app.component('form-{{ component }}', FormField)
})
