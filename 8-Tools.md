mongoexport --db products --collection events --type=json --fields \_id,name,description,price,productImage,unitsAvailable --out C:\Program Files\MongoDB\Server\5.0\bin\events.json

mongoexport --db products --collection events --out C:\Program Files\MongoDB\Server\5.0\bin\events.json

mongoexport --db products --collection events --out A:\MongoDB\data\events.json

mongoimport --db testdb --collection test --file test.json

mongoexport --db products --collection events --type=json --fields \_id,name,description,price,productImage,unitsAvailable --out A:\MongoDB\data\events.json

---

mongoexport --db movies --collection movieList --type=json --out A:\MongoDB\data\movieList.json

mongoexport --db movies --collection movieList --type=csv --fields \_id,name,rating --out A:\MongoDB\data\movieList.csv

mongoimport --db testdb --collection movieList --file A:\MongoDB\data\movieList.json

mongodump -o A:\MongoDB\data

//dump particular db

mongodump -o pathtodump --db dbName -c collectionName

mongodump -o A:\MongoDB\data --db testdb -c movieList

//restore - to restore movies

mongorestore A:\MongoDB\data

=> dump db's
=> drop dbName
=> use restore

bsondump --outFile=A:\MongoDB\data\movies\movieList.json A:\MongoDB\data\movies\movieList.bson

bsondump --outFile=movieList.json movieList.bson

mongostat => monitoring purpose

mongotop => track time for every sec for read write operations
