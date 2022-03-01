<template>
  <label for="comment" class="block">
    Enter some text to see it in phonetics.
  </label>

  <div class="mt-1">
    <textarea
      @input="$emit('update:modelValue', $event.target.value)"
      rows="4"
      name="comment"
      id="comment"
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
}
</script>
