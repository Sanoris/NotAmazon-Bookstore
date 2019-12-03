window.onload = function(){
    var homebtn = document.getElementById("home");
    homebtn.setAttribute("onclick", "document.location = 'home'");
    var submit = document.getElementById("submitchanges");
    submit.onclick = XMLSubmit;
    XMLAccount1();

    function XMLAccount1(){
        var request = new XMLHttpRequest();
        var inputs = document.getElementsByTagName("input");

        request.onload = function(){
            var body = document.getElementsByTagName("body")[0];
            ObjArray = JSON.parse(this.responseText);
            
            inputs[0].value = ObjArray[0].Email;
            inputs[1].value = ObjArray[0].Password;
            inputs[2].value = ObjArray[0].Phone;
            inputs[3].value = ObjArray[0].Address;
        }

        request.open('GET', '/accountInfo1');
        request.send();
    }
    function XMLSubmit(){
        var request = new XMLHttpRequest();
        var inputs = document.getElementsByTagName("input");

        request.onload = function(){
            alert("Account Info Updated!");
        }

        request.open('POST', '/submitChanges');
        request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        request.send(JSON.stringify({"Email": inputs[0].value, "Password": inputs[1].value, "Phone": inputs[2].value, "Address": inputs[3].value}));
    }
}