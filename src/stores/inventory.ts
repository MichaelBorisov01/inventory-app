import { ref, computed } from 'vue'

interface Item {
  id: number
  name: string
  description: string
}

const items = ref<Item[]>([
  { id: 1, name: 'Item 1', description: 'Item 1 description' },
  { id: 2, name: 'Item 2', description: 'Item 2 description' },
  { id: 3, name: 'Item 3', description: 'Item 3 description' }
])

const getItems = computed(() => items.value)

const removeItem = (item: Item, quantity: number) => {
  const index = items.value.findIndex((i) => i.id === item.id)
  if (index !== -1) {
    items.value.splice(index, 1)
  }
}

export function useInventoryStore() {
  return {
    getItems,
    removeItem
  }
}
