export function graticule10() {
  // See https://github.com/d3/d3-geo/issues/95
  return {
    type: "MultiLineString",
    coordinates: [].concat(
      Array.from(range(-180, 180, 10), x =>
        x % 90 ? meridian(x, -80, 80) : meridian(x, -90, 90)
      ),
      Array.from(range(-80, 80 + 1e-6, 10), y => parallel(y, -180, 180))
    )
  };
}

function meridian(x, y0, y1, dy = 2.5) {
  return Array.from(range(y0, y1 + 1e-6, dy), y => [x, y]);
}

function parallel(y, x0, x1, dx = 2.5) {
  return Array.from(range(x0, x1 + 1e-6, dx), x => [x, y]);
}

function* range(start, stop, step) {
  for (let i = 0, v = start; v < stop; v = start + ++i * step) {
    yield v;
  }
}
