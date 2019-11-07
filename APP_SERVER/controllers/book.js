var bookArray = [
    {title:"The Jungle Book", author:"Rudyard Kipling"},
    {title:"The English Teacher", author:"R.K Narayan"},
    {title:"Imaginary Friend", author:"Chbosky Stephen"}
];

const book =function(req,res)
{
    res.render('list-display', {books: bookArray});
};
module.exports = {
    
    book
};