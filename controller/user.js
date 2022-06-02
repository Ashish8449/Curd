import { v4 as uuid } from "uuid";
let users = [];
export const getUsers = (req, res) => {
  res.send(users);
};
export const createUser = (req, res) => {
  const user = req.body;
  console.log(user);
  users.push({ ...user, id: uuid() });
  res.send("User added Successfully");
};

export const getUser = (req, res) => {
  const user = users.filter((user) => user.id === req.params.id);
  if (user.length != 0) res.send(...user);
  else res.send("NO user found");
};
export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User deleted Successfully");
};
export const updateUser = (req, res) => {
  console.log(req.body);
  console.log(users);
  const user = users.find((user) => user.id == req.body.id);
  console.log(user);
  user.name = req.body.name;
  user.number = req.body.number;
  user.id = req.body.id;
  // console.log(user);
  res.send("User  Successfully updated");
};
