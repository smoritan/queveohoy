let baseDD = require ('../lib/conexionbd');

function all(res) {
    let sql = 'select * from pelicula'
    con.query(sql, function(err, res){
        if (err){
            console.log('Hubo un error', err.message);
            return res.status(404).send('Hubo un error');
        }
        var response = {
            'all': res
        };

        res.send(JSON.stringify(response))
    });
    
}

module.exports = {
    all : all
}