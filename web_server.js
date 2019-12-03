var mysql = require('mysql'); //library that handles the connection to the database
var express = require('express'); //library that handles HTTP connections
var session = require('express-session');//an extension of express, that handles individual sessions
var server = express(); //Initialize the webserver
var bodyParser = require('body-parser');//library that allows us to read the contents of a POST request
var path = require('path');
var cookieParser = require('cookie-parser');

//Create the connection to the database
var connection = mysql.createPool({
    connectionLimit: 200,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbmsproj',
    insecureAuth: true
});

//This block lets the server know it will use additional packages
server.use(cookieParser());
server.use(bodyParser.urlencoded({extended : true}));
server.use(bodyParser.json());
server.use(session({
    secret: 'randomstuff',
    resave: true,
    saveUninitialized: true
}));

//Sends the login page when a 'GET' request is recieved
server.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.get('/accountInfo1', function(req, res){
    var Cust_ID = req.session.Cust_ID;
    connection.getConnection(function(err, conn){
        conn.query("SELECT c.Password, e.Email, p.Phone, a.Address FROM contact_details as d INNER JOIN email as e ON (d.Contact_ID = e.Contact_ID) INNER JOIN phone as p ON (d.Contact_ID = p.Contact_ID) INNER JOIN address as a ON (d.Contact_ID = a.Contact_ID) INNER JOIN customers as c ON (d.Cust_ID = c.Cust_ID) WHERE c.Cust_ID = ?;", [Cust_ID], function(error, result, fields) {
            res.send(result);
        });
        conn.release();
    });
});

//Sends the homepage after user login
server.get('/home', function(req, res){
    if(req.session.Type == 'cust'){
        res.sendFile(path.join(__dirname + '/home.html'));
    }
    if (req.session.Type == 'admin'){
        res.sendFile(path.join(__dirname + '/admin.html'));
    }
});

//BEGIN CUSTOMER HTML REQUEST BLOCK
server.get('/index.css', function(req, res){
    res.sendFile(path.join(__dirname + '/index.css'));
});

server.get('/home.css', function(req, res){
    res.sendFile(path.join(__dirname + '/home.css'));
});

server.get('/SignUp', function(req, res){
    res.sendFile(path.join(__dirname + '/SignUp.html'));
});

server.get('/TryAgain', function(req, res){
    res.sendFile(path.join(__dirname + '/TryAgain.html'));
});

server.get('/loginInfo2', function(req, res){
    res.sendFile(path.join(__dirname + '/index2.html'));
});

server.get('/account.css', function(req, res){
    res.sendFile(path.join(__dirname + '/account.css'));
});

server.get('/checkout.css', function(req, res){
    res.sendFile(path.join(__dirname + '/checkout.css'));
});

server.get('/index.css', function(req, res){
    res.sendFile(path.join(__dirname + '/index.css'));
});

server.get('/itempage.css', function(req, res){
    res.sendFile(path.join(__dirname + '/itempage.css'));
});

server.get('/home.css', function(req, res){
    res.sendFile(path.join(__dirname + '/home.css'));
});

server.get('/home.js', function(req, res){
    res.sendFile(path.join(__dirname + '/home.js'));
});

server.get('/itempage.html', function(req, res){
    req.session.ISBN = req.query.ISBN;
    res.sendFile(path.join(__dirname + '/itempage.html'));
});

server.get('/itempage.js', function(req, res){
    res.sendFile(path.join(__dirname + '/itempage.js'));
});

server.get('/account.html', function(req, res){
    res.sendFile(path.join(__dirname + '/account.html'));
});

server.get('/account.js', function(req, res){
    res.sendFile(path.join(__dirname + '/account.js'));
});

server.get('/orders.html', function(req, res){
    res.sendFile(path.join(__dirname + '/orders.html'));
});

server.get('/orders.css', function(req, res){
    res.sendFile(path.join(__dirname + '/orders.css'));
});

server.get('/orders.js', function(req, res){
    res.sendFile(path.join(__dirname + '/orders.js'));
});

server.get('/checkout.html', function(req, res){
    res.sendFile(path.join(__dirname + '/checkout.html'));
});

server.get('/checkout.js', function(req, res){
    res.sendFile(path.join(__dirname + '/checkout.js'));
});

server.get('/termsandcondition.html', function(req, res){
    res.sendFile(path.join(__dirname + '/termsandcondition.html'));
});

