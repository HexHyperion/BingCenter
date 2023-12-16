function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}

waitForElm('.b_vfly').then(elm => {
    elm.style.display = "none";
});

waitForElm('.cib-serp-main').then(elm2 => {
    elm2.setAttribute("alignment","center");
});