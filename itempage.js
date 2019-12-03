window.onload = function(){
    XMLBook();
    XMLReview();
    var searchbtn = document.getElementById("searchButton");
    searchbtn.setAttribute("onclick", "document.location = 'home'");
    var menu = document.getElementById("menubtn");
    var cart = document.getElementById("cartbtn");
    var addcart = document.getElementById("addCart");
    addcart.onclick = XMLAdd;
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
    var submit = document.getElementById("submit");
    submit.onclick = XMLPostReview;

    function XMLBook(){
        var request = new XMLHttpRequest();
        var ObjArray;

        request.onload = function(){
            var imgdiv = document.getElementsByClassName("image")[0];
            var titlediv = document.getElementsByClassName("title")[0];
            ObjArray = JSON.parse(this.responseText);

            var img = document.createElement("img");
            img.src = ObjArray[0].Filename;
            var title = document.createElement("h3");
            title.innerHTML = ObjArray[0].Title;
            var price = document.createElement("p");
            price.innerHTML = "$" + ObjArray[0].Price;

            imgdiv.appendChild(img);

            titlediv.appendChild(title);
            titlediv.appendChild(price);
        }
        request.open('GET', '/populateItemPage');
        request.send();
    }

    function XMLReview(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            var reviewsdiv = document.getElementsByClassName("reviews")[0];
            ObjArray = JSON.parse(this.responseText);
            for(var i = 0; i < ObjArray.length; i++){
                var review = document.createElement("div");
                review.classList.add("userrev");
                var header = document.createElement("p");
                header.innerHTML = ObjArray[i].Cust_ID + " Rates This " + ObjArray[i].Rating + " out of 5";
                review.appendChild(header);
                
                if(ObjArray[i].Review != ''){
                    var text = document.createElement("p");
                    text.innerHTML = ObjArray[i].Review;
                    header.innerHTML += "<br>They say: ";
                    review.appendChild(text);
                }

                reviewsdiv.appendChild(review);
            }
        }

        request.open('GET', '/reviews');
        request.send();
    }

    function XMLPostReview(){
        var request = new XMLHttpRequest();
        var rating = document.getElementById("rating");
        var review = document.getElementById("textarea");

        request.open('POST', '/postReview');
        request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        request.send(JSON.stringify({"Rating": rating.value, "Review": review.value}));

        alert("Review Added!");
    }

    function XMLAdd(){
        var request = new XMLHttpRequest();
        
        request.onload = function(){
            alert("Item Added to Cart!");
        }

        request.open('GET', '/addCart');
        request.send();
    }

}