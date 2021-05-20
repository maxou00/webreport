function collectAnalytics(){
    return {
        pageTitle: document.title,
        location: {
            href: location.href,
            origin: location.origin,
            host: location.hostname,
            pathname: location.pathname,
            port: location.port,
            protocol: location.protocol
        },
        screen: {
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth
        },
        navigator: {
            appCodeName: navigator.appCodeName,
            appName: navigator.appName,
            version: navigator.appVersion,
            product: navigator.product,
            platform: navigator.platform,
            language: navigator.language,
            languages: navigator.languages,
            webdriver: navigator.webdriver
        }
    }
}

function sendCollectionReport(tag: string){
    fetch(
        `https://weblytics.ws/report?tag=${tag}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }
        }
    )
    .then((done) => {
        console.log()
    })
}

function launchReporter(){
    let script = document.querySelector("#weblytics-reporter") as HTMLScriptElement;
    if(script){
        let tag = script.dataset.tag as string;
        if(tag) {
            sendCollectionReport(tag);
        }
    }
}

document.addEventListener("load", (ev) => {
    launchReporter();
})