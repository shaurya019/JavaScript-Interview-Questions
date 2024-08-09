const obj = {
    a: 'apple',
    b: 'banana',
    c: 'apple',
    d: 'orange',
    e: 'banana',
};

const m = new Map();

for (const x in obj) {
    const v = obj[x];
    if (m.has(v)) {
        m.set(v, m.get(v)+1);
    } else {
        m.set(v, 1);
    }
}