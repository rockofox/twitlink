let elements = document.querySelectorAll('p');

function twitterLink(str, p1, offset, s) {
    return `<a href="https://twitter.com/${str.split('@twitter.com')[0]}">${str}</a>`;
}

function tumblrLink(str, p1, offset, s) {
    return `<a href="https://twitter.com/${str.split('@twitter.com')[0]}">${str}</a>`;
}

for (const element of elements) {
    element.innerHTML = element.innerHTML.replace(/@\w+@tumblr.com/g, tumblrLink);
    element.innerHTML = element.innerHTML.replace(/@\w+@twitter.com/g, twitterLink);
}
