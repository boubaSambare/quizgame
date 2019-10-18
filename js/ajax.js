function ajaxGet(url ) {
        var xmlhttp = new XMLHttpRequest();
        var reponse = []
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                reponse.push( JSON.parse(xmlhttp.responseText));
                
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
       return reponse
}