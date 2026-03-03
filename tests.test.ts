import { rebuild_array, shuffle_array } from "./tester_func";

// Rebuild array som tar bort första elementet ur en array, full array
test("rebuild_array", () => {
    const arr = ["1", "2", "3", "4", "5"];
    const expected = ["2", "3", "4", "5"];
    expect(rebuild_array(arr)).toEqual(expected);
});

// Rebuild array, one element
test("rebuild_array", () => {
    const arr : Array<string> = ["1"];
    const expected : Array<string> = [];
    expect(rebuild_array(arr)).toEqual(expected);
});

// Rebuild array, empty array, 
test("rebuild_array", () => {
    const arr : Array<string> = [];
    const expected : Array<string> = [];
    expect(rebuild_array(arr)).toEqual(expected);
});

// Shuffle array, Records
test("shuffle_array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle_array(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled).toEqual(expect.arrayContaining(arr));
});

// Shuffle array, empty array
test("shuffle_array", () => {
    const arr : Array<number> = [];
    const shuffled = shuffle_array(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled).toEqual(expect.arrayContaining(arr));
});

// Shuffle array, one element
test("shuffle_array", () => {
    const arr : Array<number> = [1];
    const shuffled = shuffle_array(arr);
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled).toEqual(arr);
});