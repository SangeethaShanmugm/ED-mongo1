Index -> used when your having more amount of data
\_id -> default index
quick search
index make your app query faster

## Types

default index - \_id
hashed index - hashed set for sharding
Text index - search based on text
Geospatial index - location, position
single Field - single index, sort operation  
compound Index - muitple fields
Multi-Key index - array
sparse Index - make sure that the key over the index is unique

db.emp.insert({emp_id:1001,name:"rahul",lastname:"sharma",email:"rahulh@google.com",phone:9874561237,Job_id:'E3',sal:80000,manager_id:'102'})

db.emp.insert({emp_id:1002,name:"ankit",lastname:"bajpai",email:"ankit@google.com",phone:98526173364,Job_id:'E4',sal:70000,manager_id:'103'})

db.emp.insert({emp_id:1003,name:"swati",lastname:"singla",email:"ankit@google.com",phone:974526173364,Job_id:'E4',sal:60000,manager_id:'104',arr:['a','b','c','d']})

db.emp.insert({emp_id:1004,name:"Yash",lastname:"Batra",email:"yash@google.com",phone:9874561242,Job_id:'E1',sal:72000,manager_id:'102'})

db.emp.insert({emp_id:1005,name:"Nikita",lastname:"Patel",email:"nikki@google.com",phone: 9874561242,Job_id:'E4',sal:88000,manager_id:'103'})

db.emp.getIndexes()

db.emp.createIndex({"Job_id":1})

db.emp.dropIndex({"Job_id":1})

db.emp.createIndex({"sal":1})

//Text Index
db.article.insert(
[
{"text":"ind11ia with cricket","tags":["ind12ia","cricket"]},
{"text":"economy of india","tags":["economy","india"]},  
{"text":"nature and beatuy of himalays","tags":["himalays","nature"]},
{"text":"beauty of india","tags":["beauty","ind"]}  
]
)

db.article.createIndex({text:"text"})

db.article.getIndexes()

db.article.find({$text:{$search:"india"}}) => exact match

db.article.find({tags:{$regex:"ind"}}).pretty() => based on the letter char we give in , if it exist in the record, start, middle, end

db.article.find({tags:{$regex:"h"}}).pretty()

db.emp.reIndex({"phone":1})

//TTL -> time to live

db.emp.createIndex({"phone":1},{expireAfterSeconds:3600})

db.emp.createIndex({"phone":1},{background: true})

//Geospatial Index

 

db.places.insert({"name":"mobile","type":"elec","location":[40.232,-74.343]})

db.places.insert({"name":"tv","type":"elec","location":[50.232,-84.343]}) 

db.places.insert({"name":"cloths","type":"cloths","location":[60.232,-94.343]}) 
 
 //html => navigator.geolocation.getCurrentPosition()
 

 db.places.createIndex({location:"2d", type: 1})

 db.places.find({location:{$near:[40, -34]}})


 db.shops.createIndex({location:"2dsphere"})

 db.shops.find({location:{$near:{$geometry:{type:"Point", coordinates:[100, 56]}, $maxDistance: 9000000}}}).pretty()