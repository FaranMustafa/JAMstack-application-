const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
  // TODO: get courses
  try {
    const courses = await table.select().firstPage();
    return formattedReturn(200, courses);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
