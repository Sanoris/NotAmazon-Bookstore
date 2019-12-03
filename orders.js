window.onload = function(){
    XML();
    var homebtn = document.getElementById("home");
    homebtn.setAttribute("onclick", "document.location = 'home'");

    function XML(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            var body = document.getElementsByTagName("body")[0];
            if(this.responseText == '[]'){
                var NoOrders = document.createElement("p");
                NoOrders.innerHTML = "Sorry, it does not seem that you have made an order yet!";
                body.appendChild(NoOrders);
            }
            else{
                var table = document.createElement("table");
                var Hrow = document.createElement("tr");
                var HOrderID = document.createElement("th");
                var HOrderDate = document.createElement("th");
                var HTitle = document.createElement("th");
                var HPrice = document.createElement("th");

                HOrderID.innerHTML = "Order ID:";
                HOrderDate.innerHTML = "Order Date:";
                HPrice.innerHTML = "Total:";
                Hrow.appendChild(HOrderID);
                Hrow.appendChild(HOrderDate);
                Hrow.appendChild(HPrice);
                table.appendChild(Hrow);

                var ObjArray = JSON.parse(this.responseText);
                for(var i = 0; i < ObjArray.length; i++){
                    var newrow = document.createElement("tr");
                    var newOrderID = document.createElement("td");
                    var newOrderDate = document.createElement("td");
                    var newPrice = document.createElement("td");

                    newOrderID.innerHTML = ObjArray[i].Ord_ID;
                    newOrderDate.innerHTML = ObjArray[i].Ord_Date;
                    newPrice.innerHTML = "$" + ObjArray[i].Total;

                    newrow.appendChild(newOrderID);
                    newrow.appendChild(newOrderDate);
                    newrow.appendChild(newPrice);
                    table.appendChild(newrow);
                }
                body.appendChild(table);
            }
        }
        request.open('GET', '/orders');
        request.send();
    }
}