server.get('/terms.css', function(req, res){
    res.sendFile(path.join(__dirname + '/terms.css'));
});

server.get('/admin.css', function(req, res){
    if(req.session.Type == "admin"){
        res.sendFile(path.join(__dirname + '/admin.css'));
    }
    else{
        res.send("Must be an admin to access that page!");
    }
});

server.get('/admin.js', function(req, res){
    if(req.session.Type == "admin"){
        res.sendFile(path.join(__dirname + '/admin.js'));
    }
    else{
        res.send("Must be an admin to access that page!");
    }
});

server.get('/addCart', function(req, res){
    var ISBN = req.session.ISBN;
    connection.getConnection(function(err, conn){
        conn.query("SELECT * FROM books WHERE ISBN = ?", [ISBN], function(error, result, fields) {
            req.session.Cart.push(JSON.parse(JSON.stringify(result))[0]);
            res.end();
        });
        conn.release();
    });
});

server.get('/yeet', function(req, res){
    res.sendFile(path.join(__dirname + '/yeet.html'));
});

server.get('/yeet.js', function(req, res){
    res.sendFile(path.join(__dirname + '/yeet.js'));
});
//END CUSTOMER HTML BLOCK


server.get('/populateItemPage', function(req, res){
    var ISBN = req.session.ISBN;
    connection.getConnection(function(err, conn){
        conn.query("SELECT * FROM books WHERE ISBN = ?", [ISBN], function(error, result, fields) {
            req.session.Item_Num = JSON.parse(JSON.stringify(result))[0].Item_Num;
            res.send(result);
        });
        conn.release();
    });
});

server.get('/reviews', function(req, res){
    var ISBN = req.session.ISBN;
    connection.getConnection(function(err, conn){
        conn.query("SELECT * FROM reviews WHERE ISBN = ?", [ISBN], function(error, result, fields) {
            res.send(result);
        });
        conn.release();
    });
});

server.get('/orders', function(req, res){
    var Cust_ID = req.session.Cust_ID;
    connection.getConnection(function(err, conn){
        conn.query("SELECT DISTINCT Ord_ID, Ord_Date, Total FROM orders WHERE Cust_ID = ?;", [Cust_ID], function(error, result, fields) {
            if(error){
                res.send("nope");
            }
            else{
                res.send(result);
            }
        });
        conn.release();
    });
});

server.get('/updateTotal', function(req, res){
    req.session.Total = req.query.Price;
    res.end();
});

server.get('/populateOrderID', function(req, res){
    res.send(req.session.Cart);
});

server.get('/populateCheckout', function(req, res){
    var Cust_ID = req.session.Cust_ID;
    var ISBN = req.session.ISBN;
    connection.getConnection(function(err, conn){
        conn.query("SELECT * FROM contact_details as d INNER JOIN email as e ON (d.Contact_ID = e.Contact_ID) INNER JOIN phone as p ON (d.Contact_ID = p.Contact_ID) INNER JOIN address as a ON (d.Contact_ID = a.Contact_ID) INNER JOIN customers as c ON (d.Cust_ID = c.Cust_ID) WHERE c.Cust_ID = ?;", [Cust_ID], function(error, result, fields) {
            if(error){
                console.log(error);
            }
            else{
                res.send(result);
            }
        });
        conn.release();
    });
});

