<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto">
      <header class="mt-6 mb-4">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Phonetify
        </h1>
      </header>

      <TextInput v-model="textInput" />
      <PhoneticsResult :result="phoneticsResult" />
    </div>
  </div>
</template>

<script>
import PhoneticsResult from '@/components/PhoneticsResult'
import TextInput from '@/components/TextInput'
import phonetify from "@/lib/phonetify";

export default {
  name: 'App',
  components: { PhoneticsResult, TextInput },
  data() {
    return {
      textInput: '',
    }
  },
  computed: {
    phoneticsResult() {
      return phonetify(this.textInput)
    },
  },
}
</script>

<style></style>
