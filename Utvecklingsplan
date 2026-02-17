# Theodal - Utvecklingsplan
## Musikstreamingtjänst

**Projektnamn:** Theodal  
**Domän:** theodal.helgars.se  
**Teknologier:** TypeScript (genomgående), HTML/CSS (markup & styling)  
**Princip:** Maximera TypeScript-användning, minimera JavaScript  
**Typ:** Akademiskt projektarbete  

---

## Projektöversikt

Theodal är en förenklad musikstreamingtjänst inspirerad av Spotify. Projektet utvecklas i tre faser där komplexiteten ökar successivt.

---

## Fas 1: Lokal Demonstration
**Mål:** Fungerande musikspelare som körs lokalt för demonstration

### 1.1 Projektstruktur & Grundläggande Setup
**Prioritet:** KRITISK | **Tid:** 1-2 dagar

- [ ] Skapa mappstruktur
  ```
  theodal/
  ├── src/
  │   ├── client/              # Frontend (TypeScript)
  │   │   ├── index.html
  │   │   ├── styles/
  │   │   │   └── main.css
  │   │   ├── ts/              # All frontend-logik i TS
  │   │   │   ├── app.ts
  │   │   │   ├── player.ts
  │   │   │   ├── queue.ts
  │   │   │   ├── playlist.ts
  │   │   │   ├── api.ts
  │   │   │   └── types.ts     # Delade typer
  │   │   └── components/      # UI-komponenter i TS
  │   ├── server/              # Backend (TypeScript)
  │   │   ├── index.ts
  │   │   ├── routes/
  │   │   ├── controllers/
  │   │   └── types.ts
  │   └── shared/              # Delade typer client/server
  │       └── types.ts
  ├── public/
  │   └── music/
  ├── dist/                    # Kompilerad output
  ├── package.json
  ├── tsconfig.json            # Server TS config
  └── tsconfig.client.json     # Client TS config
  ```
- [ ] Initiera npm-projekt (`npm init`)
- [ ] Installera beroenden:
  - `typescript` - Kompilering
  - `express` - Webbserver
  - `@types/express` - TypeScript-typer för Express
  - `ts-node` - Kör TypeScript direkt (utveckling)
  - `tsx` - Snabbare TS-körning (alternativ)
  - `esbuild` - Snabb bundling av client TS
  - `nodemon` - Auto-reload vid ändringar
- [ ] Konfigurera TypeScript:
  - tsconfig.json (server, strict mode)
  - tsconfig.client.json (browser target)
  - Aktivera `strict: true` för maximal typsäkerhet
- [ ] NPM scripts för utveckling:
  - `dev` - Kör server med hot-reload
  - `build` - Kompilera all TypeScript
  - `build:client` - Bundla frontend
  - `build:server` - Kompilera backend

### 1.2 Backend - Grundläggande Server
**Prioritet:** KRITISK | **Tid:** 2-3 dagar

- [ ] Skapa Express-server i TypeScript
- [ ] Servera statiska filer (HTML, CSS, JS)
- [ ] API-endpoints:
  - `GET /api/tracks` - Hämta alla låtar
  - `GET /api/tracks/:id` - Hämta specifik låt
  - `GET /api/artists` - Hämta alla artister
  - `GET /api/albums` - Hämta alla album
  - `GET /api/stream/:trackId` - Streama musikfil
- [ ] Enkel JSON-databas (fil-baserad) för musikmetadata

### 1.3 Databas/Datastruktur
**Prioritet:** KRITISK | **Tid:** 1-2 dagar

- [ ] Definiera TypeScript-interfaces:
  ```typescript
  interface Track {
    id: string;
    title: string;
    artistId: string;
    albumId: string;
    duration: number;
    filePath: string;
  }
  
  interface Artist {
    id: string;
    name: string;
    imageUrl?: string;
  }
  
  interface Album {
    id: string;
    title: string;
    artistId: string;
    coverUrl?: string;
    year: number;
  }
  ```
- [ ] Skapa music-library.json med testdata
- [ ] Ladda ner/skapa testmusik (royalty-free)

### 1.4 Frontend - HTML/CSS Grund
**Prioritet:** KRITISK | **Tid:** 3-4 dagar

- [ ] Huvudlayout (inspirerad av Spotify):
  - Sidofält (navigation)
  - Huvudinnehåll (dynamiskt)
  - Nedre spelare (alltid synlig)
- [ ] CSS-styling:
  - Mörkt tema
  - Responsiv design (grundläggande)
  - Hover-effekter
