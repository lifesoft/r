!function () {
    var request = new XMLHttpRequest();

    request.open("GET", window.storefront.url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {

            //response handling code
            document.open("text/html", "replace");

// console.log(request.responseText.replace(/\[url\s?=\s?"?(.*?)"?\](.*?)/g, '<script src="$1">$2</script>'))

const parser = new DOMParser();
const doc = parser.parseFromString(request.responseText, "text/html");

            [...doc.querySelectorAll('script'), ...doc.querySelectorAll('a'), ...doc.querySelectorAll('img'),...doc.querySelectorAll('link')]
                .forEach((element) => {
                    // if(!element.length){
                    //     return;
                    // }
                   
                    let attribute = element.hasAttribute('src') ? 'src' : element.hasAttribute('href') ? 'href' : url;
                    console.log(element[attribute])
                    if (!String(element[attribute] ?? '').startsWith('http')) {
                        element[attribute] = window.storefront.url + element[attribute];
                    }

                    console.log(element)
                })
                
            document.write(doc.documentElement.innerHTML);

            document.close();
        }
    };
    request.send(null);
}()
