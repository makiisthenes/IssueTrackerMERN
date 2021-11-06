"use strict";

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
}); // This backtick with curcly brackets and a dollar is what we use to define formatted strings with variables in it.
// Line 2 is equivalent to saying  for c in continents, helloContinents.append(f"Hello {c}") in Python.

var message = helloContinents.join(" "); // const elem1 = (<div>This is JSX code that will be converted to JS using babel compiler.<h3>This is a link <a href="https://www.duckduckgo.com">Click here for DDG Search Engine.</a></h3></div>);

var elem2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, message)); // ReactDOM.render(elem1, document.getElementById("content1"));

ReactDOM.render(elem2, document.getElementById("root"));