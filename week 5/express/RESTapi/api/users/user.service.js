const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into express_api(firstname, lastname, gender, email, password, number) 
            values(?, ?, ?, ?, ?, ?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getUsers: callBack => {
        pool.query(
            `select id, firstname, lastname, gender, email, number from express_api`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id, firstname, lastname, gender, email, number from express_api where id = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    updateUser: (data, callBack) => {
        pool.query(
            `update express_api set firstname=?, lastname=?, gender=?, email=?,password=?, number=? where id=?`,
            [
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `delete from express_api where id=?`,
            [data.id],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
}