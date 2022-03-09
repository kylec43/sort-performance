function generateRandoms(n, min, max) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (max-min+1) + min));
    }

    return arr;
}

module.exports = generateRandoms;