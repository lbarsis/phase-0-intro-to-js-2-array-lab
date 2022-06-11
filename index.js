// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
    
function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats
}

function removeLastCat(){
    const newCats = cats.slice(0,cats.length - 1)
    return newCats
}

function removeFirstCat() {
    const newCats = cats.slice(1, cats.length)
    return newCats
}