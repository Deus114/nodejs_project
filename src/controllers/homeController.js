const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('homepage.ejs');
}

const postCreateUser = (req, res) => {
    // let{name, email, city} = req.body;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Success');
        }
    );
};

module.exports = {
    getHomepage,
    postCreateUser
}