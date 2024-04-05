// sum.test.js
import { error } from 'console'
import { expect, test, toBe } from 'vitest'
//import NewProductPopup from "../../src/Components/Admin/ProductSetUp/NewProductPopup/NewProductPopup.jsx"

const createproduct = (newproduct) => {
    if (newproduct == null) throw "error"
    if (newproduct["title"] == null) throw "error"
}

test("create new product is a function", () => {
    expect(typeof createproduct).toBe("function")
})

test("create new product param is not null", () => {
    expect(() => createproduct()).toThrow()
})

test("create new have a title", () => {
    expect(() => createproduct({ "title": "asd" })).toThrow()
})

test("create new have a price", () => {
    expect(() => createproduct({ "title": "asd", "price": 20 })).toThrow()
})

