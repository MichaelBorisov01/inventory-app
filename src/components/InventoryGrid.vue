<template>
  <div class="inventory">
    <div class="inventory-grid">
      <InventoryItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import InventoryItem from './InventoryItem.vue'
import { useInventoryStore } from '../stores/inventory'

export default {
  components: { InventoryItem },
  setup() {
    const inventoryStore = useInventoryStore()
    const items = ref(inventoryStore.getItems())

    return { items }
  }
}
</script>

<style lang="scss">
.inventory {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.inventory-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
