import { sum } from "../sum";

test("Sum should return sum of the given two numbers", ()=> {
    const result = sum(3,4);

    expect(result).toBe(7);
})