- [ ] Sidor/vyer:
  - Startsida
  - Artist-vy
  - Album-vy
  - Spellista-vy

### 1.5 Musikspelare (TypeScript)
**Prioritet:** KRITISK | **Tid:** 3-4 dagar

- [ ] HTML5 Audio-element med custom controls
- [ ] Funktioner:
  - Spela/Pausa
  - Nästa/Föregående låt
  - Progressbar (seek)
  - Volymkontroll
  - Visa aktuell låt-info (titel, artist, albumomslag)
- [ ] TypeScript-klasser:
  ```typescript
  // player.ts
  class PlayerController {
    private audioElement: HTMLAudioElement;
    private currentTrack: Track | null;
    private isPlaying: boolean;
    
    play(): void;
    pause(): void;
    seek(time: number): void;
    setVolume(level: number): void;
    loadTrack(track: Track): Promise<void>;
  }
  ```
- [ ] Event-baserad kommunikation med typad EventEmitter

### 1.6 Kösystem (TypeScript)
**Prioritet:** HÖG | **Tid:** 2-3 dagar

- [ ] TypeScript kö-klass:
  ```typescript
  // queue.ts
  class QueueManager {
    private queue: Track[];
    private currentIndex: number;
    
    add(track: Track): void;
    remove(index: number): void;
    next(): Track | null;
    previous(): Track | null;
    clear(): void;
    shuffle(): void;
    getAll(): ReadonlyArray<Track>;
  }
  ```
- [ ] Visa kön i UI
- [ ] "Spela nästa" funktionalitet
- [ ] Drag-and-drop omordning (typat)

### 1.7 Spellistor (TypeScript)
**Prioritet:** HÖG | **Tid:** 2-3 dagar

- [ ] TypeScript spellista-hantering:
  ```typescript
  // playlist.ts
  interface Playlist {
    id: string;
    name: string;
    tracks: Track[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  class PlaylistManager {
    private playlists: Map<string, Playlist>;
    
    create(name: string): Playlist;
    addTrack(playlistId: string, track: Track): void;
    removeTrack(playlistId: string, trackId: string): void;
    delete(playlistId: string): void;
    save(): void;  // localStorage för fas 1
    load(): void;
  }
  ```
- [ ] Visa spellistor i sidofältet
- [ ] Spela hela spellistan

### 1.8 Sök & Navigering
**Prioritet:** MEDIUM | **Tid:** 2 dagar

- [ ] Sökfält i header
- [ ] Sök i låtar, artister, album
- [ ] Filtrering av resultat
- [ ] Klickbar navigation mellan artister/album/låtar

---

## Fas 2: LAN-hosting
**Mål:** Tjänsten kan nås av andra enheter på samma nätverk

### 2.1 Server-konfiguration för LAN
**Prioritet:** KRITISK | **Tid:** 1 dag

- [ ] Konfigurera Express att lyssna på 0.0.0.0
- [ ] Hitta och visa lokal IP-adress vid start
- [ ] Testa anslutning från annan enhet
- [ ] Dokumentera brandväggsregler (Windows)

### 2.2 Grundläggande Användarhantering
**Prioritet:** HÖG | **Tid:** 2-3 dagar

- [ ] Session-hantering (express-session)
- [ ] Enkel inloggning (username/password)
- [ ] Lagra användardata i JSON-fil
- [ ] Separata spellistor per användare

### 2.3 Persistens
**Prioritet:** HÖG | **Tid:** 2 dagar

- [ ] Migrera från localStorage till server-lagring
- [ ] API för spellistor:
  - `POST /api/playlists` - Skapa spellista
  - `PUT /api/playlists/:id` - Uppdatera spellista
  - `DELETE /api/playlists/:id` - Ta bort spellista
  - `GET /api/playlists` - Hämta användarens spellistor

### 2.4 Förbättrad Streaming
**Prioritet:** MEDIUM | **Tid:** 1-2 dagar

- [ ] HTTP Range requests (för seeking)
- [ ] Buffring-indikator i UI
- [ ] Hantera nätverksfel gracefult

### 2.5 Mobilanpassning
**Prioritet:** MEDIUM | **Tid:** 2 dagar

- [ ] Responsiv CSS för mobila enheter
- [ ] Touch-vänliga kontroller
- [ ] Anpassad layout för små skärmar

---

## Fas 3: Publik Publicering
**Mål:** Tjänsten körs på Ubuntu-server och är tillgänglig på theodal.helgars.se

