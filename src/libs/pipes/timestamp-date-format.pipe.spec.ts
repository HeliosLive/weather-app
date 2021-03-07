import { TimestampDateFormatPipe } from './timestamp-date-format.pipe';

describe('TimestampDateFormatPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new TimestampDateFormatPipe();

  it('transforms date from timestamp to "hh:mm"', () => {
    const timeStampDate = 1615122000;
    const hourDate = '14:00';
    expect(pipe.transform(timeStampDate)).toBe(hourDate);
  });
});
