// function tail(s: string): string {
//     return s.substring(1);
// }

// https://en.wikipedia.org/wiki/Levenshtein_distance
export function lev(a: string, b: string): number {
    if (b.length === 0) {
        return a.length;
    } else if (a.length === 0) {
        return b.length;
    } else if (a[0] === b[0]) {
        return lev(a.substring(1), b.substring(1));
    } else {
        const x = lev(a.substring(1), b);
        const y = lev(a, b.substring(1));
        const z = lev(a.substring(1), b.substring(2));
        return 1 + Math.min(x, y, z);
    }
}
