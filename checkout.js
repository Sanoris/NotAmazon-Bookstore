window.onload = function(){
    var btn = document.getElementById('submitchanges');
    var homebtn = document.getElementById("home");
    homebtn.setAttribute("onclick", "document.location = 'home'");
    btn.onclick = XMLInsert;
    XML();
    XML2();

    function XML(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            var inputs = document.getElementsByTagName("input");

            if(this.responseText!='[]'){
                var ObjArray = JSON.parse(this.responseText);
                inputs[0].value = ObjArray[0].First;
                inputs[1].value = ObjArray[0].Last;
                inputs[2].value = ObjArray[0].Email;
                inputs[3].value = ObjArray[0].Phone;
                inputs[4].value = ObjArray[0].Address;
            }
        }

        request.open('GET', '/populateCheckout');
        request.send();
    }

    function XMLInsert(){
        var request = new XMLHttpRequest();
        var inputs = document.getElementsByTagName("input");

        request.onload = function(){
            alert('Your order has been submitted!');
            if(inputs[5].checked){
                document.location = 'yeet';
            }
        }

        
        request.open('POST', '/insertCust');
        request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        request.send(JSON.stringify({"First": inputs[0].value, "Last": inputs[1].value, "Email": inputs[2].value, "Phone": inputs[3].value, "Address": inputs[4].value, }));
    }

    function XML2(){
        var p = document.getElementsByTagName("p")[0];
        var request = new XMLHttpRequest();

        request.onload = function(){
            var price = 0; 
            if(this.responseText != '[]'){
                var ObjArray = JSON.parse(this.responseText);
                for(var i = 0; i<ObjArray.length; i++){
                    price += ObjArray[i].Price;
                    p.innerHTML += "Book: " + ObjArray[i].Title + " Price: $" + ObjArray[i].Price + "<br>";
                }
                p.innerHTML += "Total Price: $" + price + "<br>";
                XML3(price);
            }
            else{
                p.innerHTML = "There are no books in your cart!<br>";
            }

        }

        request.open('GET', '/populateOrderID');
        request.send();
    }
    function XML3(price){
        var request = new XMLHttpRequest();

        request.open('GET', '/updateTotal?Price=' + price);
        request.send();
    }
}