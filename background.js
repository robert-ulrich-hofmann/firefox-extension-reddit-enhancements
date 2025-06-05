browser.webRequest.onBeforeRequest.addListener(
    replaceUrl,
    {
        urls: ["*://www.reddit.com/*"],
        types: ["main_frame"]
    },
    ["blocking"]
);

async function replaceUrl(requestDetails) {
    let redirectUrl = requestDetails.url;

    // use old.reddit.com for home page and subreddits
    if (
        requestDetails.url === "https://www.reddit.com/" ||
        requestDetails.url.includes("www.reddit.com/r")
    ) {
        redirectUrl = redirectUrl.replace("www.", "old.");

        return { redirectUrl: redirectUrl };
    }
}
