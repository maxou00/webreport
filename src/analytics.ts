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

function sendCollectionReport(){
    fetch(
        `https://weblytics.ws/report?tag=nu3Iuzo5AiP0doovieV6kohxaVecughiluid7gaix6aiwahshiezee6iochuvai7`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Report-Key': 'appId'
            }
        }
    )
    .then((done) => {

    })
}

sendCollectionReport();