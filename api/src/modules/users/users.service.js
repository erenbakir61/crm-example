const express = require("express");
const Users = require("../../../db/schemas/users.schema");

const findAll = async () => {
  let data;
  try {
    data = await Users.find();
    if (data.length === 0) {
      return { status: "failed", data: null, message: "Kayit bulunamadi" };
    } else {
      return { status: "ok", message: data };
    }
  } catch (err) {
    return { status: "failed", message: err };
  }
};

const findById = async (id) => {
  let user;
  try {
    user = await Users.findById(id);
    if (user.length == 0) {
      return { status: "failed", message: "Kayit bulunamadi" };
    } else {
      return { status: "ok", message: user };
    }
  } catch (err) {
    return { status: "failed", message: "Kayit bulunamadi" };
  }
};

const createUser = async (req) => {
  const { fullname, mail, gender, age, job } = req.body;
  let user = new Users({ fullname, mail, gender, age, job });
  try {
    await user.save();
    return {
      status: "success",
      message: "User Created Successfully",
      user,
    };
  } catch (err) {
    return { status: "failed", message: err };
  }
};

const deleteUser = async (id) => {
  try {
    let user = await Users.findByIdAndDelete(id);
    if (user != null) {
      return {
        status: "successfull",
        message: "Kayit basariyla silindi",
        user,
      };
    } else {
      return { status: "failed", message: "Kayit bulunamadi" };
    }
  } catch (err) {
    return { status: "failed", message: err };
  }
};

const updateUser = async (id, newUserData) => {
  try {
    const { fullname, mail, gender, age, job } = newUserData;
    const oldData = (await findById(id)).message;
    await Users.findByIdAndUpdate(id, {
      $set: { fullname, mail, gender, age, job },
    });
    return {
      status: "success",
      message: "User Updated Successfully",
      newUserData,
      oldData,
    };
  } catch (err) {
    return { status: "failed", message: err };
  }
};

module.exports = {
  findAll,
  findById,
  createUser,
  deleteUser,
  updateUser,
};
