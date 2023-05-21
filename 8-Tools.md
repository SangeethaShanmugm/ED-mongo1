mongoexport --db products --collection events --type=json --fields _id,name,description,price,productImage,unitsAvailable --out C:\Program Files\MongoDB\Server\5.0\bin\events.json

mongoexport --db products --collection events --out C:\Program Files\MongoDB\Server\5.0\bin\events.json

mongoexport --db products --collection events --out A:\MongoDB\data\events.json

mongoimport --db testdb --collection test --file test.json


mongoexport --db products --collection events --type=json --fields _id,name,description,price,productImage,unitsAvailable --out A:\MongoDB\data\events.json
