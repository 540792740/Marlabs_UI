var http = require("http"); // Import Node.js core module



var server = http.createServer(function(req, res) {

    //create web server

    if (req.url == "/") {

        //check the URL of the current request



        // set response header

        res.writeHead(200, { "Content-Type": "text/html" });



        // set response content

        var numb1=[1,2,3,4,5,6,7,8,9];

        // var math1=["+","-","","*","/"]

        var math1=["+","-","","*","/"]

        var result1=0;

        var result2="";

        (function fn1to9(){

            for(let n1=0;n1<math1.length;n1++){

                for(let n2=0;n2<math1.length;n2++){

                    for(let n3=0;n3<math1.length;n3++){

                        for(let n4=0;n4<math1.length;n4++){

                            for(let n5=0;n5<math1.length;n5++){

                                for(let n6=0;n6<math1.length;n6++){

                                    for(let n7=0;n7<math1.length;n7++){

                                        for(let n8=0;n8<math1.length;n8++){

                                            result1=1+math1[n1]+2+math1[n2]+3+math1[n3]+4+math1[n4]+5+math1[n5]+ 6+math1[n6]+7+math1[n7]+8+math1[n8]+9;



                                            if ( eval(result1)==100 ) {



                                                result2=result2+"<br>"+result1+"=100"+"<br>";

                                                // console.log(result1+"=100");



                                            }



                                        };

                                    };

                                };

                            };

                        };

                    };

                };

            };



            res.write("<br>"+result2);

        })();

        res.end();

    }



});



server.listen(5000); //6 - listen for any incoming requests



console.log("Node.js web server at port 5000 is running..");