<template>
  <div class="edit_panel_modal">
    <div class="modal_content">
      <button
        v-on:click="usersStore.editModalOpener()"
        class="btn close_button"
        style="margin-left: 1rem"
      >
        <img src="@/assets/images/close.svg" alt="Close Modal" />
      </button>
      <div class="register_form">
        <div class="header">
          <h1>Üye Bilgilerini Güncelle</h1>
        </div>
        <div class="form-group">
          <label for="name" class="form-label">İsim Soyisim:</label>
          <input
            type="text"
            v-model="usersStore.editUserSchema.fullname"
            id="name"
            class="form-input"
            placeholder="İsminizi ve soyisminizi girin"
            required
          />
        </div>
        <div class="form-group">
          <label for="email" class="form-label">E-posta Adresi:</label>
          <input
            type="email"
            v-model="usersStore.editUserSchema.mail"
            id="email"
            class="form-input"
            placeholder="Örn. ornek@example.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="age" class="form-label">Yaşınız (18+):</label>
          <input
            type="number"
            v-model="usersStore.editUserSchema.age"
            id="age"
            class="form-input"
            placeholder="Yaşınızı girin"
            required
          />
        </div>
        <div class="form-group">
          <label for="occupation" class="form-label">Meslek:</label>
          <input
            type="text"
            v-model="usersStore.editUserSchema.job"
            id="occupation"
            class="form-input"
            placeholder="Mesleğinizi girin"
            required
          />
        </div>
        <div class="form-group">
          <label for="gender" class="form-label">Cinsiyet:</label>
          <select
            v-model="usersStore.editUserSchema.gender"
            id="gender"
            class="form-input"
            required
          >
            <option value="">Seçiniz</option>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
            <option value="other">Diğer/Tercih Etmiyorum</option>
          </select>
        </div>
        <button
          class="form-button"
          v-on:click="usersStore.editUser(usersStore.editUserSchema)"
        >
          Gönder
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUsersStore } from "~/stores/users";

const usersStore = useUsersStore();
</script>

<style scoped>
.edit_panel_modal {
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit_panel_modal .close_button {
  background-color: transparent;
  border: 0px solid transparent;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}
.edit_panel_modal .close_button img {
  width: 3rem;
}
.register_form {
  padding: 3rem 4rem;
  background-color: #fff;
  border-radius: 10px;
}
.modal_content {
  position: relative;
}
.register_form .header {
  margin: 2rem 0;
}
.form-group {
  margin-bottom: 20px;
}
.form-label {
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 5px;
}
.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}
.form-input:focus {
  border-color: #3498db;
  outline: none;
}
.form-button {
  width: 100%;
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.form-button:hover {
  background-color: #2980b9;
}
</style>
