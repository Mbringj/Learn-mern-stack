
// try {
//   // code
//   // do something
// } catch(e) {
//   // catch error
//   // catch error
// }

try {
  console.log("start");
  if (blabla) {
    throw ReferenceError();
  }
  console.log(blabla);
  console.log("end");
} catch(e) {
  console.log(`${e.message} - ${e.name}`);
}

// en cas de mauvais syntaxe tout le code ne fonctionnement pas
// try {
//   {{{
// } catch (e) {

// }

// try catch travail de facon asynchrone

// try {
//   setTimeout(function() {
//     noSuchVariable;
//   }, 1000)
// } catch (e) {
//   console.log("won't work");
// }

setTimeout(function() {
  try {
    noSuchVariable;
  } catch {
    console.log("error is caught here!")
  }
}, 1000);

// les Objects Error
// le javascript utilise les objects erreur pour renvoyer des erreurs
// la plupart du temps on fait throw Error(erreur customiser) ou throw error_definie dans les ensembles error
// les objects error ont des proprietes dans les objects error.name error.message error.stack

let json = "{ bad json }";
try {
  let user = JSON.parse(json); // <-- when an error occurs...

  if(!user.name) {
    throw new SyntaxError("structure du json incomplete: no name");
  }
  existepas();
  console.log( user.name ); // doesn't work
} catch (e) {
// ...the execution jumps here
  if(e.name == "SyntaxError") {
    console.log("JSON Error:" + e.message);
  } else {
    throw e;
  }
  console.log("JSON error" + e.message );
}

// on peut utiliser try catch dans plusieur cas dans le code
// pour verifier les donnees recu, verifier les proprietes des objects
// renvoyer des errors


// ON PEUT THROW NOTRE ERREUR DE FACON CUSTOMISER

// la syntaxe est le suivant

// throw <error object>
// throw <error object>

// les objects 

// on peut rethrowing

// la syntaxe << try ... catch ... finally >>

// try {
//   // some code
// } catch(e) {
//   // handle error
// } finally {
//   // execute always
// }

// le << try ... finally >> permet de definir un algo pour execute et se terminer sans forcement gere les erreurs


// tout a savoir sur les customs error et error handling
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}
  // Usage
function readUser(json) {
  let user = JSON.parse(json);
  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }
  return user;
}
  // Working example with try..catch
try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No field: name
    alert(err.name); // PropertyRequiredError
    alert(err.property); // name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// isOnline()
// isReady()
// findTags()
// findStudentSale()
// list -> lst
// userAgent -> ua
// getPermissionsAuth()
// le nom de
//  variable est des functions sont choisi en function des plusieurs parametres

// abreviation
// string -> str
// number -> num
