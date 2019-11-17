const fs = require("fs")

module.exports = (filename, data) => {
  fs.writeFile(filename, data, function(err) {
    if (err) console.log(err);
    console.log("File written successfully");
  });
};
