//Function that handles reading of files and merge in values
  //Read from file and get a string
  //Merge values into string

var fs = require("fs");

//Helper - Cycle over {{key}}s, replace with values from object
function mergeValues(values, content){
  for(var key in values){
    content = content.replace("{{" + key + "}}", values[key]);
  }
  
  return content;
}

function view(templateName, values, response){
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"} );
  fileContents = mergeValues(values, fileContents);
  response.write(fileContents);
}

module.exports.view = view;