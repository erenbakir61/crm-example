import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => {
    return {
      usersFetchUrl: "http://localhost:3000/users/",
      successModalIsOpen: false,
      editPanelModalIsOpen: false,
      allUsers: [],
      userSchema: {
        fullname: "",
        mail: "",
        gender: "",
        age: "",
        job: "",
      },
      editUserSchema: {
        fullname: "",
        mail: "",
        gender: "",
        age: "",
        job: "",
      },
    };
  },
  actions: {
    editModalOpener(user) {
      if (this.editPanelModalIsOpen == false) {
        this.userSchema = { ...user };
        this.editUserSchema = { ...user };
        this.editPanelModalIsOpen = true;
      } else {
        this.editPanelModalIsOpen = false;
      }
    },
    async getUsersData() {
      await fetch(this.usersFetchUrl)
        .then((response) => response.json())
        .then((json) => (this.allUsers = json.message));
    },
    async registerUser() {
      if (
        this.userSchema.fullname == "" ||
        this.userSchema.mail == "" ||
        this.userSchema.gender == "" ||
        this.userSchema.age == "" ||
        this.userSchema.job == ""
      ) {
        console.log("austin we have a problem");
      } else {
        await fetch(this.usersFetchUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.userSchema),
        }).then((response) => response.json());
        this.successModalIsOpen = true;
      }
    },
    async deleteUser(userID) {
      await fetch(this.usersFetchUrl + userID, { method: "DELETE" }).then(
        () => {
          const indexElement = this.allUsers.findIndex((i) => i._id === userID);
          this.allUsers.splice(indexElement, 1);
        }
      );
    },
    async editUser(newUser) {
      await fetch(this.usersFetchUrl + newUser._id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then(() => {
          this.editModalOpener();
          const userIndex = this.allUsers.findIndex(
            (user) => user._id == newUser._id
          );
          this.allUsers[userIndex] = newUser;
        });
    },
  },
});
