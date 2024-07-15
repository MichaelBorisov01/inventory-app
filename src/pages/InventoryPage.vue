<template>
  <div class="inventory-page">
    <div class="sidebar">
      <ItemCard />
    </div>
    <div class="inventory">
      <InventoryGrid />
    </div>
    <FooterInfo />
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue'
import InventoryGrid from '../components/InventoryGrid.vue'
import FooterInfo from '../components/FooterInfo.vue'

export default {
  components: { ItemCard, InventoryGrid, FooterInfo }
}
</script>

<style lang="scss">
.inventory-page {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.sidebar {
  width: 300px;
  background-color: #f0f0f0;
  padding: 20px;
}

.inventory {
  flex: 1;
  padding: 20px;
}
</style>
