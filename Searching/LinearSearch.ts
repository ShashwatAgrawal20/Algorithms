function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

const foo = [1, 3, 4, 69, 77, 81, 93, 99, 420, 1387, 696969];
console.log("Got = ", linear_search(foo, 69), " Expected = ", true);
console.log("Got = ", linear_search(foo, 83), " Expected = ", false);
console.log("Got = ", linear_search(foo, 420), " Expected = ", true);
console.log("Got = ", linear_search(foo, 78), " Expected = ", false);
console.log("Got = ", linear_search(foo, 696969), " Expected = ", true);
