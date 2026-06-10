console.log("restrictiva has started!");

function disableShorts() {
    try {
        let shortsSections = document.querySelectorAll('#dismissible.style-scope.ytd-rich-shelf-renderer');

        shortsSections.forEach(section => {
            if (section.style.display !== 'none') {
                section.style.display = 'none';
                section.hidden = true;
            }
        });

        console.log("All shorts section hidden successfully!");
    } catch (err) {
        console.log(`ERROR(disableShorts): ${err}`);
    }
}

function disableShortsButton() {
    try {
        let sideBarItems = document.querySelectorAll('#endpoint.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer');

        sideBarItems.forEach(item => {

            itemTitle = item.getAttribute('title');
            itemAria = item.getAttribute('aria-label');
            if (itemTitle == 'Shorts' || itemAria == 'Shorts') {
                item.style.display = 'none';
                item.hidden = true;
                item.disabled = true;
            }
        });
        console.log("Shorts button hidden successfully!");
    } catch (err) {
        console.log(`ERROR(disableShortsButton): ${err}`);
    }
}

// 3 sec delay because we can't hide what we can't see
setTimeout(() => {
    disableShortsButton();
    disableShorts();
}, 3000);
