import { ref, computed } from 'vue'

interface Item {
  id: number
  name: string
  description: string
  gridIndex: number
}

const items = ref<Item[]>([
  { id: 1, name: 'Item 1', description: 'Item 1 description', gridIndex: 0 },
  { id: 2, name: 'Item 2', description: 'Item 2 description', gridIndex: 1 },
  { id: 3, name: 'Item 3', description: 'Item 3 description', gridIndex: 2 }
])

const getItems = computed(() => items.value)

const updateItemGridIndex = (item: Item, gridIndex: number) => {
  const index = items.value.findIndex((i) => i.id === item.id)
  if (index !== -1) {
    items.value[index].gridIndex = gridIndex
  }
}

export function useInventoryStore() {
  return {
    getItems,
    updateItemGridIndex
  }
}
