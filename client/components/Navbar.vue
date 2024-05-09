<template>
  <div class="nav_container">
    <div class="nav_button-wrapper">
      <NuxtLink to="/register" class="nav_button">Register Page</NuxtLink>
      <NuxtLink to="/admin" class="nav_button">Admin Page</NuxtLink>
    </div>
  </div>
</template>

<style>
.nav_container {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.nav_button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 10rem;
}
.nav_button {
  width: 8rem;
  height: 2rem;
  color: black;
}
</style>
