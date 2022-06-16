const list = document.getElementsByTagName('li');

// ADD NEW ITEM TO END OF LIST

var item1 = document.createElement("li");
item1.appendChild(document.createTextNode("Chicken breast"));
list[0].parentNode.appendChild(item1, list[0]);

// ADD NEW ITEM START OF LIST

var item2 = document.createElement("li");
item2.appendChild(document.createTextNode("Cheese"));
list[0].parentNode.insertBefore(item2, list[0]);


// ADD A CLASS OF COOL TO ALL LIST ITEMS

for (var i = 0; i < list.length; i++) {
    list[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var items_count = document.createElement("span");
items_count.appendChild(document.createTextNode(list.length));

const header = document.getElementsByTagName('h2');
header[0].appendChild(items_count);
