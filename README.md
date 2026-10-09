# Southeast University demo website

A responsive, multi-page static website concept built with HTML, CSS, and JavaScript.

## Pages
- `index.html` — homepage
- `about.html` — about page
- `academics.html` — sample academic programs
- `campus-life.html` — campus life
- `contact.html` — contact form demo
- `login.html` / `signup.html` — demo authentication UI

## Run locally
1. Extract the ZIP file.
2. Open the `southeast-university-website` folder.
3. Double-click `index.html` to open it in your browser.
4. For a better development workflow, open the folder in VS Code and use the Live Server extension.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com/
2. Create a new public repository, for example `southeast-university`.
3. Upload all files and folders in this project (upload the contents, including `assets/`).
4. Open the repository's **Settings → Pages**.
5. Under build/deployment, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
6. Wait for the Pages deployment and open the URL GitHub provides.

## Important security note
This is a front-end demo, not a production university website. Signup stores passwords in the browser's localStorage as plain text, which is NOT secure. Do not use real or reused passwords. For a real site, replace this demo with a secure backend/auth provider (password hashing, server-side sessions, HTTPS, rate limiting, and account recovery). The contact form does not send email until connected to a form backend/service. Replace all sample program and contact details with verified official information before publishing. Ensure you have permission to use the university name, logo, photos, and other branding.


## Professional design update
The updated stylesheet adds a cleaner university-style palette, improved spacing, responsive cards, a redesigned homepage hero, and mobile-friendly layouts.

## Publishing update
Upload the *contents* of this folder to the repository's publishing root so that `index.html` is directly visible on the repository's main Code page. Keep the `assets` folder beside `index.html`, then commit the changes. GitHub Pages should be set to `main` and `/(root)`.

## Important security note
The current login/signup pages are a front-end demo only. Do not use them for real accounts or sensitive information without a secure authentication service and database.
