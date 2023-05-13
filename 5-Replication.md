## Scaling

> > Horizontal Scaling
> > Vertical Scaling

replication - repeating same data in machine

1 primary - 2 secondary

//Mac/Linux
mongod --dbpath /System/Volumes/Data/data.db

mkdir data/rs1
mkdir data/rs2
mkdir data/rs3

mongod --port 2001 --dbpath C:\data\rs1 --replSet --sangeetha --oplogSize 128

mongod --port 2002 --dbpath C:\data\rs2 --replSet --sangeetha --oplogSize 128

mongod --port 2003 --dbpath C:\data\rs3 --replSet --sangeetha --oplogSize 128

mongo --port 2001
mongo --port 2002
mongo --port 2003

//this is run over primary
rs.help
rs.help()
rs.status()
rs.initiate()
rs.add("127.0.0.1:2002")

rs.add({\_id:4, host:"SANGEETHA:27017", priority:1});
rs.add({\_id:4, host:"SANGEETHA:27017", priority:0, hidden: true});
rs.addArb("SANGEETHA:3001")
rs.remove() => remove any machine

rs.add({\_id:4, host:"localhost:27017", priority:1});

//Windows

mkdir data/rs1
mkdir data/rs2
mkdir data/rs3

//Run over secondary to allow replication
db.getMongo().setSlaveOk() | db.getMongo().setSecondaryOk()

mongod --port 2001 --dbpath C:\data\rs1 --replSet --sangeetha --oplogSize 128

mongod --port 2002 --dbpath C:\data\rs2 --replSet --sangeetha --oplogSize 128

mongod --port 2003 --dbpath C:\data\rs3 --replSet --sangeetha --oplogSize 128

mongo --port 2001
mongo --port 2002
mongo --port 2003

//this goes when you have ip problem
mongod --port 2001 --dbpath /data/rs1 --replSet --sangeetha --bind_ip 10.0
