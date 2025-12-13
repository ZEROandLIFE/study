const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }, // 重复
  { id: 3, name: "Charlie" },
];
//map
const uniqueobjmap = Array.from(new Map(users.map((user) => [user.id, user])).values())

console.log(uniqueobjmap)
const uniqueById = users.reduce((acc, current) => {
  if (!acc.some((item) => item.id === current.id)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(uniqueById);

console.log(Array.from(new Map(users.map((user) => [user.id, user])).values()));
