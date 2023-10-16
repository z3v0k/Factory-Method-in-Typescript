// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Factory Method</h1>`;

interface Shape {
  draw(): void;
}

class Rectangle implements Shape {
  draw(): void {
    console.log('draw rectangle');
  }
}

class Square implements Shape {
  draw(): void {
    console.log('draw square');
  }
}

class Circle implements Shape {
  draw(): void {
    console.log('draw circle');
  }
}

interface ShapeFactory {
  create(): Shape;
}

class RectangleFactory implements ShapeFactory {
  create(): Shape {
    return new Rectangle();
  }
}

class SquareFactory implements ShapeFactory {
  create(): Shape {
    return new Square();
  }
}

class CircleFactory implements ShapeFactory {
  create(): Shape {
    return new Circle();
  }
}

const rectangleFactory = new RectangleFactory();
const rectangle = rectangleFactory.create();
rectangle.draw();

const squareFactory = new SquareFactory();
const square = squareFactory.create();
square.draw();

const circleFactory = new CircleFactory();
const circle = circleFactory.create();
circle.draw();
