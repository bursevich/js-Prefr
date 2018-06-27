var name = prompt("Introduce yourself (in English):", "");
name1 = name.replace(/\W/g,"");
name1 = name1.replace(/\d/g,"");
name1 = name1.replace("_","");
 if (name1.length === 0 || name === "null") {
alert("You did not enter a name");  
} else {
  alert("Your name is " + name);       
}