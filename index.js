// Your code here

class Polygon {
  constructor(polygon) {
    this.polygon = polygon
  }
  get countSides() {
    return this.polygon.length
  }
  get perimeter() {
    return this.polygon.reduce((a, b) => a + b)
  }
}
class Triangle extends Polygon {
  get isValid() {
    let arr = this.polygon
    if ((arr[0] + arr[1]) / arr[2] === 2) {
      return true
    } else {
      return false
    }
  }
}
class Square extends Polygon {
  get area() {
    let arr = this.polygon
    let result = arr[0] * arr[1]
    return result
  }
  get isValid() {
    let arr = this.polygon
    if ((arr[0] + arr[1] + arr[2]) / arr[3] === 3) {
      return true
    } else {
      return false
    }
  }
}

let polygon = new Polygon([5, 5, 5])
console.log(polygon.countSides)
console.log(polygon.perimeter)

let triangle = new Triangle([5, 5, 5])
let triangle2 = new Triangle([15, 10, 1])

console.log(triangle.isValid)
console.log(triangle2.isValid)

let square = new Square([5, 5, 5, 5])
let square2 = new Square([5, 4, 3, 2])
console.log(square.area)
console.log(square.isValid)
console.log(square2.isValid)
