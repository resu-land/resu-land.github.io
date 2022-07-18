import { Album, type Timeline } from '$data/types/music';

const we_insist = new Album(
    'Max Roach',
    'We Insist! - Freedom Now Suite',
    'we_insist_freedom_now_suite.jpg',
    1960
);
const free_jazz = new Album(
    'Ornette Coleman',
    'Free Jazz - A Collective Improvisation',
    'free_jazz_a_collective_improvisation.jpg',
    1960
);
const black_saint = new Album(
    'Charles Mingus',
    'The Black Saint And The Sinner Lady',
    'the_black_saint_and_the_sinner_lady.jpg',
    1963
);
const a_love_supreme = new Album('John Coltrane', 'A Love Supreme', 'a_love_supreme.jpg', 1964);
const spiritual_unity = new Album('Albert Ayler', 'Spiritual Unity', 'spiritual_unity.jpg', 1964);
const out_to_lunch = new Album('Eric Dolphy', 'Out To Lunch!', 'out_to_lunch.jpg', 1964);
const ascension = new Album('John Coltrane', 'Ascension', 'ascension.jpg', 1965);
const the_magic_city = new Album('Sun Ra', 'The Magic City', 'the_magic_city.jpg', 1965);
const unit_structures = new Album('Cecil Taylor', 'Unit Structures', 'unit_structures.jpg', 1966);
const sound = new Album('Roscoe Mitchell', 'Sound', 'sound.jpg', 1966);
const symphony_for_improvisers = new Album(
    'Don Cherry',
    'Symphony For Improvisers',
    'symphony_for_improvisers.jpg',
    1966
);

export const timeline: Timeline = new Map();
timeline.set(1960, [
    // 1960 albums
    we_insist,
    free_jazz
]);
timeline.set(1963, [
    // 1963 albums
    black_saint
]);
timeline.set(1964, [
    // 1964 albums
    a_love_supreme,
    spiritual_unity,
    out_to_lunch
]);
timeline.set(1965, [
    // 1965 albums
    ascension,
    the_magic_city
]);
timeline.set(1966, [
    // 1966 albums
    unit_structures,
    sound,
    symphony_for_improvisers
]);
