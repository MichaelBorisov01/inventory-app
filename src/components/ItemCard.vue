<template>
  <div class="item-card">
    <img src="https://via.placeholder.com/150" alt="Item image" />
    <div class="item-info">
      <h2>Item name</h2>
      <p>Item description</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.item-info {
  margin-top: 20px;
  text-align: center;
}
</style>