### 3.1 Server-förberedelser
**Prioritet:** KRITISK | **Tid:** 1-2 dagar

- [ ] Ubuntu server setup (SSH-åtkomst)
- [ ] Installera Node.js på servern
- [ ] Installera PM2 (process manager)
- [ ] Klona repo till server

### 3.2 Domän & SSL
**Prioritet:** KRITISK | **Tid:** 1 dag

- [ ] Konfigurera DNS för theodal.helgars.se
- [ ] Installera Nginx som reverse proxy
- [ ] Konfigurera SSL med Let's Encrypt (HTTPS)
- [ ] Nginx-konfiguration:
  ```nginx
  server {
      listen 443 ssl;
      server_name theodal.helgars.se;
      
      location / {
          proxy_pass http://localhost:3000;
      }
  }
  ```

### 3.3 Databasuppgradering (Valfritt)
**Prioritet:** MEDIUM | **Tid:** 2-3 dagar

- [ ] Överväg SQLite eller MongoDB
- [ ] Migrera från JSON-filer
- [ ] Förbättrad prestanda för större dataset

### 3.4 Säkerhet
**Prioritet:** HÖG | **Tid:** 2 dagar

- [ ] Lösenordshashning (bcrypt)
- [ ] Rate limiting
- [ ] Helmet.js för HTTP-headers
- [ ] Input-validering
- [ ] CORS-konfiguration

### 3.5 Deployment Pipeline
**Prioritet:** MEDIUM | **Tid:** 1 dag

- [ ] Git-baserad deployment
- [ ] PM2 ecosystem-fil
- [ ] Enkel deploy-script
- [ ] Logghantering

---

## Funktionslista (Prioritetsordning)

### Must-have (Fas 1)
1. ✅ Spela musik
2. ✅ Pausa/Fortsätt
3. ✅ Nästa/Föregående låt
4. ✅ Visa alla låtar
5. ✅ Visa artister
6. ✅ Visa album
7. ✅ Progressbar
8. ✅ Volymkontroll

### Should-have (Fas 1-2)
1. ⬜ Kösystem
2. ⬜ Spellistor (skapa, redigera)
3. ⬜ Sökfunktion
4. ⬜ Användarinloggning

### Nice-to-have (Fas 2-3)
1. ⬜ Shuffle-läge
2. ⬜ Repeat (låt/spellista)
3. ⬜ Favoritmarkering
4. ⬜ Senast spelade
5. ⬜ Dynamiska rekommendationer

---

## Teknisk Stack (Sammanfattning)

| Komponent | Teknologi |
|-----------|-----------|
| **Språk** | TypeScript (100% av logik) |
| Frontend | HTML5 (markup), CSS3 (styling), TypeScript (all logik) |
| Backend | Node.js, Express, TypeScript |
| Typer | Delade interfaces mellan client/server |
| Bundling | esbuild (snabb TS→JS kompilering för browser) |
| Databas | JSON-filer → SQLite (fas 3) |
| Streaming | HTML5 Audio API (typat) |
| Server | Ubuntu, Nginx, PM2 |
| SSL | Let's Encrypt |

### TypeScript-principer
- `strict: true` i alla tsconfig-filer
- Inga `any`-typer (använd `unknown` vid behov)
- Delade typer i `shared/types.ts`
- Explicit return-typer på alla funktioner
- Interface över type för objekt-definitioner

---

## Tidsuppskattning

| Fas | Uppskattad tid |
|-----|----------------|
| Fas 1 | 2-3 veckor |
| Fas 2 | 1-2 veckor |
| Fas 3 | 1 vecka |
| **Totalt** | **4-6 veckor** |

---

## Risker & Mitigation

| Risk | Sannolikhet | Åtgärd |
|------|-------------|--------|
| Komplexa audio-API:er | Medium | Använd HTML5 Audio, undvik Web Audio API |
| CORS-problem | Hög | Konfigurerar CORS tidigt i fas 1 |
| Stora musikfiler | Medium | Begränsa filstorlek, använd range requests |
| Serveråtkomst | Låg | Förbered backup-plan (t.ex. Heroku) |

---

## Nästa steg

1. ⬜ Skapa GitHub-repo för projektet
2. ⬜ Initiera npm-projekt
3. ⬜ Skapa grundläggande mappstruktur
4. ⬜ Hitta royalty-free testmusik
5. ⬜ Börja med Express-server

---

*Senast uppdaterad: 2026-02-17*
