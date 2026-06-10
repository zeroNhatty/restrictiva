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
        let shortsButton = document.querySelector('.style-scope ytd-guide-entry-renderer');

        if (shortsButton.style.display !== 'none') {
            shortsButton.style.display = 'none';
            shortsButton.hidden = true;
        }

        console.log("Shorts button hidden successfully!");
    } catch (err) {
        console.log(`ERROR(disableShortsButton): ${err}`);
    }
}

disableShortsButton();
disableShorts();
