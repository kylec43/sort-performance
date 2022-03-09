function performance(name, func, args) {

    args = JSON.parse(JSON.stringify(args));
    console.log("---------------");
    console.log(name);
    const start = new Date();
    func(...args);
    const end = new Date();
    console.log(`Performance: ${end - start}ms`);
    console.log("---------------");
}


module.exports = performance;