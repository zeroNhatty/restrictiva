console.log("restrictiva has started!");
setInterval(disableShorts, 6000);


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
        console.log(`ERROR: ${err}`);
    }
}
