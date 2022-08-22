import { FilmLengthPipe } from './film-length.pipe';

describe('FilmLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new FilmLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
