1. List of City
2. Relation between city and Rest
3. Meal Type
4. MealType + Restaurant + cuisine + cost

## Table - 4

Restaurant
City
Cuisine
MealType

Restaurants

Rest ID | restName | Cost | cityId | MealId | CuisineID

Collection - 2
Restaurant
City

> > City
> > [

    {
        _id: 1,
        name:"Delhi"
    },
    {
        _id: 2,
        name:"Bangalore"
    }

]

> > Restaurant
> > [

    {
        "_id":32434,
         "rest_id":1,
         "rest_name":"Punjabi Grills",
         "city_id": 1,
         "cost":500,
         "rating_txt":"Very Good",
         "rating":4.5,
         "Cuisine":[
            {
                "cuisineId":1,
                "cuisineName":"North Indian"
            },
             {
                "cuisineId":2,
                "cuisineName":"South Indian"
            },
             {
                "cuisineId":3,
                "cuisineName":"Chinese"
            }
         ],
         "mealTypes":[
             {
                "mealId":1,
                "mealName":"Breakfast",
                "menu":[
                    {
                        "type":"Veg",
                        "items":["Panner", "Dal"]
                    }
                ]
            },
            {
                "mealId":2,
                "mealName":"Lunch",
                "menu":[
                    {
                        "type":"Non-Veg",
                        "items":["Chicken", "Fish"]
                    }
                ]
            },
         ]
    },
    {
        "_id":32435,
         "rest_id":2,
         "rest_name":"Empire restaurant",
         "city_id": 2,
         "cost":800,
         "rating_txt":"Good",
         "rating":4.1,
         "Cuisine":[
            {
                "cuisineId":1,
                "cuisineName":"North Indian"
            },
             {
                "cuisineId":2,
                "cuisineName":"South Indian"
            },
             {
                "cuisineId":3,
                "cuisineName":"Chinese"
            },
            {
                "cuisineId":4,
                "cuisineName":"Tibetan"
            }
         ],
         "mealTypes":[
              {
                "mealId":2,
                "mealName":"Lunch",
                "menu":[
                    {
                        "type":"Veg",
                        "items":["Veg briyani", "dal makhni"]
                    }
                ]
            },
            {
                "mealId":3,
                "mealName":"Dinner",
                "menu":[
                    {
                        "type":"Non-Veg",
                        "items":["chicken Briyani", "Curry]
                    }
                ]
            },
         ]
    }

]

db.rest.find().pretty()

db.location.find().pretty()

db.rest.find({state_id: 2,"mealTypes.mealtype_id": 1}, {restaurant_name:1, mealTypes: 1, \_id:0}).pretty()

db.rest.insert([
{
"restaurant_id": 1,
"restaurant_name": "Domino's Pizza",
"location_id": 1,
"state_id": 5,
"address": "Ashok Vihar Phase 3, New Delhi",
"restaurant_thumb": "https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg",
"average_rating": 4.2,
"rating_text": "Very Good",
"cost": 666,
"contact_number": 9453524651,
"mealTypes": [
{
"mealtype_id": 1,
"mealtype_name": "Breakfast"
},
{
"mealtype_id": 2,
"mealtype_name": "Lunch"
}
],
"cuisines": [
{
"cuisine_id": 1,
"cuisine_name": "North Indian"
},
{
"cuisine_id": 4,
"cuisine_name": "Fast Food"
}
],
"image_gallery": [
"https://b.zmtcdn.com/data/pictures/chains/3/143/fbc2c4c9e55a3f011c493dda79c399f5.jpg",
"https://b.zmtcdn.com/data/pictures/chains/3/143/1adb116d088669540c89150836d668f9.jpg",
"https://b.zmtcdn.com/data/pictures/chains/3/143/2781ab2c532b711ecd401571cdd87eb9.jpg",
"https://b.zmtcdn.com/data/pictures/chains/3/143/c751805b5927046d340926f870a95f5e.jpg"
]
},
])

//Add a series for _id

_id
12 bytes
5bytes => Series
4bytes => timestamp
3bytes => random number

db.counters.insert({
"_id":"cityId",
"sequence_value":0
})

function generateSeries(sequenceName){
var sequenceDocument = db.counters.findAndModify({
query: {_id: sequenceName},
update: {$inc: {sequence_value:1}},
new: true
})
return sequenceDocument.sequence_value
}

db.city.insert({
"_id":generateSeries('cityId'),
"name":"Amsterdam",
"country":"Netherland",
})

db.city.insert({
"_id":generateSeries('cityId'),
"name":"Helsinki",
"country":"Finland",
})

## Embedded

> > one to one

{
_id: ObjectId('46387'),
name:"jack",
job:"Developer",
address:{
street: "876 test street",
city:"Newyork",
pobox:77557
}
}

> > one to many
> > db.users.insert(

    [

{

    name:"jack",
    job:"Developer",
    address:[
        {
        street: "876 test street",
        city:"Newyork",
        pobox:77557,
        type:"permanent"
    },
    {
        street: "876 test street",
        city:"London",
        pobox:77556,
        type:"permanent"
    }
    ]

}
]
)

db.orders
.find({ instock: { $elemMatch: { qty: { $gt: 10, $lte: 40 } } } })
.pretty();

db.rest.find(
{$or: [{"mealTypes.mealtype_id":5},{"mealTypes.mealtype_id":4}]},
{restaurant_name:1,mealTypes:1, \_id:0 }
).pretty()

db.rest.find(
{$and: [{"mealTypes.mealtype_id":5},{"mealTypes.mealtype_id":4}]},
{restaurant_name:1,mealTypes:1, \_id:0 }
).pretty()

## Remove/Delete

## delete records

db.users.deleteOne({\_id: ObjectId("6456883f23979f947f57ca02")})

## delete collection

db.users.drop()

delete database

---

//use dbName
db.dropDatabase()
