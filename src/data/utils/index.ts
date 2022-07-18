const l =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores officiis iurelaborum repudiandae ad aut neque, magni, ipsa error tempore excepturi facere placeatesse molestiae magnam quia eum delectus facilis';

const ll = l.length;

const rl = (min: number) => {
    return l.slice(0, Math.random() * (ll - min) + min);
};

export default {
    l,
    rl
};
