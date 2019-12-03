window.onload = function(){//this is main
    XML();
    //Begin dropdown code
    var menu = document.getElementById("menubtn");
    var cart = document.getElementById("cartbtn");
    var ISBN;

    cart.onclick = toggleContent1;
    menu.onclick = toggleContent2;

    function toggleContent1(){
        document.getElementById("cartContent").classList.toggle("show");
    }
    function toggleContent2(){
        document.getElementById("menuContent").classList.toggle("show");
    }

    window.onclick = function(e) {
        if (!e.target.matches('.searchButton')) {
        var content = document.getElementById("menuContent");
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            }
        }
    }
    //End dropdown code

    var search = document.getElementById("searchButton");
    var reviews = document.getElementById("reviews");
    var pub = document.getElementById("publication");
    var title = document.getElementById("title");
    var price = document.getElementById("price");
    var rows = document.getElementsByClassName("divrow");

    pub.onclick = function(){
        XML("Pub_Date");
    }
    reviews.onclick = function(){
        XML("Avg_Rating");
    }
    search.onclick = function(){
        XML("Title");
    };
    title.onclick = function(){
        XML("Title");
    };
    price.onclick = function(){
        XML("Price");
    }
    
    function XML(order){
        var ObjArray;
        var request = new XMLHttpRequest();
        var search = document.getElementById("SearchText").value;
        //Replace tbody container
        var oldcontainer = document.getElementById("Maincontent");
        var newcontainer = document.createElement("tbody");
        newcontainer.id = "Maincontent";
        oldcontainer.parentNode.replaceChild(newcontainer, oldcontainer);
        //End replace

        request.onload = function(){
            ObjArray = JSON.parse(this.responseText);
            for(var i = 0; i < ObjArray.length; i++){
                var row = document.createElement("tr");
                var title = document.createElement('td');
                title.innerHTML = ObjArray[i].Title;
                ISBN = document.createElement('td');
                ISBN.innerHTML = ObjArray[i].ISBN;
                var pub = document.createElement('td');
                pub.innerHTML = ObjArray[i].Pub_Date;
                var price = document.createElement('td');
                price.innerHTML = "$" + ObjArray[i].Price;
                var rating = document.createElement('td');
                rating.innerHTML = ObjArray[i].Avg_Rating;
                var img = document.createElement('img');
                img.src = ObjArray[i].Filename;

                row.classList.add("divrow");
                row.setAttribute("onclick", "document.location = 'itempage.html?ISBN=" + ObjArray[i].ISBN + "'");
                row.appendChild(img);
                row.appendChild(title);
                row.appendChild(ISBN);
                row.appendChild(pub);
                row.appendChild(price);
                row.appendChild(rating);

                newcontainer.appendChild(row);
            }
        }

        request.open('POST', '/query');
        request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        if(order == ''){
            request.send(JSON.stringify({"SearchText": search}));
        }
        else{
            request.send(JSON.stringify({"SearchText": search, "order": order}));
        }
    }
}