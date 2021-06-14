function collectAnalytics(){
    let navigatorExtras: any = {};
    let anyfied = navigator as any;
    if(anyfied.connection) {
        navigatorExtras.connection = {
            effectiveType: anyfied.connection.effectiveType, // 2g 3g 4g
            type: anyfied.connection.type /// wifi bluetooth ethernet wimax...
        }
    }

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
            version: navigator.appVersion,
            vendor: navigator.vendor,
            language: navigator.language,
            webdriver: navigator.webdriver,
            userAgent: navigator.userAgent,
            maxTouchPoints: navigator.maxTouchPoints,
            concurrency: navigator.hardwareConcurrency,
            extras: navigatorExtras
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
        console.log("Sent Report to weblytics");
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