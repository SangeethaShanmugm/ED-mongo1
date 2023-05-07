## update

db.collection.update(
<condition>
<what you want to update>
)

db.hotels.update(
{\_id:"2"},
{
$set: {cost: "4500"}
}
)

db.hotels.findOne({\_id:"2"})

db.hotels.update(
{\_id:"2"},
{
$set: {"type.1.name": "Premium Rooms"}
}
)

db.hotels.update(
{"type.name":"Premiere Rooms"},
{
$set: {
            "type.$.name": "Premium Rooms"
}
},
{
multi: true
}
)

db.hotels.update(
{
\_id: "1"
},
{
$unset:{
"type.1":""
}
}
)

var a = [6,8,3,9]
a.pop()
9
a.pop()
3
a.push("7")
[6,8,7]

    db.hotels.update(
        {_id:"1"},
        {
            $pop:{type: 1}
        }
    )

     db.hotels.update(
        {_id:"1"},
        {
            $push:{
                "type": {
                    "roomtype" : "4",
    		        "name" : "Semi Deluxe Room"
                }
                }
        }
    )

    db.hotels.update(
        {_id:"1"},
        {
            $pop:{type: 1}
        }
    )


     db.hotels.update(
        {_id:"1"},
        {
            $unset:{
                locality: ""
                }
        }
    )

     db.hotels.update(
        {_id:"1"},
        {
            $set:{
                locality: "Aerocity, New Delhi"
                }
        }
    )



     db.hotels.update(
        {_id:"20"},
        {
            $set:{
                "name":"Uday Villas",
                "locality": "Udaipur",
                "cost" : "10000000",
                }
        },
        {
            "upsert":true
        }
    )


   db.hotels.insert(
        {
            _id:"21",
            "name":"Taj Villas",
            "Location":"Mumbai",
            "Cost":"50000",
            "date":new Date(Date.now())           
        },
       
    )




db.hotels.deleteOne({"cost" : {$gt: 5000}})

db.hotels.find({"cost" : {$gt: 5000}})


db.hotels.deleteMany({"cost" : {$gt: 5000}})

