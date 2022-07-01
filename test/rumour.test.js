import { rumour }  from '../src/rumour';

test('should return zero steps when start and end node is the same', () => {
    expect(rumour(1, 1)).toBe(0);
});

test('should return one step when start node is 1 and end node is 2', () => {
    expect(rumour(1, 2)).toBe(1);
});

test('should return two step when start node is 1 and end node is 4', () => {
    expect(rumour(1, 4)).toBe(2);
});

test('should return two step when start node is 1 and end node is 5', () => {
    expect(rumour(1, 5)).toBe(2);
});

test('should return three step when start node is 1 and end node is 8', () => {
    expect(rumour(1, 8)).toBe(3);
});

test('should return three step when start node is 8 and end node is 1', () => {
    expect(rumour(8, 1)).toBe(3);
});

test('should return five step when start node is 15 and end node is 5', () => {
    expect(rumour(15, 5)).toBe(5);
});

test('should return six step when start node is 8 and end node is 13', () => {
    expect(rumour(8, 13)).toBe(6);
});

test('should return five step when start node is 12 and end node is 5', () => {
    expect(rumour(12, 5)).toBe(5);
});

