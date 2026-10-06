# Projekt

Varje mapp här blir en egen sida på `sluggan.com/projekt/<mappnamn>/` och ett kort på `/projekt/`.

## Lägga till ett projekt

1. Skapa en mapp med ett kort namn med små bokstäver och bindestreck, t.ex. `kabo-pizzeria`. Namnet blir adressen.
2. Lägg en `index.md` i mappen (kopiera gärna från `noq/`) och bilderna bredvid den.
3. `npm run dev` och öppna `http://localhost:5173/projekt/_mall/?slug=kabo-pizzeria` för att se sidan.
4. Commit och push. Bilderna optimeras och sidan, kortet och sitemapen skapas när sajten byggs.

## index.md

```
---
titel: Kåbo Pizzeria — ny hemsida
kort: En mening som syns på kortet och i Googles sökresultat.
kund: Kåbo Pizzeria
typ: Kunduppdrag
år: 2026
roll: Design och utveckling
teknik: React, TypeScript
länk: https://exempel.se
omslag: omslag.png
---

## Utmaningen
Vad kunden behövde.

## Vad jag gjorde
Hur du löste det.

![Bildtext som syns under bilden](startsida.png)

![Mobil](mobil-1.png)
![Mobil, meny](mobil-2.png)

## Resultatet
Gärna något mätbart.

> Ett citat från kunden, om du har ett.
```

- `titel`, `kort` och `år` måste finnas. Resten är valfritt.
- `omslag` är bilden överst och på kortet. Den beskärs uppifrån till 1200×630 när länken delas.
- En bild ensam på en rad blir en stor bild med bildtext. Flera bilder på rader direkt efter varandra blir ett galleri.
- Bilder kan vara png, jpg eller webp i valfri storlek. Ta skärmdumpar i full storlek, så skalas de ner automatiskt.
- Fråga kunden innan du visar deras projekt.
