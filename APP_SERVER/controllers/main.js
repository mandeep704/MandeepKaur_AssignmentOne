/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'My  Book Store' });
};

module.exports = {
  index
};