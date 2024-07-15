<template>
  <div class="inventory-grid">
    <div
      v-for="i in 25"
      :key="i"
      class="grid-cell"
      @dragover.prevent
      @drop.prevent="dropItem($event, i - 1)"
    >
      <InventoryItem
        v-if="getItemAt(i - 1)"
        :item="getItemAt(i - 1)"
        @dragstart="dragStart"
        @dragend="dragEnd"
      />
      <div v-else class="empty-cell"></div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import InventoryItem from './InventoryItem.vue'
import { useInventoryStore } from '../stores/inventory'

export default {
  components: { InventoryItem },
  setup() {
    const { getItems, updateItemGridIndex } = useInventoryStore()

    const getItemAt = (index) => {
      return getItems.value.find((item) => item.gridIndex === index)
    }

    const dragStart = (event, item) => {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text/plain', item.id)
    }

    const dragEnd = () => {}

    const dropItem = (event, index) => {
      const itemId = event.dataTransfer.getData('text/plain')
      const item = getItems.value.find((item) => item.id === parseInt(itemId))
      if (item) {
        updateItemGridIndex(item, index)
      }
    }

    return {
      getItemAt,
      dragStart,
      dragEnd,
      dropItem
    }
  }
}
</script>

<style lang="scss">
.inventory-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.grid-cell {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-cell {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
