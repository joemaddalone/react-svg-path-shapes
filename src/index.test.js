import Path from '.';

const cx = 0;
const cy = 0;

const endsAtCenter = (str) => str.endsWith(`M${cx} ${cy}`);

describe('Shapes', () => {
  it('rect', () => {
    const expectedRect = 'M-50 -100 h100 v200 h-100 v-200 M0 0';
    const p = new Path().rect(100, 200, cx, cy);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedRect);
  });

  it('square', () => {
    const expectedSquare =
      'M-35.35533905932737 -35.35533905932738 L35.35533905932738 -35.35533905932737 L35.35533905932738 35.35533905932737 L-35.35533905932737 35.35533905932738 z M0 0';
    const p = new Path().square(100, cx, cy);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedSquare);
  });

  it('triangle', () => {
    const expectedTriangle =
      'M0 -57.735026918962575 L-50 28.867513459481287 L50 28.867513459481287 z M0 0';
    const p = new Path().triangle(100, cx, cy);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedTriangle);
  });

  it('regPolygon', () => {
    const expectedRegPolygon =
      'M-20.225424859373682 -14.69463130731183 L7.725424859373686 -23.776412907378838 L25 0 L7.725424859373686 23.776412907378838 L-20.225424859373692 14.69463130731182 z M0 0';
    const p = new Path().regPolygon(50, 5, cx, cy);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedRegPolygon);
  });

  it('ellipse', () => {
    const expectedEllipse = 'M25 0 A25 50 0 0 1 -25 0 A25 50 0 0 1 25 0 z M0 0';
    const p = new Path().ellipse(50, 100, cx, cy);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedEllipse);
  });

  it('circle', () => {
    const expectedCircle = 'M50 0 A50 50 0 0 1 -50 0 A50 50 0 0 1 50 0 z M0 0';
    const p = new Path().circle(100, cx, cy);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedCircle);
  });

  it('sector', () => {
    const expectedSector =
      'M50 0 A50 50 0 0 0 3.061616997868383e-15 -50 L0 0 L50 0 M0 0';
    const p = new Path().sector(cx, cy, 50, 0, 90);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedSector);
  });

  it('segment', () => {
    const expectedSegment = 'M50 0 A50 50 0 0 0 3.061616997868383e-15 -50 M0 0';
    const p = new Path().segment(cx, cy, 50, 0, 90);
    const str = p.toString();
    expect(endsAtCenter(str)).toBeTruthy();
    expect(str).toEqual(expectedSegment);
  });

  it('polyline', () => {
    const expectedPolyline = 'M5 10 L10 20 L20 30';
    const p = new Path().polyline([
      [5, 10],
      [10, 20],
      [20, 30]
    ]);
    const str = p.toString();
    expect(str).toEqual(expectedPolyline);
  });

  it('polygon', () => {
    const expectedPolygon = 'M5 10 L10 20 L20 30 z';
    const p = new Path().polygon([
      [5, 10],
      [10, 20],
      [20, 30]
    ]);
    const str = p.toString();
    expect(str).toEqual(expectedPolygon);
  });
});
