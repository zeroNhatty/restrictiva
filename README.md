# restrictiva

This is a browser extension aimed at helping you remove distractions while browsing YouTube. For now, it focuses on removing Shorts, with plans to make the blocked elements fully configurable in the future.

### Build Instructions

**General:**

`1.` Clone the git repo `git clone https://github.com/zeroNhatty/restrictiva` to a directory of your choice, or download the latest release and unzip it wherever you want.

`2.` Proceed to the specific steps for your browser below.

---

**Chromium-Based Browsers (Chrome, Edge, Brave, Opera):**

`1.` Navigate to `chrome://extensions/` in your URL bar.

`2.` Enable **Developer Mode** (usually a toggle in the top-right corner).

`3.` Click on the **Load Unpacked** button in the top-left.

`4.` Select the folder where you cloned or unzipped the project and click **OK**.

`5.` If successful, you will see no error messages. When you open YouTube with the extension enabled, you should see a log in the console saying `"restrictiva has started!"`, and after a brief moment, the Shorts elements will disappear.

---

**Firefox:**

`1.` Navigate to `about:debugging` in your URL bar.

`2.` Click on **This Firefox** in the left-hand sidebar.

`3.` Click on the **Load Temporary Add-on...** button.

`4.` Open your extension's folder and select **any file** inside it (such as your `manifest.json` or `content.js`).

`5.` If successful, the extension will appear under the "Temporary Extensions" list. Open YouTube, open your Web Console (`Ctrl+Shift+K` or `Cmd+Opt+K`), and look for the `"restrictiva has started!"` message to confirm it's running.

> **Note for Firefox:** Temporary add-ons in Firefox automatically unload whenever you restart the browser. For permanent local testing, you can look into using the Mozilla `web-ext` command-line tool!