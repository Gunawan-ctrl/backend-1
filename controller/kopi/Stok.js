const userModel = require("../../model/kopi/Stok");
const bcrypt = require("bcrypt");
const { requestResponse } = require("../../config");
const objectId = require("mongoose").Types.ObjectId;

exports.tambah = (data) =>
  new Promise((resolve, reject) => {
    userModel
      .create(data)
      .then(() => {
        console.log(requestResponse.berhasil("Berhasil Input Stok"));
        resolve(requestResponse.berhasil("Berhasil Input Stok"));
      })
      .catch(() => {
        reject(requestResponse.kesalahan);
        console.log(requestResponse.kesalahan);
      });
  });

exports.getAllUser = () =>
  new Promise((resolve, reject) => {
    userModel
      .find({})
      .then((user) => {
        console.log(requestResponse.berhasil("berhasil get Stok"));
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => reject(requestResponse.kesalahan));
  });

exports.getById = (id) =>
  new Promise((resolve, reject) => {
    userModel
      .find({
        _id: objectId(id),
      })
      .then((user) => {
        console.log(requestResponse.berhasil("berhasil get Stok"));
        resolve(requestResponse.suksesWithData(user));
      })
      .catch(() => reject(requestResponse.kesalahan));
  });

exports.delete = (id) =>
  new Promise((resolve, reject) => {
    userModel
      .findOne({
        _id: objectId(id),
      })
      .then((data) => {
        userModel
          .deleteOne({
            _id: objectId(id),
          })
          .then(() => {
            console.log(requestResponse.berhasil("berhasil delete Stok"));
            resolve(requestResponse.berhasil("Berhasil Delete Stok"));
          })
          .catch(() => reject(requestResponse.serverError));
      });
  });

exports.edit = (data, id) =>
  new Promise(async (resolve, reject) => {
    console.log(data);
    userModel
      .updateOne(
        {
          _id: objectId(id),
        },
        data
      )
      .then(() => {
        console.log(requestResponse.berhasil("Berhasil Edit Stok"));
        resolve(requestResponse.berhasil("Berhasil Edit Stok"));
      })
      .catch(() => reject(requestResponse.serverError));
  });
