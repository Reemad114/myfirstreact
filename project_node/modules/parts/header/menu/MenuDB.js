const DB = require('../../../../database.js');

module.exports.MenuDB = () => {
  let DBQuery = "SELECT * FROM `menuitems` INNER JOIN `menulist` ON `menuitems`.`menu_id` =  `menulist`.`id` WHERE `menulist`.`id`=1";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
