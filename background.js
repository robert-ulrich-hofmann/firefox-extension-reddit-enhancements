settings = {
    enableReplaceURL: true
};

if (settings.enableReplaceURL) {
    browser.webRequest.onBeforeRequest.addListener(
        replaceUrl,
        {
            urls: ["*://www.reddit.com/r*"],
            types: ["main_frame"],
        },
        ["blocking"]
    );
}

function replaceUrl(requestDetails) {
    if (requestDetails.url.includes("www.reddit.com/r")) {
        const redirectUrl = requestDetails.url.replace("www.", "old.");

        return { redirectUrl: redirectUrl };
    }
}
