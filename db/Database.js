const mysql = require('mysql2');

// Database class
class Database {
    constructor (options) {
        this.options = options
        this.db = null
    }

    validate () {

        const { host, user, database } = this.options;
        if (!host || !user || !database)
        throw new Error('Database creation has failed.');

        return;
    }

    connect () {
        this.validate();

        const { host, user, database } = this.options;

        this.db = mysql.createConnection( 
            {
                host: host,
                user: user,
                database: database
            },
            console.log('Connection established to employee database.')
        );
    }
    disconnect () {
        this.db.disconnect();
    }
}

module.exports = Database;

