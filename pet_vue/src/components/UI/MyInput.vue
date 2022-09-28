<template>
  <input :value="modelValue"
  @input="updateInput"
  class="input" 
  type="text">
</template>

<script>


export default{
  name: 'my-input',
  props: {
     modelValue: [Number, String],
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input {
    
  width: 100%;
  border: rgb(40, 61, 40) 1px solid;
  padding: 10px 15px;
  margin-top: 10px;
}
</style>
