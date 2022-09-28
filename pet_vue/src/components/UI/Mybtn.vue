<template>
<div>
  <button class="btn">
    <slot>

    </slot>
  </button>
</div>
</template>

<script>
export default{
  name: 'mybtn'
}
</script>

<style scoped>
  .btn {
  background: none;
  color: teal ;
  border: 1px solid rgb(77, 149, 77);  
}
</style>
