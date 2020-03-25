let player = "CREATE TABLE IF NOT EXISTS players (id int(5) NOT NULL AUTO_INCREMENT, first_name varchar(255) NOT NULL, last_name varchar(255) NOT NULL, position varchar(255) NOT NULL, number int(11) NOT NULL, image varchar(255) NOT NULL, user_name varchar(255) NOT NULL, PRIMARY KEY (id))"

 db.query(player, function(err, result) {
     if (err) throw err;

     console.log('Table is created')
 })