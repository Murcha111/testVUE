<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
<div @click.stop class="dialog__content">
<slot></slot>
</div>
  </div>
</template>

<script>
export  default{
 name: 'my-dialog',
 props: {
  show:{
    type: Boolean,
    default: false
  }
 },
 methods: {
  hideDialog(){
    this.$emit('update:show', false)
  }
 }
}
</script>

<style scoped>
  .dialog{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  position: fixed;
  }
  .dialog__content{
    min-width: 300px;
    min-height: 100px;
    border-radius: 12px;
    background: white;
    margin: auto;
    padding: 20px;
  }
</style>
