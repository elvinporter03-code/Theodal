// Hjälpfunktion för att ta bort första elementet i en array
export function rebuild_array(origin: Array<string>) : Array<string> {
    let tmp : Array<string> = [];

    for(let i = 1; i < origin.length; i++) {
        tmp[i-1] = origin [i];
    }

    return tmp;
}
// Fisher–Yates‑shuffle
export function shuffle_array<T>(arr: Array<T>): Array<T> {
    let a = [...arr];

    for (let i = a.length - 1; i > 0; i--) {       
        const j = Math.floor(Math.random() * (i + 1));  // Välj en slumpmässig index från 0 till i
        [a[i], a[j]] = [a[j], a[i]];                    // Byt plats på elementen på index i och j
    }

    return a;
}