import { TemperatureConverterPipe } from './temperature-converter.pipe';

describe('TemperatureConverterPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new TemperatureConverterPipe();

  it('transforms "Kelvin" to "Celcius"', () => {
    const celciusValue = 22;
    const kelvinValue = Math.round(celciusValue + 273.15);
    expect(pipe.transform(celciusValue, 'K')).toEqual(kelvinValue.toString());
  });

  it('transforms "Celcius" to "Kelvin"', () => {
    const kelvinValue = 290;
    const celciusValue = Math.round(kelvinValue - 273.15);
    expect(pipe.transform(kelvinValue, 'C')).toEqual(celciusValue.toString());
  });
});
