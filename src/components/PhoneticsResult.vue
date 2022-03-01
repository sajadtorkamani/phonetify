<template>
  <div class="mt-3">
    <p class="mb-2">Phonetics:</p>

    <div class="bg-gray-200 overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        {{ result }}
      </div>
    </div>
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
