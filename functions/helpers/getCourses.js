const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
  // TODO: get courses
  const courses = await table.select().firstPage();
  return formattedReturn(200, courses);
};
