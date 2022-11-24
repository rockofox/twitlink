function twitterLink(str, p1, offset, s) {
    return `<a href="https://twitter.com/${str.split('@twitter.com')[0]}">${str}</a>`;
}

function tumblrLink(str, p1, offset, s) {
    return `<a href="https://tumblr.com/${str.split('@tumblr.com')[0]}">${str}</a>`;
}
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
function fixLinks() {
    let elements = document.querySelectorAll('p');

    for (const element of elements) {
        element.innerHTML = element.innerHTML.replace(/@\w+@tumblr.com/g, tumblrLink);
        element.innerHTML = element.innerHTML.replace(/@\w+@twitter.com/g, twitterLink);
    }

}
if(document.getElementById('mastodon') !== undefined) {
    waitForElm('.status').then(fixLinks);
}
