export function hello_world(): void {
    console.log("HEJ VÄRLDEN");
}

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}
export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

export function main(): void {
    hello_world();
    console.log("Addition: ", add(5, 3));
    console.log("Subtraction: ", subtract(5, 3));
    console.log("Multiplication: ", multiply(5, 3));
    console.log("Division: ", divide(5, 3));
}

export function göra_något_först_fråga_sen(): void {
    console.log("Gör något först, fråga sen!");
}