server.post('/insertCust', function(req, res){
    var First = req.body.First;
    var Last = req.body.Last;
    var Email = req.body.Email;
    var Phone = req.body.Phone;
    var Address = req.body.Address;
    var Contact_ID = Math.floor(Math.random()*1000000);
    var Ord_ID = Math.floor(Math.random()*10000000);
    var Cust_ID = req.session.Cust_ID;
    var today = new Date();
    var date = String(today.getMonth() + 1) + '/' + String(today.getDate()) + '/' + String(today.getFullYear());
    var Total = req.session.Total;

    connection.getConnection(function(err, conn){
        conn.query("SELECT * FROM contact_details WHERE Cust_ID = ?;", [Cust_ID], function(error, result, fields) {
            if(result.length == 0){
                conn.query("INSERT INTO contact_details (Contact_ID, Cust_ID) values(?,?);", [Contact_ID, Cust_ID], function(error, result, fields) {
                    conn.query("INSERT INTO phone (Contact_ID,Phone) values(?,?);" , [Contact_ID, Phone], function(error, result, fields) {
                        conn.query("UPDATE customers SET First = ?, Last = ? WHERE Cust_ID = ?;" , [First, Last, Cust_ID], function(error, result, fields) {
                            conn.query("INSERT INTO email (Email, Contact_ID) values (?,?);", [Email, Contact_ID], function(error, result, fields) {
                                conn.query("INSERT INTO address (Address, Contact_ID) values (?,?);", [Address, Contact_ID], function(error, result, fields) {
                                    for(let i = 0; i<req.session.Cart.length; i++){
                                        var Item_Num = req.session.Cart[i].Item_Num;
                                        connection.getConnection(function(err, i, connec){
                                            connec.query("INSERT INTO orders (Ord_ID, Cust_ID, Ord_Date, Item_Num, Total) values(?,?,?,?,?);" , [Ord_ID, Cust_ID, date, Item_Num, Total] , function(error, result, fields) {
                                                if(error){
                                                    console.log(error);
                                                }
                                                res.end();
                                            });
                                            req.session.Cart = new Array();
                                        }.bind(connection, i));
                                    }
                                });
                            });
                        });
                    });
                });
            }
            else{
                Contact_ID = JSON.parse(JSON.stringify(result))[0].Contact_ID;
                conn.query("UPDATE phone SET Phone = ? WHERE Contact_ID = ?;" , [Phone, Contact_ID], function(error, result, fields) {
                    if(error){
                        console.log(error);
                    }
                    conn.query("UPDATE email SET Email = ? WHERE Contact_ID = ?;" , [Email, Contact_ID], function(error, result, fields) {
                        if(error){
                            console.log(error);
                        }
                        conn.query("UPDATE address SET Address = ? WHERE Contact_ID = ?;" , [Address, Contact_ID], function(error, result, fields) {
                            if(error){
                                console.log(error);
                            }
                            for(let i = 0; i<req.session.Cart.length; i++){
                                var Item_Num = req.session.Cart[i].Item_Num;
                                connection.getConnection(function(err, i, connec){
                                    connec.query("INSERT INTO orders (Ord_ID, Cust_ID, Ord_Date, Item_Num, Total) values(?,?,?,?,?);" , [Ord_ID, Cust_ID, date, Item_Num, Total] , function(error, result, fields) {
                                        if(error){
                                            console.log(error);
                                        }
                                    });
                                    req.session.Cart = new Array();
                                }.bind(connection, i));
                            }
                        });
                    });
                });
            }
        });
    });
    res.end();
});

server.post('/query', function(req, res){
    var search = req.body.SearchText;
    var tempQuery, MyQuery;
    console.log("USER: " + req.session.Cust_ID + " SEARCHED FOR: " + req.body.SearchText);
    if(req.body.order){
        var order = req.body.order;
        if(search==''){
            tempQuery = "SELECT DISTINCT * FROM books ORDER BY ";
            MyQuery = tempQuery;
        }
        else{
            tempQuery = "SELECT DISTINCT * FROM books WHERE Title LIKE ? OR ISBN LIKE ? OR Item_Num LIKE ? ORDER BY ";
            MyQuery = mysql.format(tempQuery, ["%" + search + "%", "%" + search + "%", "%" + search + "%"]);
        }
        if(req.body.order=="Avg_Rating" || req.body.order=="Price"){
            order = order + " DESC";
        }
        MyQuery = MyQuery + order + ";";
        console.log("SORTING BY: " + order);
    }
    else{
        tempQuery = "SELECT DISTINCT * FROM books WHERE Title LIKE ? OR ISBN LIKE ? OR Item_Num LIKE ?;";
        MyQuery = mysql.format(tempQuery, ["%" + search + "%", "%" + search + "%", "%" + search + "%"]);
    }

    connection.getConnection(function(err, conn){
        conn.query(MyQuery, function(error, result, fields) {
            if(error){
                throw error;
            }
            for(let i = 0; i < result.length; i++){
                var ISBN = result[i].ISBN
                connection.getConnection(function(ISBN, err, conn){
                    var rating;
                
                    conn.query("SELECT AVG(Rating) AS Avg_Rating FROM reviews WHERE ISBN = ?", [ISBN], function(err, result1, fields1){
                        rating = result1[0].Avg_Rating;
                        connection.getConnection(function(ISBN, rating, err, conn){
                            conn.query("UPDATE books SET Avg_Rating = ? WHERE (ISBN = ?)", [rating, ISBN], function(err, result2, fields){
                            });
                            conn.release();
                        }.bind(connection, ISBN, rating));
                    });
                    conn.release();
                }.bind(connection, ISBN));
            }
        });
        conn.release();
        connection.getConnection(function(err, conn){
            conn.query(MyQuery, function(error, result, fields) {
                if(error){
                    console.log("ERROR");
                    res.send("ERROR. SORRY BUD");
                }
                else {
                    res.send(result);
                }
            });
            conn.release();
        });
    });
});

