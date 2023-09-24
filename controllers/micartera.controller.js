


const ConexionBD = require('../util/conexionbd');
const pool = ConexionBD.getMysqlConnect();


const getTablas = async (req, res) => {
 
  const response = await pool.query('show tables');
  res.json(response.rows);
  console.log(response) 
};




module.exports = {
  getTablas
 
}

