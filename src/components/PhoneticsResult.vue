<template>
  <div class="mt-3">
    <p class="mb-2">Phonetics:</p>

    <textarea
      rows="4"
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
      disabled
      :value="result"
    ></textarea>
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
