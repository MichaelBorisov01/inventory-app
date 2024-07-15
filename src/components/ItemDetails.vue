<template>
  <div class="item-details">
    <h2>{{ item.name }}</h2>
    <p>{{ item.description }}</p>
    <button @click="removeItem">Удалить</button>
    <div v-if="removeMode" class="remove-mode">
      <input type="number" v-model="quantity" />
      <button @click="confirmRemove">Подтвердить</button>
      <button @click="cancelRemove">Отмена</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useInventoryStore } from '../stores/inventory'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const inventoryStore = useInventoryStore()
    const removeMode = ref(false)
    const quantity = ref(1)

    const removeItem = () => {
      removeMode.value = true
    }

    const confirmRemove = () => {
      inventoryStore.removeItem(props.item, quantity.value)
      removeMode.value = false
    }

    const cancelRemove = () => {
      removeMode.value = false
    }

    return { removeMode, quantity, removeItem, confirmRemove, cancelRemove }
  }
}
</script>

<style lang="scss">
.item-details {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.remove-mode {
  margin-top: 20px;
}
</style>
