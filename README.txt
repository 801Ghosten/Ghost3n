FILES
- index.html: page structure and links
- styles.css: all visual styling
- script.js: opens service and resource links in a new tab

USE
1. Keep index.html and styles.css in the same folder.
2. Open index.html in a browser or serve the folder through Nginx.
3. Edit only the href values in index.html when lab addresses change.

NOTES
- The fixed sidebar is now made of native HTML dropdowns using <details>/<summary>.
- No JavaScript framework is required. The small script.js file only opens service and resource links in a new tab.
- The resource table is offset beside the sidebar on desktop and becomes horizontally scrollable on phones.
- file:// Samba links may be blocked by some browsers when the page is served over HTTP/HTTPS. In that case, open the UNC paths directly in Windows Explorer.

- A second table below the cyber matrix provides OSINT collections, people/account research, infrastructure research, and media/archive tools.
- The raw Start.me page source was not embedded; only the useful public resource link was retained, avoiding third-party consent, analytics, and application-loader scripts.

- The complete Nixintel OSINT library contains 403 unique direct links imported from nixintel-osint-links.csv.
- The complete library is grouped alphabetically, searchable, and includes expand/collapse controls.
- Re-run the import process with a newer CSV whenever the source collection changes.
