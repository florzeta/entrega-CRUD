var pool = require('./bd');

async function getPosts() {
    var query = "select * from posts order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertPost(obj){
    try{
        var query = "insert into Posts set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    }
}

module.exports = { getPosts, deletePostById, insertPost }

