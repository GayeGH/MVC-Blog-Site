//If I need a date to show up on the page place it here.

module.exports = {
    homePage: async (req,res) => {
       res.render('layouts/main');
      //res.send('Hello world')
    }
}