<template>
  <div class="inventory-item" @dragstart="dragStart" @dragend="dragEnd">
    {{ item.name }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const dragStart = (event) => {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text/plain', props.item.id)
    }

    const dragEnd = () => {}

    return { dragStart, dragEnd }
  }
}
</script>

<style lang="scss">
.inventory-item {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
}
</style>
