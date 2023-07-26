interface PaintOptions {
    shape: string;
    xPos?: number;
    yPos?: number;
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions): void {
    console.log(shape);
    console.log("x coordinate at", xPos);
    console.log("y coordinate at", yPos);
}

paintShape({ shape: "triangle" });
paintShape({ shape: "triangle", xPos: 100 });
paintShape({ shape: "triangle", yPos: 100 });
paintShape({ shape: "triangle", xPos: 100, yPos: 100 });