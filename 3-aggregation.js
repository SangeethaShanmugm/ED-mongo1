db.orderData.insert([
  { _id: 1, item: "almonds", price: 12, quantity: 2 },
  { _id: 2, item: "pecans", price: 20, quantity: 1 },
]);

db.inventory.insert([
  { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
  { _id: 2, sku: "bread", description: "product 2", instock: 80 },
  { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
  { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
  { _id: 5, sku: null, description: "Incomplete" },
  { _id: 6 },
]);

db.orderData.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "combine_data",
    },
  },
  {
    $project: { _id: 1, item: 1, stock: "$combine_data.instock" },
  },
]);



db.classes.insert( [ 
  { _id: 1, title: "Reading is ...", enrollmentlist: [ "giraffe2", "pandabear", "artie" ], days: ["M", "W", "F"] }, 
  { _id: 2, title: "But Writing ...", enrollmentlist: [ "giraffe1", "artie" ], days: ["T", "F"] } ])

db.members.insert( [
   { _id: 1, name: "artie", joined: new Date("2016-05-01"), status: "A" }, 
   { _id: 2, name: "giraffe", joined: new Date("2017-05-01"), status: "D" }, 
   { _id: 3, name: "giraffe1", joined: new Date("2017-10-01"), status: "A" }, 
   { _id: 4, name: "panda", joined: new Date("2018-10-11"), status: "A" }, 
   { _id: 5, name: "pandabear", joined: new Date("2018-12-01"), status: "A" }, 
   { _id: 6, name: "giraffe2", joined: new Date("2018-12-01"), status: "D" } 
])


db.classes.aggregate([
  {
    $lookup:{
      from: "members",
      localField:"enrollmentlist",
      foreignField:"name",
      as: "student_info"
    }
  }
])


// $match
// >> It is used to filter document(condition as like in find)
// $project
// >> It will select some specific fields from a collection
// $group
// >> It is used to group documents on based on some values
// $sort
// >> It is used to sort data
// $skip
// >>Skip number of documents
// $limit
// >> to retrieve numb of documents
// $unwind
// >> deconstruct an Array, like flat the Array
// $out
// >> is to write the document output

// Accumulators
// ----------------
sum;
count;
avg;
min;
max;
first;
last;

//find all student from secA

db.students.aggregate([
  {
    $match: { sec: "A" },
  },
  {
    $count: "Total number of students in sec A",
  },
]);

//{ "Total number of students in sec A" : 4 }

db.students.aggregate([
  {
    $group: {
      _id: "$sec",
      total_st: { $sum: 1 },
      max_age: { $max: "$age" },
    },
  },
]);

// { "_id" : "A", "total_st" : 4, "max_age" : 37 }
// { "_id" : "B", "total_st" : 3, "max_age" : 40 }

db.students.aggregate([
  {
    $match: { age: { $gt: 30 } },
  },
]);

// { "_id" : ObjectId("6457c028bfd1f57e327cc7af"), "name" : "Steave", "age" : 37, "id" : 2, "sec" : "A" }
// { "_id" : ObjectId("6457c028bfd1f57e327cc7b2"), "name" : "Nick", "age" : 40, "id" : 5, "sec" : "B", "subject" : [ "English" ] }

db.students.aggregate([
  {
    $sort: { age: 1 },
  },
]);

db.students.aggregate([
  {
    $match: { sec: "B" },
  },
  {
    $sort: { age: -1 },
  },
  {
    $limit: 1,
  },
]);

//{ "_id" : ObjectId("6457c028bfd1f57e327cc7b2"), "name" : "Nick", "age" : 40, "id" : 5, "sec" : "B", "subject" : [ "English" ] }

db.students.aggregate([
  {
    $unwind: "$subject",
  },
]);

db.employees.insertMany([
  {
    _id: 1,
    firstName: "John",
    lastName: "King",
    gender: "male",
    email: "john.king@abc.com",
    salary: 5000,
    department: {
      name: "HR",
    },
  },
  {
    _id: 2,
    firstName: "Sachin",
    lastName: "T",
    gender: "male",
    email: "sachin.t@abc.com",
    salary: 8000,
    department: {
      name: "Finance",
    },
  },
  {
    _id: 3,
    firstName: "James",
    lastName: "Bond",
    gender: "male",
    email: "jamesb@abc.com",
    salary: 7500,
    department: {
      name: "Marketing",
    },
  },
  {
    _id: 4,
    firstName: "Rosy",
    lastName: "Brown",
    gender: "female",
    email: "rosyb@abc.com",
    salary: 5000,
    department: {
      name: "HR",
    },
  },
  {
    _id: 5,
    firstName: "Kapil",
    lastName: "D",
    gender: "male",
    email: "kapil.d@abc.com",
    salary: 4500,
    department: {
      name: "Finance",
    },
  },
  {
    _id: 6,
    firstName: "Amitabh",
    lastName: "B",
    gender: "male",
    email: "amitabh.b@abc.com",
    salary: 7000,
    department: {
      name: "Marketing",
    },
  },
]);

db.employees.aggregate([
  {
    $match: {
      gender: "female",
    },
  },
]);

//{ "_id" : 4, "firstName" : "Rosy", "lastName" : "Brown", "gender" : "female", "email" : "rosyb@abc.com", "salary" : 5000, "department" : { "name" : "HR" } }

db.employees.aggregate([
  {
    $group: {
      _id: "$department.name",
    },
  },
]);

db.employees
  .aggregate([
    {
      $group: {
        _id: "$department.name",
        totalEmployees: { $sum: 1 },
      },
    },
  ])
  .pretty();

db.employees
  .aggregate([
    {
      $group: {
        _id: "$department.name",
        totalEmployees: { $sum: 1 },
        totalSalary: { $avg: "$salary" },
      },
    },
  ])
  .pretty();

// { "_id" : "HR", "totalEmployees" : 2, "totalSalary" : 5000 }
// { "_id" : "Marketing", "totalEmployees" : 2, "totalSalary" : 7250 }
// { "_id" : "Finance", "totalEmployees" : 2, "totalSalary" : 6250 }

db.employees
  .aggregate([
    {
      $match: {
        gender: "male",
      },
    },
    {
      $group: {
        _id: { deptName: "$department.name" },
        totalEmployees: { $sum: 1 },
        totalSalary: { $avg: "$salary" },
      },
    },
    {
      $sort: {
        "_id.deptName": -1,
      },
    },
  ])
  .pretty();

//select sum(quantity) from product where status="urgent"
//group by ProductName

db.products.insertMany([
  { _id: 0, productName: "Steel Beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel Beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel Beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 },
]);

//Stage 1

db.products
  .aggregate({
    $match: { status: "urgent" },
  })
  .pretty();

//Stage 2
//$match, $group, $sum

db.products.aggregate(
  {
    $match: { status: "urgent" },
  },
  {
    $group: {
      _id: "$productName",
      totalUrgentQuantity: { $sum: "$quantity" },
    },
  }
).pretty()
