<template>
  <div :class="`text-${field.textAlign}`">
    <span
      v-if="fieldHasValue || usesCustomizedDisplay"
      class="whitespace-nowrap"
      :title="field.value"
    >
      {{ formattedDate }}
    </span>
    <span v-else>&mdash;</span>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { FieldValue } from '@/mixins'

export default {
  mixins: [FieldValue],

  props: ['resourceName', 'field'],

  computed: {
    formattedDate() {
      if (this.usesCustomizedDisplay) {
        return this.field.displayedAs
      }

      return DateTime.fromISO(this.field.value)
        .setZone(this.timezone)
        .toLocaleString({
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
        })
    },

    timezone() {
      return Nova.config('userTimezone') || Nova.config('timezone')
    },
  },
}
</script>
