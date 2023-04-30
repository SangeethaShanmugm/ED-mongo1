// show dbs -> list all dbs
// use dbName -> create and switch to dbName
// db -> current db

db.books.insertMany([
  {
    id: "001",
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8,
    trailer: "https://www.youtube.com/embed/PU2r9tDwZ1M",
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    id: "002",
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 7.8,
    trailer: "https://www.youtube.com/embed/gqviJoSkf6U",
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    id: "003",
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/san61qTwWsU",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
  },
  {
    id: "004",
    name: "Discover Your Destiny",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    rating: 6,
    trailer: "https://www.youtube.com/embed/o8wUR2JAeUw",
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
  },
  {
    id: "005",
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    trailer: "https://www.youtube.com/embed/Kxvp3eOYphY",
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    id: "006",
    name: "The power is within you",
    poster:
      "https://play-lh.googleusercontent.com/1aghoDaz52K3bbZA3EJGHvEpgaru4uMC3Ud2ik_EAW7SjNLwK7nXxOp_Uad-3L6Ovvg4C2-_d1kqVg=w480-h690-rw",
    rating: 9,
    summary:
      'Louise expands on her philosophy of "loving the self" and shows you how to overcome emotional barriers through learning to listen to your inner voice, loving the child within, letting your true feelings out, and much more!',
    trailer: "https://www.youtube.com/embed/4UzY6ksC6gU",
  },
  {
    name: "elon musk: tesla, spacex, and the quest for a fantastic future",
    poster:
      "https://rukminim1.flixcart.com/image/832/832/kplisnk0/book/l/l/t/elon-musk-original-imag3shevuu2d9qq.jpeg?q=70",
    rating: 7,
    summary: "elon musk: tesla, spacex, and the quest for a fantastic future",
    trailer: "elon musk: tesla, spacex, and the quest for a fantastic future",
    id: "007",
  },
  {
    name: "Harry potter",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/91bsMwU7IzL._RI_.jpg",
    rating: 9.8,
    summary:
      "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    trailer: "https://www.youtube.com/embed/fFGS4zZWGoA",
    id: "008",
  },
]);

db.books.find({}).pretty();

//rating > 8
db.books.find({ rating: { $gt: 8 } }).pretty();

//rating < 8
db.books.find({ rating: { $lt: 8 } }).pretty();

//rating >=8.9

db.books.find({ rating: { $gte: 8.9 } }).pretty();

db.books.find({}).count();

//projections

//inclusion - 1

db.books.find({}, { name: 1, rating: 1 }).pretty();

//exclusion - 0

db.books.find({}, { name: 0, rating: 0 }).pretty();

//inclusion + exclusion
db.books.find({}, { _id: 0, name: 1, rating: 1 }).pretty();

//include poster, summary and exclude trailer and _id

db.books.find({}, { poster: 1, summary: 1, _id: 0, name: 0 }).pretty();

//cannot include + exclude ❌

// exclude name, trailer and poster, include rating and summary

db.books.find({}, { name: 0, trailer: 0, poster: 0, _id: 0 }).pretty();

//sorting

//asc -> 1

db.books.find({}).sort({ rating: 1 }).pretty();

//desc -> -1

db.books.find({}).sort({ rating: -1 }).pretty();

//limit => first 2 highest rating books

db.books.find({}).sort({ rating: -1 }).limit(2).pretty();

//skip
db.books.find({}).sort({ rating: -1 }).limit(2).skip(2).pretty();

//desc + limit = 4 and skip =  2

db.books.find({}).sort({ rating: -1 }).limit(4).skip(2).pretty();

//exclude - _id, include - name, rating , sort -asc

db.books.find({}, { _id: 0, name: 1, rating: 1 }).sort({ rating: 1 }).pretty();

//sort by name

db.books.find({}, { _id: 0, name: 1, rating: 1 }).sort({ name: 1 }).pretty();

//rating > 8, exclude - _id, include - name, rating, sort- rating - desc, limit - 5

db.books
  .find({ rating: { $gt: 8 } }, { _id: 0, name: 1, rating: 1 })
  .sort({ rating: -1 })
  .limit(5)
  .pretty();

db.books
  .find({ rating: { $gt: 8 } }, { _id: 0, name: 1, rating: 1 })
  .sort({ rating: -1 })
  .skip(3)
  .pretty();

db.books.findOne({ rating: 8 });

db.books
  .find({ rating: { $gt: 8 } }, { _id: 0, name: 1, rating: 1 })
  .sort({ name: 1, rating: -1 })
  .pretty();

//rating gt & lt

db.books.find({ rating: { $gt: 10, $lte: 3 } }).pretty();

//Query used in Array
db.orders.insertMany([
  {
    _id: 0,
    item: "Steel Beam",
    instock: [
      { category: "A", qty: 10 },
      { category: "B", qty: 5 },
    ],
  },
  { _id: 1, item: "Steel Beam", instock: [{ category: "B", qty: 15 }] },
  {
    _id: 2,
    item: "Steel Beam",
    instock: [
      { category: "A", qty: 50 },
      { category: "B", qty: 15 },
    ],
  },
  {
    _id: 3,
    item: "Iron Rod",
    instock: [
      { category: "B", qty: 20 },
      { category: "C", qty: 5 },
    ],
  },
  {
    _id: 4,
    item: "Iron Rod",
    instock: [
      { category: "A", qty: 20 },
      { category: "B", qty: 60 },
    ],
  },
  {
    _id: 5,
    item: "Iron Rod",
    instock: [
      { category: "C", qty: 30 },
      { category: "B", qty: 5 },
    ],
  },
]);

db.orders.find().pretty();

db.orders.findOne({ item: "Steel Beam" });

//category A

db.orders.find({ "instock.qty": { $gte: 50 } }).pretty();

//$elemMatch - multiple conditions - array

db.orders
  .find({ instock: { $elemMatch: { qty: 10, category: "A" } } })
  .pretty();

db.orders
  .find({ instock: { $elemMatch: { qty: { $gt: 10, $lte: 40 } } } })
  .pretty();

db.orders.find({ "instock.qty": { $gt: 10, $lte: 40 } }).pretty();

db.orders.find({ "instock.qty": 10, "instock.category": "B" }).pretty();

db.orders.find({ "instock.category": { $in: ["A", "B"] } }).pretty();

db.orders.find({ $and: [{ "instock.qty": { $ne: 5, $exists: true } }] });

db.orders.find({
  $and: [
    { $or: [{ "instock.qty": { $lt: 20 } }, { "instock.qty": { $gt: 80 } }] },
   { "instock.category": "A"}
  ],
});




db.orders.find().pretty()


db.orders.updateOne({item: "Iron Rod"},{$set:{item:"Steel Rod"}})

db.orders.updateOne({item: "Steel Rod"},{$set:{price:"20"}})