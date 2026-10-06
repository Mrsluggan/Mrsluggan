const r=[{slug:"noq",title:"noQ — hemsida, CMS och app för sovplatser",summary:"Som volontär i en ideell förening för hemlösa i Stockholm byggde jag publiceringsverktyget för deras hemsida och var med och startade appen där härbärgen hanterar förfrågningar om sovplatser.",client:"noQ",kind:"Volontärarbete",year:"2024",role:"Frontendutvecklare i ett team av volontärer",tech:["React","Vite","Tailwind CSS","Firebase","Draft.js"],link:"",cover:{src:"/img/projekt/noq/hemsida-1600.webp",srcset:"/img/projekt/noq/hemsida-800.webp 800w, /img/projekt/noq/hemsida-1600.webp 1600w",width:1600,height:1e3},ogImage:"/img/projekt/noq/og.jpg",html:`<h2>Om noQ</h2>
<p>noQ är en ideell tech-for-good-förening där alla jobbar ideellt. Målet är att göra det lättare för akut hemlösa i Stockholm att hitta en sovplats för natten, för härbärgen att administrera sina platser och för stadsdelarna att ha koll på läget. Under 2024 var jag en av volontärerna och jobbade med två delar.</p>
<h2>Hemsidan och dess CMS</h2>
<p>Föreningen ville kunna berätta om sitt arbete själva, utan att en utvecklare behövde lägga in varje text. Vi var fyra utvecklare som byggde en ny hemsida med ett eget CMS, i React och Firebase.</p>
<ul>
<li><strong>Nyheter.</strong> Jag byggde delen av CMS:et där man skapar, listar, redigerar och tar bort nyhetsartiklar.</li>
<li><strong>Redigeraren.</strong> Jag byggde textredigeraren som används i både nyheter och informationsartiklar, med rubriker, listor, fetstil och kursiv. Texten sparas strukturerat och visas som HTML på sidan, så den som skriver aldrig behöver röra kod.</li>
<li><strong>Nattens temperatur.</strong> Överst på hemsidan visas hur kallt det blir i Stockholm i natt, hämtat från ett öppet väder-API. Det är en enkel påminnelse om varför sovplatserna behövs.</li>
</ul>
<figure><img src="/img/projekt/noq/cms-nyhet-1600.webp" srcset="/img/projekt/noq/cms-nyhet-800.webp 800w, /img/projekt/noq/cms-nyhet-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 900px" width="1600" height="1000" alt="CMS:et, där föreningen skriver och publicerar nyheter själv" loading="lazy" decoding="async"><figcaption>CMS:et, där föreningen skriver och publicerar nyheter själv</figcaption></figure>
<p>Jag granskade och mergade också andras pull requests och uppdaterade sidorna när kraven ändrades.</p>
<h2>Appen för härbärgen</h2>
<p>Efter hemsidan gick jag över till noQ:s huvudprodukt: webbappen där härbärgen tar emot och hanterar förfrågningar om sovplatser.</p>
<ul>
<li><strong>Satte upp frontend-projektet från grunden</strong>, med Vite, React och Tailwind.</li>
<li><strong>Byggde grundlayouten</strong> med sidomeny och navigering, och de första datamodellerna för bokningar, härbärgen och lediga platser.</li>
<li><strong>Byggde förfrågningssidan</strong>, där härbärget ser inkomna förfrågningar och tilldelar dem en plats.</li>
</ul>
<figure><img src="/img/projekt/noq/forfragningar-1600.webp" srcset="/img/projekt/noq/forfragningar-800.webp 800w, /img/projekt/noq/forfragningar-1600.webp 1600w" sizes="(max-width: 900px) 100vw, 900px" width="1600" height="1000" alt="Förfrågningssidan i appen för härbärgen, med testdata" loading="lazy" decoding="async"><figcaption>Förfrågningssidan i appen för härbärgen, med testdata</figcaption></figure>
<ul>
<li><strong>Skrev dokumentationen</strong> för nya volontärer och granskade andras kod. I ett projekt där folk kommer och går hela tiden är det minst lika viktigt som själva koden.</li>
</ul>
<p>Senare startade jag även appen för stadsdelarnas handläggare, med inloggning och grundlayout, och gjorde en mindre fix i Django-backenden.</p>
<p>Hemsidan och den här versionen av appen finns inte längre online. Skärmbilderna är tagna 2026, när jag körde koden från GitHub lokalt igen. Texten i formuläret och personerna i listan är exempel.</p>
<h2>Vad jag tar med mig</h2>
<p>Att bygga i ett team av volontärer som kommer och går lär en att skriva kod som någon annan förstår i morgon, och att dokumentera det man gör. Och att även små saker, som en temperatur i ett sidhuvud, kan göra en sajt mer mänsklig.</p>
`}],n=e=>`/projekt/${e.slug}/`;export{n as a,r as p};
