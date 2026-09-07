# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🚀 Deployment

Automatisches Deployment via GitHub Actions: jeder Push auf `main` baut die Seite
(`npm ci && npm run build`) und lädt `dist/` per `rsync` über SSH auf den Webserver.
Pull Requests bauen nur zum Test, ohne Upload. Manueller Start (inkl. Dry-Run)
über den Actions-Tab → *Build & Deploy* → *Run workflow*.

Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

### Benötigte Repository-Secrets

| Secret | Beschreibung | Beispiel |
| :--- | :--- | :--- |
| `SSH_PRIVATE_KEY` | Privater Deploy-Key (kompletter Inhalt inkl. BEGIN/END-Zeilen) | `-----BEGIN OPENSSH PRIVATE KEY-----…` |
| `SSH_KNOWN_HOSTS` | Ausgabe von `ssh-keyscan -p <port> <host>` | `example.com ssh-ed25519 AAAA…` |
| `SSH_HOST` | Hostname oder IP des Servers | `example.com` |
| `SSH_USER` | SSH-Benutzername | `deploy` |
| `SSH_PORT` | SSH-Port (optional, Standard `22`) | `22` |
| `DEPLOY_PATH` | Zielverzeichnis auf dem Server (Web-Root) | `/var/www/html/` |

> ⚠️ `rsync --delete` löscht im Zielverzeichnis alles, was nicht im Build enthalten ist.
> `.well-known/` (Let's Encrypt) ist ausgenommen. `DEPLOY_PATH` vor dem ersten
> Deployment unbedingt prüfen — am besten einmal per Dry-Run.

### Domain-Kanonisierung

Kanonische Adresse ist **https://www.streamerlab.de**. Aufrufe ohne `www` und
unverschluesselte Aufrufe werden per 301 dorthin umgeleitet. Die Regeln stehen in
[public/.htaccess](public/.htaccess) und werden mitdeployt - Aenderungen also im Repo
vornehmen, nicht auf dem Server.
