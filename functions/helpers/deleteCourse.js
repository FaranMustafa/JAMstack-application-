const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: delete course
  try {
    await fetch("/api/courses", {
      method: "DELETE",
      body: JSON.stringify({ id: course.id }),
    });
    refreshCourses();
  } catch (err) {
    console.error(err);
  }
};
