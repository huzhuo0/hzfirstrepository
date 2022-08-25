let dbOption
/* 本地数据库 */
dbOption = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  port: '3306',
  // database: 'xd_class'
  database:'myproject'
}

/* 虚拟机上的数据库 */
// dbOption = {
//   connectionLimit: 10,
//   host: '192.168.21.128',
//   user: 'root',
//   password: 'Xdclass123',
//   port: '3306',
//   database: 'xnj_xdclass'
// }

module.exports = dbOption