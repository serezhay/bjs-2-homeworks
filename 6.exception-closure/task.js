function parseCount (shop) {
    if  (isNaN(shop)) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(shop);
}

function validateCount(number) {
    try {
        return parseCount(number)
    } catch(error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area () {
        const perimeter = this.perimeter / 2;
        const area = Math.sqrt(perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c));
        return +area.toFixed(3)
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter()  {
                return 'Ошибка! Треугольник не существует' ;
            },
            get area() {
                return 'Ошибка! Треугольник не существует' ;
            }
        }
    }
}