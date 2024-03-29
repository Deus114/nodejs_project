const connection = require('../config/database');

const getallUsers = async () => {
    let [results, fields] = await connection.query(
        ` select * from Users`
    );
    return results
}

const createUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES ('${email}', '${name}', '${city}')`
    );
}

const updateUser = async (email, name, city, userid) => {
    let [results, fields] = await connection.query(
        ` UPDATE Users 
            SET email = ?, name = ?, city = ?
            where id = ?
        `, [email, name, city, userid]
    );
}

const getUserbyID = async (userID) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userID]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

module.exports = {
    getallUsers, getUserbyID, createUser, updateUser
}