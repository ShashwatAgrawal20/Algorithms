import bt_post_order from "../DataStructures/Tree/BTPostOrder";
import { tree } from "./tree";

test("post order", function () {
    expect(bt_post_order(tree)).toEqual([
        7,
        5,
        15,
        10,
        29,
        45,
        30,
        100,
        50,
        20,
    ]);
});
