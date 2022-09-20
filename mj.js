!function () {
    var request = new XMLHttpRequest();

    request.open("GET", window.storefront.url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {

            //response handling code
            document.open("text/html", "replace");
            console.log(request.responseText)
            // console.log(request.responseText.replace(/\[url\s?=\s?"?(.*?)"?\](.*?)/g, '<script src="$1">$2</script>'))

// console.log(request.responseText.replace(/<script(\b[^>]*)src="(.*)"(.*)>([\s\S]*?)<\/script\b[^>]*>/g, '<scriptsrc="https://we$2"$3>$4</scriptsrc=>'))
// console.log(request.responseText)
            // const parser = new DOMParser();
            // const doc = parser.parseFromString(request.responseText, "text/html");

            // [...doc.querySelectorAll('script'), ...doc.querySelectorAll('a'), ...doc.querySelectorAll('img'), ...doc.querySelectorAll('link')]
            //     .forEach((element) => {
            //         // if(!element.length){
            //         //     return;
            //         // }

            //         let attribute = element.hasAttribute('src') ? 'src' : element.hasAttribute('href') ? 'href' : url;
            //         console.log(element[attribute])
            //         // if (!String(element[attribute] ?? '').startsWith('http')) {
            //         //     element[attribute] = window.storefront.url + element[attribute];
            //         // }

            //         element[attribute] = element[attribute].replace(location.origin, window.storefront.url);

            //         console.log(element)
            //     })

            document.write(request.responseText.replace(/((src|href)=")((?!(http|\/)))/g, '$1https://test.storestack.io/').replace('https://test.storestack.io//', 'https://test.storestack.io/'));

            document.close();
        }
    };
    request.send(null);
}()