server.post('/postReview', function(req, res) {

    connection.getConnection(function(err, conn){
        var rating = req.body.Rating;
        var review = req.body.Review;
        var Cust_ID = req.session.Cust_ID;
        var ISBN = req.session.ISBN;
        conn.query("INSERT INTO reviews (ISBN, Cust_ID, Review, Rating) values(?,?,?,?);", [ISBN, Cust_ID, review, rating], function(error, result, fields) {
            if(error){
                conn.query("UPDATE reviews SET Rating = ?, Review = ? WHERE ISBN = ? AND Cust_ID = ?;", [rating, review, ISBN, Cust_ID], function(error, result, fields) {
                    if(error){
                        throw error;
                    }
                    res.end();
                });
            }
            res.end();
        });
        conn.release();
    });
});

server.post('/loginInfo', function(req, res) {
	var Cust_ID = req.body.Cust_ID;
    var Password = req.body.Password;
    req.session.Cart = new Array();
	if (Cust_ID && Password){
        connection.getConnection(function(err, conn){
            conn.query("SELECT Type FROM customers WHERE Cust_ID = ? AND Password = ?", [Cust_ID, Password], function(error, result, fields) {
                if(error){
                    console.log("ERROR");
                    res.send("ERROR. SORRY BUD");
                }
                else if (result.length > 0) {
                    req.session.Cust_ID = Cust_ID;
                    var data = JSON.parse(JSON.stringify(result));
                    req.session.Type = data[0].Type;

                    res.redirect('/home'); //Generates a GET request from the user for the homepage
                    console.log("USER " + Cust_ID + " Has logged in!");
                }
                else {
                    res.redirect('/loginInfo2');
                    console.log("USER FAILED LOGIN");
                }			
                res.end();
            });
            conn.release();
        });
    } 
    else {
        res.redirect('/loginInfo2');
		console.log("USER DIDN'T INPUT Cust_ID/PASSWORD");
    }
});

server.post('/signup', function(req, res) {
    var Cust_ID = req.body.Username;
    var Password = req.body.Password;
    if (Cust_ID && Password){
        connection.getConnection(function(err, conn){
            conn.query("SELECT * FROM customers WHERE Cust_ID = ?", [Cust_ID], function(error, results, fields){
                if(error){
                    throw error;
                }
                if(results.length != 0){
                    res.redirect('/TryAgain');
                }
                else{
                    conn.query("INSERT INTO customers (Cust_ID, Password, Type) VALUES (?, ?, 'cust');", [Cust_ID, Password], function(error, results, fields){
                        if(error){
                            throw error;
                        }
                    });
                    console.log('USER ACCOUNT CREATED! ' + Cust_ID);
                    res.redirect('/');
                }
            });
            conn.release();
        });
    }
});

server.post('/submitChanges', function(req, res){
    var Password = req.body.Password
    connection.getConnection(function(err, conn){
        var Cust_ID = req.session.Cust_ID;
        conn.query("UPDATE contact_details as d INNER JOIN email as e ON (d.Contact_ID = e.Contact_ID) INNER JOIN phone as p ON (d.Contact_ID = p.Contact_ID) INNER JOIN address as a ON (d.Contact_ID = a.Contact_ID) INNER JOIN customers as c ON (d.Cust_ID = c.Cust_ID) SET e.Email = ?, c.Password = ?, p.Phone = ?, a.Address = ?  WHERE c.Cust_ID = ?;", [req.body.Email, Password, req.body.Phone, req.body.Address, Cust_ID], function(error, results, fields){
            if(error){
                throw error;
            }
            console.log(Cust_ID + " updated account info!");

        });
        conn.release();
    });
});

