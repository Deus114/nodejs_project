const connection = require('../config/database');
const { getallUsers, getUserbyID, createUser, updateUser } = require('../services/CRUD');

const getHomepage = async (req, res) => {
    let results = await getallUsers();
    return res.render('homepage.ejs', { listUser: results });
}

const getUpdate = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserbyID(userID);
    return res.render('edit.ejs', { userEdit: user });
}

const getCreate = (req, res) => {
    return res.render('create.ejs');
}

const postCreateUser = async (req, res) => {
    // let{name, email, city} = req.body;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    await createUser(email, name, city);
    res.redirect('/');
};

const postUpdateUser = async (req, res) => {
    // let{name, email, city} = req.body;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    let userid = req.body.userid;

    await updateUser(email, name, city, userid);
    res.redirect('/');
};

module.exports = {
    getHomepage,
    postCreateUser,
    getCreate,
    getUpdate, postUpdateUser
}