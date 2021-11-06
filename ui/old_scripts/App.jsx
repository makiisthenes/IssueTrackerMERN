const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}!`); // This backtick with curcly brackets and a dollar is what we use to define formatted strings with variables in it.
// Line 2 is equivalent to saying  for c in continents, helloContinents.append(f"Hello {c}") in Python.
const message = helloContinents.join(" ");
// const elem1 = (<div>This is JSX code that will be converted to JS using babel compiler.<h3>This is a link <a href="https://www.duckduckgo.com">Click here for DDG Search Engine.</a></h3></div>);
const elem2 = (<div><h1>{message}</h1></div>)


// ReactDOM.render(elem1, document.getElementById("content1"));
ReactDOM.render(elem2, document.getElementById("root"));

