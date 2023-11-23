const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  function registerUser(author){
  let output=[];
  return new Promise((resolve,reject)=>(
  for (var users in books) {
  let user_ =usser[use];
  if(book_.author===author){ output.push(book_);}}
  resolve(output);})}
  //Get book details based on author
  public_users.get('/user/:use',function(req,res){
  const author = req.params.user;
  getFromUser(user) .then(
  result = >res.send(JSON.stringify(result,null,4)));});

 // return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  function getBookList(){
  return new Promise((resolve,reject)=>{
  resolve(books); })}
  //Get the book list available in the shop
  public_users.get('/',function(req,res){
  getBookList().then(
  (bk)=>res.send(JSON.stringify(bk,null,4)), (error) =>
  res.send("denied"));});

  //return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  function getFromISBN(isbn){
  let book_=books[isbn];
  return new Promise((resolve,reject)=>{
  if(book_){ resolve(book_);}
  else{reject("Unable to find book");})}
  //Get book details based on ISBN
  public_user.get('/isbn/:isbn',function(req,res){
  const isbn=req.params.isbn;
  getFromISBN(isbn).then(
  (bk)=>res.send(JSON.stringify(bk,null,4)),
  (error)=> res.send(error) )});

  //return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  function getFromAuthor(author){
  let output=[];
  return new Promise((resolve,reject)=>(
  for (var isbn in books) {
  let book_ =books[isbn];
  if(book_.author===author){ output.push(book_);}}
  resolve(output);})}
  //Get book details based on author
  public_users.get('/author/:author',function(req,res){
  const author = req.params.author;
  getFromAuthor(author) .then(
  result = >res.send(JSON.stringify(result,null,4)));});

  //return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  function getFromTitle(title){
  let output=[];
  return new Promise((resolve,reject)=>{
  for (var isbn in books) {
  let book_ = books[isbn];
  if(book_.title===title){
  output.push(book_);
  }
  }
  resolve(output); })}
  //Get all books based on their titles
  public_user.get('/title/:title',function(req,res){
  const title=req.params.title;getFromTitle(title) .then(
  result=>res.send(JSON.stringify(result,null,4)) );});

  //return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here

  function getFromISBN(isbn){
let book_=books[isbn];
return new Promise((resolve,reject)=>{
if(book_){ resolve(book_);}
else{reject("Unable to find book");})}
//Get book details based on ISBN
public_user.get('/isbn/:isbn',function(req,res){
const isbn=req.params.isbn;
getFromISBN(isbn).then(
(bk)=>res.send(JSON.stringify(bk,null,4)),
(error)=> res.send(error) )});

  //return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
