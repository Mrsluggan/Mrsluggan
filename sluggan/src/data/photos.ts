/**
 * The gallery, in the order it should appear. This file is yours to edit —
 * nothing generates or rewrites it.
 *
 * To add a picture:
 *   1. drop the original into photos-src/  (any size, straight off the camera)
 *   2. run `npm run photos:build`          (converts, resizes, strips EXIF)
 *   3. add a row here                      (the script prints one for you)
 *
 * `file` is the name inside src/assets/photos/. Width and height are not
 * listed here on purpose — the build script keeps those in photo-sizes.json
 * so you never have to measure anything by hand.
 */

export type Photo = {
    /** filename inside src/assets/photos/ */
    file: string;
    /** what the picture shows, for screen readers and when it fails to load */
    alt: string;
    /** shown under the picture; both optional — a few of these have no EXIF
     *  left to go on, and a made-up caption is worse than none */
    place?: string;
    year?: number;
};

export const photos: Photo[] = [
    {
        file: "img-0653.webp",
        alt: "Uppsala cathedral's twin spires against a deep blue dusk sky, the city lit up below",
        place: "Uppsala",
        year: 2026,
    },
    {
        file: "img-0007.webp",
        alt: "A mallard drifting on dark water, the bank thick with fallen autumn leaves",
        place: "Uppsala",
        year: 2025,
    },
    {
        file: "img-1602.webp",
        alt: "A volcanic ridge rising out of a solid floor of cloud, blue sky above",
        place: "Pico do Arieiro, Madeira",
        year: 2024,
    },
    {
        file: "img-0800.webp",
        alt: "A green river winding through a steep wooded canyon",
        place: "Krka, Croatia",
        year: 2018,
    },
    {
        file: "img-9910.webp",
        alt: "A black cocker spaniel sitting in tall summer grass and cornflowers, mouth open",
        place: "Uppsala",
        year: 2025,
    },
    {
        file: "img-0759.webp",
        alt: "The sun setting straight into a calm lake, seen from a boat",
        place: "Knivsta",
        year: 2022,
    },
    {
        file: "img-0963.webp",
        alt: "A sparrow perched on a wire fence against a bright sky",
        place: "Gävle",
        year: 2026,
    },
    {
        file: "img-0135.webp",
        alt: "A red Pontiac Firebird parked outside a shop in the blue evening light",
        place: "Uppsala",
        year: 2023,
    },
    {
        file: "img-1319.webp",
        alt: "A campfire on the shore at dusk, seen from inside a tent",
        place: "Gotland",
        year: 2024,
    },
    {
        file: "img-0158.webp",
        alt: "Close portrait of a black cocker spaniel, the background thrown out of focus",
        place: "Stockholm",
        year: 2025,
    },
    {
        file: "img-0689.webp",
        alt: "The moon over open water, a jetty and railing in the foreground",
        place: "Uppland",
        year: 2026,
    },
    {
        file: "img-1266.webp",
        alt: "The sun going down over open sea, a contrail crossing the sky",
        place: "The Baltic",
        year: 2024,
    },
    {
        file: "img-2497.webp",
        alt: "Daylight coming through the far end of a concrete culvert",
        place: "Stockholm",
        year: 2025,
    },
    {
        file: "img-2130.webp",
        alt: "Moss-covered rocks and a stream with the last of the snow melting off",
        place: "Uppland",
        year: 2025,
    },
    {
        file: "img-0933.webp",
        alt: "A red road bike leaning against a post beside an empty road at golden hour",
        place: "Uppsala",
        year: 2026,
    },
    {
        file: "img-1539.webp",
        alt: "The dog in a pink harness, snow stuck to her face",
        place: "Uppland",
        year: 2023,
    },
    {
        file: "img-0186.webp",
        alt: "The Firebird in an empty car park under a wide summer sky",
        place: "Uppsala",
        year: 2023,
    },
    {
        file: "img-9062.webp",
        alt: "The dog in a winter coat, buried up to her chest in fresh snow",
        place: "Jämtland",
        year: 2024,
    },
    {
        file: "img-0116.webp",
        alt: "The spaniel asleep across a blue armchair",
        place: "Uppsala",
        year: 2025,
    },
    {
        file: "img-8227.webp",
        alt: "A bright yellow house front in the evening sun",
        place: "Funchal, Madeira",
        year: 2024,
    },
    {
        file: "img-1413.webp",
        alt: "A crumbling stone building on a dry hillside under a cloudless sky",
        place: "Andalusia, Spain",
        year: 2024,
    },
    {
        file: "img-0233.webp",
        alt: "Sitting outdoors holding the spaniel, both looking at the camera",
        place: "Uppland",
        year: 2025,
    },
    {
        file: "img-1978.webp",
        alt: "A whisky and a pint of Guinness on a pub table",
        place: "Uppsala",
        year: 2026,
    },
    {
        file: "img-0403.webp",
        alt: "A car's instrument cluster glowing red in the dark",
        place: "Uppland",
        year: 2023,
    },
    {
        file: "img-4559.webp",
        alt: "The Firebird stopped at the roadside with the hood up, a tow truck ahead",
        place: "Uppsala",
        year: 2023,
    },
    {
        file: "img-0191.webp",
        alt: "The Firebird parked by a wooden fence, the dog looking out of the window",
        place: "Uppland",
        year: 2023,
    },
    {
        file: "img-1440.webp",
        alt: "Sitting on a dry, sunlit hillside above the coast",
        place: "Málaga, Spain",
        year: 2024,
    },
    {
        file: "img-0170.webp",
        alt: "Two of us at a packed gig, throwing horns at the camera",
        place: "Stockholm",
        year: 2025,
    },
    {
        file: "735290ea-ea9d-4b08-98e5-5718b84f2ffb.webp",
        alt: "Standing under exposed steel beams in a building stripped back to the frame",
        place: "Uppsala",
        // no date in the EXIF
    },
    {
        file: "img-2514.webp",
        alt: "A hand-painted blue Warhammer dreadnought held up in front of a keyboard",
        // no EXIF left on this one — fill in place/year if you know them
    },
    {
        file: "img-0413.webp",
        alt: "A T-34 tank parked in a museum hall",
        // no EXIF left on this one — fill in place/year if you know them
    },
    {
        file: "img-1102.webp",
        alt: "Holding up a pike on the deck of a boat",
        // no EXIF left on this one — fill in place/year if you know them
    },
    {
        file: "img-0173.webp",
        alt: "A car at the pumps on a snowy night, forecourt lights flaring",
        // no EXIF left on this one — fill in place/year if you know them
    },
    {
        file: "img-1253.webp",
        alt: "A beer can standing in the snow, sun flaring through the spruce",
        // no EXIF left on this one — fill in place/year if you know them
    },
    {
        file: "img-75791.webp",
        alt: "Walking down a sandy path through the dunes towards the sea",
        // no EXIF left on this one — fill in place/year if you know them
    },
    {
        file: "img-76271.webp",
        alt: "A bare, weathered dead tree standing alone in a meadow",
        // no EXIF left on this one — fill in place/year if you know them
    },
    {
        file: "img-0014.webp",
        alt: "The dog curled up asleep in a corner",
        // no EXIF left on this one — fill in place/year if you know them
    },
];
