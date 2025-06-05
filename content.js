document.cookie = "over18=1; domain=.reddit.com; path=/; secure";
document.cookie =
    "eu_cookie=%22opted%22:true%2C%22nonessential%22:true; domain=.reddit.com; path=/; secure";

// initial load
window.addEventListener("DOMContentLoaded", checkIncludeNsfwResults);

// navigation from threadlist into thread
const observer = new MutationObserver(checkIncludeNsfwResults);
observer.observe(document.body, { childList: true, subtree: true });

function checkIncludeNsfwResults() {
    const checkbox = document.querySelector('input[name="include_over_18"]');

    if (checkbox && !checkbox.checked) {
        checkbox.click();
    }
}
