var dataArray;
$(document).ready(function () {
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/posts", success: function (result) {
            console.log(result);
            dataArray = result;
            dataArray.forEach(element => {
                var fun = post(element);
                fun();
            });
        }
    });

    var post = function (a) {
        function htmltemplate() {
            var s = "<p>UserID:" + a.userId + "</p><<p>ID:" + a.id + "</p><h1>Title:" + a.title + "</h1><p>Body:" + a.body + "</p><br>";
            //  var htmlObject = $(s);
            // document.getElementById('body').append(s);

            var d1 = document.getElementById('body');
            d1.insertAdjacentHTML('afterend', s);
        }
        return htmltemplate;
    }
});
