<template>
  <div class="mt-3">
    <p class="mb-2">Phonetics:</p>

    <div>{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: 'PhoneticsResult',
  props: {
    result: String,
  },
}
</script>
