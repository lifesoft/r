!function(){var e=new XMLHttpRequest;e.open("GET",window.storefront.url),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&(document.open("text/html","replace"),document.write(e.responseText),document.close())},e.send(null)}();