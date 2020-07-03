import Path from 'react-svg-path'

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  }
}

const xYCheck = (x, y) => {
  if (y === null || x === null) {
    return false
  }

  if (isNaN(x) || isNaN(y)) {
    return false
  }

  return true
}

Path.macro('rect', function (width, height, x = null, y = null) {
  if (xYCheck(x, y)) {
    this.M(x - width / 2, y - height / 2) // only move if x & y are defined
  } else {
    this.m(0, 0)
  }
  this.right(width).down(height).left(width).up(height)
  return this
})

Path.macro('square', function (size, x, y) {
  return this.rect(size, size, x, y)
})

Path.macro('circle', function (size, x = null, y = null) {
  // return this.ellipse(size, size, x, y)
  if (xYCheck(x, y)) {
    this.M(x, y) // only move if x & y are defined
  } else {
    this.m(0, 0)
  }
  const radius = size / 2
  this.m(-radius, 0)
    .a(radius, radius, 0, 1, 0, size, 0)
    .a(radius, radius, 0, 1, 0, -size, 0)
    .close()
  return this
})

Path.macro('ellipse', function (width, height, cx, cy) {
  const rx = width / 2
  const ry = height / 2

  this.M(cx, cy) // only move if x & y are defined
  this.M(cx + rx, cy)
    .A(rx, ry, 0, 0, 1, cx, cy + ry)
    .A(rx, ry, 0, 0, 1, cx - rx, cy)
    .A(rx, ry, 0, 0, 1, cx + rx, cy)
    .close()
  return this
})

Path.macro('grid', function (x, y, width, height, cols, rows, close = true) {
  const extra = close ? 1 : 0
  const colWidth = width / cols
  const rowHeight = height / rows
  this.M(x, y)
  if (cols) {
    Array.from({ length: cols + extra }).map((_, index) =>
      this.M(x + index * colWidth, y).down(height)
    )
  }
  if (rows) {
    Array.from({ length: rows + extra }).map((_, index) =>
      this.M(x, y + index * rowHeight, y).right(width)
    )
  }
  return this
})
// Path.macro('sparkline', function (x, y, width, data) {
//   this.moveTo(x, y)
//   const pointDistance = parseInt(width / data.length)
//   data.forEach((val, index, arr) => {
//     if (index !== 0) {
//       const prev = arr[index - 1]
//       this.l(pointDistance, prev - val)
//     } else {
//       this.l(pointDistance, -val)
//     }
//   })
//   return this
// })

Path.macro('polyline', function (points, relative = false) {
  const clone = [...points]
  const start = clone.shift()
  const move = relative ? this.m : this.M
  const line = relative ? this.l : this.L
  move.apply(null, start)
  clone.forEach((val) => {
    line.apply(null, val)
  })
  return this
})

Path.macro('polygon', function (points, relative = false) {
  this.polyline(points, relative).close()
  return this
})

// Path.macro('stepline', function (x, y, width, data) {
//   this.moveTo(x, y)
//   const pointDistance = parseInt(width / data.length)
//   data.forEach((val, index, arr) => {
//     const prev = index === 0 ? 0 : arr[index - 1]
//     this[prev > val ? 'down' : 'up'](Math.abs(prev - val))
//     if (index !== arr.length - 1) {
//       this.right(pointDistance)
//     }
//   })
//   return this
// })

Path.macro('triangle', function (size, x, y) {
  const sq3 = Math.sqrt(3)
  const relative = !xYCheck(x, y)

  let a, b, c

  if (relative) {
    a = [size / 3.33, (sq3 / 3) * size * -1 + size / 15]
    b = [-(size / 2), (sq3 / 6) * size * 3]
    c = [size, 0]
  } else {
    a = [x, y - (sq3 / 3) * size]
    b = [x - size / 2, y + (sq3 / 6) * size]
    c = [x + size / 2, y + (sq3 / 6) * size]
  }

  return this.polygon([a, b, c], relative)
})

Path.macro('sector', function (x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1

  this.M(start.x, start.y)
    .A(radius, radius, 0, arcSweep, 0, end.x, end.y)
    .L(x, y)
    .L(start.x, start.y)
  return this
})

Path.macro('segment', function (x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)
  const arcSweep = endAngle - startAngle <= 180 ? 0 : 1

  this.M(start.x, start.y).A(radius, radius, 0, arcSweep, 0, end.x, end.y)
  return this
})

export default Path