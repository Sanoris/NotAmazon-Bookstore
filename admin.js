window.onload = function(){
    var cust = document.getElementById("customers");
    var ord = document.getElementById("orders");
    var supp = document.getElementById("suppliers");
    var books = document.getElementById("books");
    var auth = document.getElementById("authors");
    var custom = document.getElementById("custom");
    var body = document.getElementById("maincontent");

    cust.onclick = custf;
    ord.onclick = ordf;
    supp.onclick = suppf;
    books.onclick = booksf;
    auth.onclick = authf;
    custom.onclick = customf;

    function custf(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            remove();
            var table = document.createElement('table');
            table.id = 'table';

            var row = document.createElement("tr");
            var custid = document.createElement("th");
            var password = document.createElement("th");
            var first = document.createElement("th");
            var last = document.createElement("th");
            var type = document.createElement("th");
            
            custid.innerHTML = 'Cust_ID: ';
            password.innerHTML = 'Password: ';
            first.innerHTML = 'First: ';
            last.innerHTML = 'Last: ';
            type.innerHTML = 'Type: ';



            row.appendChild(custid);
            row.appendChild(password);
            row.appendChild(first);
            row.appendChild(last);
            row.appendChild(type);
            var delth =  document.createElement('th');
            delth.innerHTML = "Delete?";
            row.appendChild(delth);
            table.appendChild(row);

            var ObjArray = JSON.parse(this.responseText);
            for(var i = 0; i<ObjArray.length; i++){
                var row = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                var td5 = document.createElement("td");
                var custid = document.createElement("input");
                var password = document.createElement("input");
                var first = document.createElement("input");
                var last = document.createElement("input");
                var type = document.createElement("input");

                custid.value = ObjArray[i].Cust_ID;
                password.value = ObjArray[i].Password;
                first.value = ObjArray[i].First;
                last.value = ObjArray[i].Last;
                type.value = ObjArray[i].Type;
                custid.readOnly = true;

                td1.appendChild(custid);
                td2.appendChild(password);
                td3.appendChild(first);
                td4.appendChild(last);
                td5.appendChild(type);
                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                row.appendChild(td4);
                row.appendChild(td5);
                var deltd = document.createElement("td");
                var del = document.createElement("input");
                del.type = 'checkbox';
                deltd.appendChild(del);
                row.appendChild(deltd);
                table.appendChild(row);
            }
            body.appendChild(table);
            var update = document.createElement('button');
            update.innerHTML = "Update";
            update.id = "update";
            body.appendChild(update);
            update.onclick = updateCust;
        }

        request.open('GET', '/viewCust');
        request.send();
    }

    function ordf(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            remove();
            var table = document.createElement('table');
            table.id = 'table';
            var row = document.createElement('tr');
            var ordid = document.createElement('th');
            var custid = document.createElement('th');
            var date = document.createElement('th');
            var item = document.createElement('th');
            var total = document.createElement('th');

            ordid.innerHTML = 'Ord_ID: ';
            custid.innerHTML = 'Cust_ID: ';
            date.innerHTML = 'Ord_Date: ';
            item.innerHTML = 'Item_Num: ';
            total.innerHTML = 'Total: ';

            row.appendChild(ordid);
            row.appendChild(custid);
            row.appendChild(date);
            row.appendChild(item);
            row.appendChild(total);
            table.appendChild(row);


            var ObjArray = JSON.parse(this.responseText);
            for(var i = 0; i<ObjArray.length; i++){
                var row = document.createElement("tr");
                var ordid = document.createElement('td');
                var custid = document.createElement('td');
                var date = document.createElement('td');
                var item = document.createElement('td');
                var total = document.createElement('td');

                ordid.innerHTML = ObjArray[i].Ord_ID;
                custid.innerHTML = ObjArray[i].Cust_ID;
                date.innerHTML = ObjArray[i].Ord_Date;
                item.innerHTML = ObjArray[i].Item_Num;
                total.innerHTML = ObjArray[i].Total;

                row.appendChild(ordid);
                row.appendChild(custid);
                row.appendChild(date);
                row.appendChild(item);
                row.appendChild(total);
                table.appendChild(row);
            }
            body.appendChild(table);
        }

        request.open('GET', '/viewOrd');
        request.send();
    }

    function suppf(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            remove();
            var table = document.createElement('table');
            table.id = 'table';
            var row = document.createElement("tr");
            var name = document.createElement('th');
            var ISBN = document.createElement('th');

            name.innerHTML = "Supplier: ";
            ISBN.innerHTML = "ISBN: ";

            row.append(name);
            row.append(ISBN);
            table.append(row);

            var ObjArray = JSON.parse(this.responseText);
            for(var i = 0; i<ObjArray.length; i++){
                var row = document.createElement("tr");
                var name = document.createElement('td');
                var ISBN = document.createElement('td');

                name.innerHTML = ObjArray[i].Name;
                ISBN.innerHTML = ObjArray[i].ISBN;

                row.appendChild(name);
                row.appendChild(ISBN);
                table.appendChild(row);
            }
            body.appendChild(table);
        }

        request.open('GET', '/viewSupp');
        request.send();
    }

    function booksf(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            remove();
            var table = document.createElement('table');
            table.id = 'table';
            var row = document.createElement("tr");
            var td1 = document.createElement("th");
            var td2 = document.createElement("th");
            var td3 = document.createElement("th");
            var td4 = document.createElement("th");
            var td5 = document.createElement("th");
            var td6 = document.createElement("th");

            td1.innerHTML = "ISBN: ";
            td2.innerHTML = "Title: ";
            td3.innerHTML = "Pub_Date: ";
            td4.innerHTML = "Price: ";
            td5.innerHTML = "Item_Num: ";
            td6.innerHTML = "File: ";

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            row.appendChild(td6);
            var delth =  document.createElement('th');
            delth.innerHTML = "Delete?";
            row.appendChild(delth);
            table.appendChild(row);

            var ObjArray = JSON.parse(this.responseText);
            for(var i = 0; i<ObjArray.length; i++){
                var row = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                var td5 = document.createElement("td");
                var td6 = document.createElement("td");
                var ISBN = document.createElement("input");
                var title = document.createElement("input");
                var pub = document.createElement("input");
                var price = document.createElement("input");
                var item = document.createElement("input");
                var file = document.createElement("input");

                ISBN.value = ObjArray[i].ISBN;
                title.value = ObjArray[i].Title;
                pub.value = ObjArray[i].Pub_Date;
                price.value = ObjArray[i].Price;
                item.value = ObjArray[i].Item_Num;
                file.value = ObjArray[i].Filename;
                ISBN.readOnly = true;

                td1.appendChild(ISBN);
                td2.appendChild(title);
                td3.appendChild(pub);
                td4.appendChild(price);
                td5.appendChild(item);
                td6.appendChild(file);
                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                row.appendChild(td4);
                row.appendChild(td5);
                row.appendChild(td6);
                var deltd = document.createElement("td");
                var del = document.createElement("input");
                del.type = 'checkbox';
                deltd.appendChild(del);
                row.appendChild(deltd);
                table.appendChild(row);
            }
            body.appendChild(table);
            var update = document.createElement('button');
            update.innerHTML = "Update";
            update.id = "update";
            body.appendChild(update);
            update.onclick = updateBook;
        }

        request.open('GET', '/viewBook');
        request.send();
    }

    function authf(){
        var request = new XMLHttpRequest();

        request.onload = function(){
            remove();
            var table = document.createElement('table');
            table.id = 'table';
            var row = document.createElement("tr");
            var td1 = document.createElement("th");
            var td2 = document.createElement("th");
            var td3 = document.createElement("th");
            var td4 = document.createElement("th");
            var td5 = document.createElement("th");
            var td6 = document.createElement("th");

            td1.innerHTML = "Author_ID: ";
            td2.innerHTML = "Contact_ID: ";
            td3.innerHTML = "DoB: ";
            td4.innerHTML = "Gender: ";
            td5.innerHTML = "Last: ";
            td6.innerHTML = "First: ";

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            row.appendChild(td6);
            var delth =  document.createElement('th');
            delth.innerHTML = "Delete?";
            row.appendChild(delth);
            table.appendChild(row);

            var ObjArray = JSON.parse(this.responseText);
            for(var i = 0; i<ObjArray.length; i++){
                var row = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                var td5 = document.createElement("td");
                var td6 = document.createElement("td");
                var Author_ID = document.createElement("input");
                var Contact_ID = document.createElement("input");
                var DoB = document.createElement("input");
                var Gender = document.createElement("input");
                var Last = document.createElement("input");
                var First = document.createElement("input");

                Author_ID.value = ObjArray[i].Author_ID;
                Contact_ID.value = ObjArray[i].Contact_ID;
                DoB.value = ObjArray[i].DoB;
                Gender.value = ObjArray[i].Gender;
                Last.value = ObjArray[i].Last;
                First.value = ObjArray[i].First;
                Author_ID.readOnly = true;

                td1.appendChild(Author_ID);
                td2.appendChild(Contact_ID);
                td3.appendChild(DoB);
                td4.appendChild(Gender);
                td5.appendChild(Last);
                td6.appendChild(First);
                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);
                row.appendChild(td4);
                row.appendChild(td5);
                row.appendChild(td6);
                var deltd = document.createElement("td");
                var del = document.createElement("input");
                del.type = 'checkbox';
                deltd.appendChild(del);
                row.appendChild(deltd);
                table.appendChild(row);
            }
            body.appendChild(table);
            var update = document.createElement('button');
            update.innerHTML = "Update";
            update.id = "update";
            body.appendChild(update);
            update.onclick = updateAuth;
        }

        request.open('GET', '/viewAuth');
        request.send();
    }

    function customf(){
        remove();
        var wrapper = document.createElement("div");
        wrapper.classList.add("wrap");
        wrapper.id = "wrapper";
        wrapper.innerHTML = "<div class='search'><input id='SearchText' type='text' class='searchTerm' placeholder='Enter Query'><button type='submit' class='searchButton' id='searchButton'>Submit</button></div>";
        body.appendChild(wrapper);
        var btn = document.getElementById("searchButton");
        btn.onclick = submitQ;
    }

    function submitQ(){
        var request = new XMLHttpRequest();
        var text = document.getElementById("SearchText");

        request.onload = function(){
            alert(this.responseText);
        }

        request.open('POST', '/customQuery');
        request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        request.send(JSON.stringify({'Query': text.value}));
    }

    function remove(){
        if(document.getElementById("table")){
            var table = document.getElementById("table");
            table.parentElement.removeChild(table);
            if(document.getElementById("update")){
                var button = document.getElementById("update");
                button.parentElement.removeChild(button);
            }
        }
        if(document.getElementById('wrapper')){
            var wrapper = document.getElementById('wrapper');
            wrapper.parentElement.removeChild(wrapper);
        }
    }

    function updateCust(){
        var rows = document.getElementById('table').rows;
        for(var i = 1; i < rows.length; i++){
            var row = rows[i];
            if(row.childNodes[5].childNodes[0].checked){
                var request = new XMLHttpRequest();

                request.open('POST', '/deleteCust');
                request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                request.send(JSON.stringify({'Cust_ID': row.childNodes[0].childNodes[0].value}));
            }
            else{
                var request = new XMLHttpRequest();

                request.open('POST', '/updateCust');
                request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                request.send(JSON.stringify({'Cust_ID': row.childNodes[0].childNodes[0].value, 'Password': row.childNodes[1].childNodes[0].value, 'First': row.childNodes[2].childNodes[0].value, 'Last': row.childNodes[3].childNodes[0].value, 'Type': row.childNodes[4].childNodes[0].value}));
            }
        }
        custf();
    }

    function updateBook(){
        var rows = document.getElementById('table').rows;
        for(var i = 1; i < rows.length; i++){
            var row = rows[i];
            if(row.childNodes[6].childNodes[0].checked){
                var request = new XMLHttpRequest();

                request.open('POST', '/deleteBook');
                request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                request.send(JSON.stringify({'ISBN': row.childNodes[0].childNodes[0].value}));
            }
            else{
                var request = new XMLHttpRequest();

                request.open('POST', '/updateBook');
                request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                request.send(JSON.stringify({'ISBN': row.childNodes[0].childNodes[0].value, 'Title': row.childNodes[1].childNodes[0].value, 'Pub_Date': row.childNodes[2].childNodes[0].value, 'Price': row.childNodes[3].childNodes[0].value, 'Filename': row.childNodes[5].childNodes[0].value}));
            }
        }
        booksf();
    }

    function updateAuth(){
        var rows = document.getElementById('table').rows;
        for(var i = 1; i < rows.length; i++){
            var row = rows[i];
            if(row.childNodes[6].childNodes[0].checked){
                var request = new XMLHttpRequest();

                request.open('POST', '/deleteAuth');
                request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                request.send(JSON.stringify({'Author_ID': row.childNodes[0].childNodes[0].value}));
            }
            else{
                var request = new XMLHttpRequest();
                
                request.open('POST', '/updateAuth');
                request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
                request.send(JSON.stringify({'Author_ID': row.childNodes[0].childNodes[0].value, 'Contact_ID': row.childNodes[1].childNodes[0].value, 'DoB': row.childNodes[2].childNodes[0].value, 'Gender': row.childNodes[3].childNodes[0].value, 'Last': row.childNodes[4].childNodes[0].value, 'First': row.childNodes[5].childNodes[0].value}));
            }
        }
        authf();
    }
}