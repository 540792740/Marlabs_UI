alert("String is : 'abracadabra'");

function ass_14(str) {
    var arr = [];
    var ls = str.length;
    flag = false;
    for(var i = 1; i <= ls; i++){
        for(var j = 0; j <= ls - i; j++){
            var temp = str.slice(j, i + j);
            for(cc in arr){
                console.log(arr[cc])
                if (arr[cc] == temp){
                    console.log(arr[cc]);
                    flag = true;}
            }
            if (flag === false){arr.push(temp)}
            flag = false
        }
            // arr.push(str.slice(j, i + j));
    }
    alert(arr);
}

ass_14("abccd");
// ass_14("abracadabra")