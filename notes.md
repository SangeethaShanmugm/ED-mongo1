## Commands

## CRUD Queries

Add docu =>
insertOne - 1 document
insertMany - many document

## Read

find
findOne

## Update

updateOne
updateMany
replaceOne

movies =[
{
name:"Ten",
actor:["Hero1","Hero2]
},
{
name:"Tenser",
actor:["Heroine1","Heroine2]
}
]

replaceOne({name:"Ten"})

## delete

deleteOne
deleteMany

why mongodb?
document based storage
index on any attribute
Replication and availability
Auto sharding
Rich Queries
Fast in reading data and updating data

## Application

Big data
Content Management and delivery
Mobile and social infrastructure
User data Management
Data hub

## Embedded document

have all related data in single doc

## eg

{
\_id: ,
emp_id:"4792475493284",
personal_details:{
first_name:"Jack",
last_name:"Joe",
date_of_birth:"2018-06-12"
},
contact:{
email:"jack@gmail.com",
phone:7594376365,
}
}

## creating a schema

1. design your schema to user requirement
2. combine objects into one document - if you use them together
3. do aggregation in schema

## CRUD

C - create - insertOne/insertMany
R - Read - find/findOne
U - Update - updateOne/updateMany
D - Delete - deleteOne/deleteMany

## mongodb

Database best used for unstructured data - schema

sql

RollNo | Hindi | English | Computer |
1 | 80 | | 90 |
2 | | 70 |
3 | 70 | |

SQL MONGODB
Database Database
Table Collection
Row Document
Select find
Insert Insert
Update Update
Delete Delete/Remove
Joins LookUps
Mutiple-tables nested Collection
Avoid Repeation No issues with Repeation

> > Server
> > start the mongodb
> > should always run if using database

> > Shell
> > Command line tool
> > Use to verify the query

default port - mongodb => 27017

Window

https://www.mongodb.com/try/download/community

# steps to run Mongodb Server

> > open cmd prompt
> > Go inside the bin folder
> > C:/program File/MOngoDb/Server/5.0.4/bin
> > type mongod => kickstart the server
> > Do not close this cmd

# steps to run Mongodb Client

> > open cmd prompt
> > Go inside the bin folder
> > C:/program File/MOngoDb/Server/5.0.4/bin
> > type mongo - to go to shell

# mac/linux

> > open terminal
> > mongod

## Cloud

https://cloud.mongodb.com/v2/631980b137fc734b0791104d#/clusters

## Network Access

> > Add IP address

## DataBase Access

> > Add New Database User

mongodb+srv://sangeetha:rdKmLvXuBGIGYNFn@cluster0.09bk9ld.mongodb.net/?retryWrites=true&w=majority


differen between mongodb and Cassandra

MONGODB                                                           CASSANDRA
1. document database system                                  |    distributed database system 
2. C++                                                       |    Java
3. store data in BSON and retrieve in JSON                   |    tabular format
4. deal with JSON like document , access and faster          |    large amount of data community server
5. administration is easy, case of failure          | high availability with no single point of failure      



Couch DB
=> docum orients, JSON format
=> couchDb supports master replication 
=> availability
=> consistancy in performance

Disadv
-------
=> single node db
=> limited support 
=> indexing  -> slow performance for complex queries
=> limited trans
