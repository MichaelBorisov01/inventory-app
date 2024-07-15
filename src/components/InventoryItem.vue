<template>
  <div class="inventory-item" @click="showDetails = true">
    {{ item.name }}
    <ItemDetails v-if="showDetails" :item="item" @close="showDetails = false" />
  </div>
</template>

<script>
import { ref } from 'vue'
import ItemDetails from './ItemDetails.vue'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const showDetails = ref(false)

    return { showDetails }
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
  cursor: pointer;
}
</style>