//BEGIN ADMIN PAGE FUNCTIONS
//Admin pages require us to check the cookies to ensure the user is admin
server.get('/viewCust', function(req, res){
    console.log("USER: " + req.session.Cust_ID + " Viewed Customers!");
    if(req.session.Type == "admin"){
        connection.getConnection(function(err, conn){
            conn.query("SELECT * FROM customers;", function(error, result, fields) {
                res.send(result);
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.get('/viewBook', function(req, res){
    if(req.session.Type == "admin"){
        connection.getConnection(function(err, conn){
            conn.query("SELECT * FROM books;", function(error, result, fields) {
                res.send(result);
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.get('/viewSupp', function(req, res){
    if(req.session.Type == "admin"){
        connection.getConnection(function(err, conn){
            conn.query("SELECT * FROM supplier;", function(error, result, fields) {
                res.send(result);
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.get('/viewOrd', function(req, res){
    if(req.session.Type == "admin"){
        connection.getConnection(function(err, conn){
            conn.query("SELECT * FROM orders;", function(error, result, fields) {
                res.send(result);
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.get('/viewAuth', function(req, res){
    if(req.session.Type == "admin"){
        connection.getConnection(function(err, conn){
            conn.query("SELECT * FROM author;", function(error, result, fields) {
                res.send(result);
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.post('/deleteCust', function(req, res){
    if(req.session.Type == "admin"){
        var Cust_ID = req.body.Cust_ID;
        connection.getConnection(function(err, conn){
            conn.query("DELETE FROM customers WHERE Cust_ID = ?;", [Cust_ID], function(error, result, fields) {
                res.end();
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.post('/updateCust', function(req, res){
    if(req.session.Type == "admin"){
        var Cust_ID = req.body.Cust_ID;
        connection.getConnection(function(err, conn){
            conn.query("UPDATE customers SET Password = ?, First = ?, Last = ?, Type = ? WHERE Cust_ID = ?;", [req.body.Password, req.body.First, req.body.Last, req.body.Type, Cust_ID], function(error, result, fields) {
                res.end();
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.post('/deleteBook', function(req, res){
    if(req.session.Type == "admin"){
        var ISBN = req.body.ISBN;
        connection.getConnection(function(err, conn){
            conn.query("DELETE FROM books WHERE ISBN = ?;", [ISBN], function(error, result, fields) {
                res.end();
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.post('/updateBook', function(req, res){
    if(req.session.Type == "admin"){
        var ISBN = req.body.ISBN;
        connection.getConnection(function(err, conn){
            conn.query("UPDATE books SET Title = ?, Pub_Date = ?, Price = ?, Filename = ? WHERE ISBN = ?;", [req.body.Title, req.body.Pub_Date, req.body.Price, req.body.Filename, ISBN], function(error, result, fields) {
                res.end();
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.post('/deleteAuth', function(req, res){
    if(req.session.Type == "admin"){
        var Author_ID = req.body.Author_ID;
        connection.getConnection(function(err, conn){
            conn.query("DELETE FROM author WHERE Author_ID = ?;", [Author_ID], function(error, result, fields) {
                res.end();
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.post('/updateAuth', function(req, res){
    if(req.session.Type == "admin"){
        var Author_ID = req.body.Author_ID;
        connection.getConnection(function(err, conn){
            conn.query("UPDATE author SET Contact_ID = ?, DoB = ?, Gender = ?, Last = ?, First = ? WHERE Author_ID = ?;", [req.body.Contact_ID, req.body.DoB, req.body.Gender, req.body.Last, req.body.First, Author_ID], function(error, result, fields) {
                if(error){
                    console.log(error);
                }
                res.end();
            });
            conn.release();
        });
    }
    else{
        res.end();
    }
});

server.post('/customQuery', function(req, res){
    if(req.session.Type == "admin"){
        console.log("admin made the custom query: " + req.body.Query);
        connection.getConnection(function(err, conn){
            conn.query(req.body.Query,  function(error, result, fields) {
                if(error){
                    res.send(JSON.stringify({'Status': "Something went wrong!"}));
                }
                else if(result.length > 0){
                    res.send(result);
                }
                else{
                    res.send(JSON.stringify({'Status': "Success!"}));
                }
            });
            conn.release();
        });
    }
});
//END ADMIN PAGE FUNCTIONS
server.listen(42069);