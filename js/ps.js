var relatedProductArray = [
    {
        "name":"Reebok Track Jacket",
        "source":"images/jacket1.png",
        "price":"100$",
        "sku":"4938475"
    },
    {
        "name":"Reebok Track Jacket",
        "source":"images/jacket2.png",
        "price":"100$",
        "sku":"4938476"
    },
    {
        "name":"Reebok Track Jacket",
        "source":"images/jacket3.png",
        "price":"100$",
        "sku":"4938477"
    },
    {
        "name":"Reebok Track Jacket",
        "source":"images/jacket1.png",
        "price":"100$",
        "sku":"4938478"
    }
];

function adjustQty(n){
    var qty = document.getElementById("productQty").value;
    var price = document.getElementById("productQty").getAttribute("data-price");
    qty = parseInt(qty) + parseInt(n);
    document.getElementById("productQty").value = qty;
    price = parseInt(price) * qty;
    document.getElementById("bigProductPrice").innerHTML = price;
}

function loadArray(array,id){
    var container = document.getElementById(id);
    var len = array.length;
    for (var x=0;x<len;x++){
        var element = array[x];
        var div = document.createElement("div");
        div.setAttribute("onclick","displayThis('" + element.sku + "')");
        div.setAttribute("class","item-container");
        div.style.backgroundColor = "white";
        div.style.width = "20%";
        div.style.margin = "auto";
        var fig = document.createElement("figure");
        var img = document.createElement("img");
        img.src = element.source;
        img.style.width = "95%";
        var cap = document.createElement("figcaption");
        cap.innerHTML = element.name;
        var spn = document.createElement("div");
        spn.innerHTML = element.price;
        spn.setAttribute("class","accent");

        var br = document.createElement("br");

        container.appendChild(div);
        div.appendChild(fig);
        fig.appendChild(img);
        fig.appendChild(cap);
        div.appendChild(br);
        div.appendChild(spn);
    }
}
function displayThis(ele){
    console.log("Load this: " + ele);
}

loadArray(relatedProductArray,'rpContainer');