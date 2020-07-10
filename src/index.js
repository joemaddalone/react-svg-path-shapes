import Path from 'react-svg-path';

const angleInRadians = (angle) => ((angle - 90) * Math.PI) / 180.0;

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const radians = angleInRadians(angleInDegrees);

  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY + radius * Math.sin(radians)
  };
};

Path.macro('rect', function (width, height, cx, cy) {
  this.M(cx - width / 2, cy - height / 2)
    .right(width)
    .down(height)
    .left(width)
    .up(height)
    .M(cx, cy);
  return this;
});

Path.macro('square', function (size, cx, cy) {
  return this.regPolygon(size, 4, cx, cy);
});

Path.macro('circle', function (size, cx, cy) {
  return this.ellipse(size, size, cx, cy);
});

Path.macro('ellipse', function (width, height, cx, cy) {
  const rx = width / 2;
  const ry = height / 2;

  this.M(cx + rx, cy)
    .A(rx, ry, 0, 0, 1, cx - rx, cy)
    .A(rx, ry, 0, 0, 1, cx + rx, cy)
    .close()
    .M(cx, cy);
  return this;
});

Path.macro('polyline', function (points, relative = false) {
  const clone = [...points];
  const start = clone.shift();
  const move = relative ? this.m : this.M;
  const line = relative ? this.l : this.L;
  move.apply(null, start);
  clone.forEach((val) => {
    line.apply(null, val);
  });
  return this;
});

Path.macro('polygon', function (points) {
  this.polyline(points).close();
  return this;
});

Path.macro('regPolygon', function (size, sides, cx, cy) {
  const angle = 360 / sides;
  const vertexIndices = Array.from(Array(sides).keys());
  const offsetDeg = 90 - (180 - angle) / 2;
  const offset = angleInRadians(offsetDeg);
  const radius = size / 2;
  const points = vertexIndices
    .map((index) => {
      return {
        theta: offset + angleInRadians(angle * index),
        r: radius
      };
    })
    .map(({ r, theta }) => [
      cx + r * Math.cos(theta),
      cy + r * Math.sin(theta)
    ]);
  return this.polygon(points).M(cx, cy);
});

Path.macro('triangle', function (size, cx, cy) {
  const sq3 = Math.sqrt(3);
  const a = [cx, cy - (sq3 / 3) * size];
  const b = [cx - size / 2, cy + (sq3 / 6) * size];
  const c = [cx + size / 2, cy + (sq3 / 6) * size];
  return this.polygon([a, b, c]).M(cx, cy);
});

Path.macro('sector', function (cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .L(cx, cy)
    .L(start.x, start.y)
    .M(cx, cy);
  return this;
});

Path.macro('segment', function (cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1;

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .M(cx, cy);
  return this;
});

export default Path;
