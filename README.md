# Eric Österberg

Systemutvecklare i Uppsala. Backend i C#/.NET och Java, fullstack med React och
TypeScript, positioneringssystem och API-integrationer.

Vid sidan av min anställning driver jag [Sluggan](https://sluggan.com): konsultuppdrag
inom systemutveckling, plus hemsidor och appar åt småföretag.

- Webb: [sluggan.com](https://sluggan.com)
- LinkedIn: [in/eric-osterberg](https://www.linkedin.com/in/eric-osterberg)
- Mejl: [eric.osterberg@sluggan.com](mailto:eric.osterberg@sluggan.com)

---

### Om det här repot

Källkoden till sluggan.com ligger i [`sluggan/`](sluggan): Vite, React och
TypeScript, förrenderad till statisk HTML och publicerad på GitHub Pages vid varje
push till `main` ([`deploy.yml`](.github/workflows/deploy.yml)).

```bash
cd sluggan
npm install
npm run dev      # utvecklingsserver
npm run build    # typkontroll, bygge och förrendering till dist/
```
