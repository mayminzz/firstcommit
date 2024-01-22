import { IShape } from "./interfaceex";

export const calcArea = (shape: IShape) => {
  switch (shape.tag) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
  }
};
