let allWords = [];  //array containing all words.


function addWord (text) {
    let list = document.getElementById("list");
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(text));
    list.appendChild(item);
    allWords.push(text);
    let input = document.getElementById('addWordInput');
    input.value = ''; //deletes the previously inserted text from the input box.
    return false; //prevents page refresh
}

function searchWord (text) {
    let paragraph = document.createElement('p');
    let node;
    if (allWords.includes(text)) {
        node = document.createTextNode("Word '" + text + "' exists");
    } else {
        node = document.createTextNode("Word '" + text + "' does not exist");
    }
    paragraph.appendChild(node);
    let element = document.getElementById("wordExistsDiv");
        element.appendChild(paragraph);
        let input = document.getElementById('searchWordInput');
    input.value = ''; //deletes the previously inserted text from the input box.
    return false; //prevents page refresh
}

