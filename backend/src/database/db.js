const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('prueba', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

(async ()=>{
        try {
          await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }catch (error) {
             console.error('Unable to connect to the database:', error);
        }
})
();