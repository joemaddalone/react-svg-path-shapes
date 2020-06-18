import Path from 'react-svg-path'

Path.macro('square', function (size, x, y) {
  if (x && y) {
    this.M(x - size / 2, y - size / 2) // only move if x & y are defined
  }
  this.right(size).down(size).left(size).up(size)
  return this
})

Path.macro('circle', function (size, x, y) {
  if (x && y) {
    this.M(x, y) // only move if x & y are defined
  }
  const radius = size / 2
  this.m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .close()
  return this
})

Path.macro('triangle', function (w, h, x, y) {
  this.M(x, y) // only move if x & y are defined
    .l(-w / 2, h)
    .right(w)
    .L(x, y)
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
// [-10, -45, 10, 0, 35, 10, -9, 25, 15, 75]
Path.macro('polyline', function (x, y, width, data) {
  this.moveTo(x, y)
  const pointDistance = parseInt(width / data.length)
  data.forEach((val, index, arr) => {
    if (index !== 0) {
      const prev = arr[index - 1]
      this.l(pointDistance, prev - val)
    } else {
      this.l(pointDistance, -val)
    }
  })
  return this
})

Path.macro('stepline', function (x, y, width, data) {
  this.moveTo(x, y)
  const pointDistance = parseInt(width / data.length)
  data.forEach((val, index, arr) => {
    const prev = index === 0 ? 0 : arr[index - 1]
    this[prev > val ? 'down' : 'up'](Math.abs(prev - val))
    if (index !== arr.length - 1) {
      this.right(pointDistance)
    }
  })
  return this
})

Path.macro('polygon', function (x, y, ...rest) {
  this.moveTo(x, y)
  rest.forEach((val) => {
    this.L.apply(null, val)
  })
  this.close()
  return this
})

export default Path
