<template>
  <main>
    <Navbar />
    <div class="form-container">
      <div class="register_form" v-if="!usersStore.successModalIsOpen">
        <div class="header">
          <h1>Connectify Pro Kullanıcı Ekranı</h1>
        </div>
        <div class="form-group">
          <label for="name" class="form-label">İsim Soyisim:</label>
          <input
            type="text"
            v-model="usersStore.userSchema.fullname"
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
            v-model="usersStore.userSchema.mail"
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
            v-model="usersStore.userSchema.age"
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
            v-model="usersStore.userSchema.job"
            id="occupation"
            class="form-input"
            placeholder="Mesleğinizi girin"
            required
          />
        </div>
        <div class="form-group">
          <label for="gender" class="form-label">Cinsiyet:</label>
          <select
            v-model="usersStore.userSchema.gender"
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
        <button class="form-button" v-on:click="usersStore.registerUser()">
          Gönder
        </button>
      </div>
      <div v-if="usersStore.successModalIsOpen" class="success-message">
        <h1>Formu başarıyla gönderdiniz. Teşekkür ederiz!</h1>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useUsersStore } from "~/stores/users";

const usersStore = useUsersStore();
</script>

<style scoped>
/* Genel sayfa stilini ayarlayın */
main {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
body {
  margin: 0 !important;
  padding: 0 !important;
}

/* Form container */
.form-container {
  width: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #000000;
  margin-bottom: 10px;
}

/* Form group */
.form-group {
  margin-bottom: 20px;
}

/* Labels */
.form-label {
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

/* Inputs */
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

/* Button */
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

/* Success message */
.success-message {
  text-align: center;
  font-size: 20px;
  color: #27ae60;
  display: block;
  margin: 1.5rem 0;
}
</style>
