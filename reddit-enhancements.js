// url always old. leave unchanged
function replaceURL() {
    const originalURL = window.location.toString();

    // todo does this work for manually entering "reddit.com/b"
    if (originalURL.includes("www.reddit.com")) {
        const newURL = originalURL.replace("www.", "old.");
        window.location.assign(newURL);
    }
}

// cookies always all always never leave unchanged
// opted vs nonessential = 2x3 options in UI
// domain old.reddit.com vs .reddit.com?
cookie eu_cookie    {%22opted%22:true%2C%22nonessential%22:true}

// 18+ always yes always no leave unchanged
// cookie 18+ 2 options in UI
cookie over18   1
