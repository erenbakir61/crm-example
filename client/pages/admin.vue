<template>
  <main>
    <Navbar />
    <EditUserModal v-if="usersStore.editPanelModalIsOpen" />
    <div class="container">
      <div class="header">
        <div class="logo">
          <img src="@/public/logo.png" alt="Logo" />
        </div>
        <div class="section-title">Kullanıcı Bilgileri</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Email</th>
            <th>Cinsiyet</th>
            <th>Yaş</th>
            <th>Meslek</th>
            <th>Kayıt Zamanı</th>
            <th>Manage User</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in usersStore.allUsers" :key="user._id">
            <td>{{ user.fullname }}</td>
            <td>{{ user.mail }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.job }}</td>
            <td>{{ user.creatingDate.split("T")[0] }}</td>
            <td>
              <button
                v-on:click="usersStore.editModalOpener(user)"
                class="btn delete_button"
                style="margin-left: 1rem"
              >
                <img src="@/assets/images/edit.svg" alt="Edit User" />
              </button>

              <button
                v-on:click="usersStore.deleteUser(user._id)"
                class="btn delete_button"
                style="margin-left: 1rem"
              >
                <img src="@/assets/images/trash.svg" alt="Delete User" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { useUsersStore } from "~/stores/users";

const usersStore = useUsersStore();

fetch(usersStore.usersFetchUrl)
  .then((response) => response.json())
  .then((json) => (usersStore.allUsers = json.message));
</script>

<style scoped>
.edit_modal {
  height: 100%;
}
/* Global styles */
main {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  position: relative;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
/* Header styles */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.logo img {
  height: 10rem;
}
.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  align-self: flex-start;
}
/* Table styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #333;
  color: #fff;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
.btn {
  background-color: transparent;
  border: 0px solid transparent;
  cursor: pointer;
}
</style>
