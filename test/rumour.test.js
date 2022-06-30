import { rumour }  from '../src/rumour';

test('same node', () => {
    expect(rumour(1, 1)).toBe(0);
});

