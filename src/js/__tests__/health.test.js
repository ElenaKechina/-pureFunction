import healthString from '../health';

describe('healdString function:', () => {
  test('should return "healthy"', () => {
    expect(healthString).toBeDefined();
    const result = healthString({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
  });

  test('should return "wounded"', () => {
    const result = healthString({ name: 'Лучник', health: 30 });
    expect(result).toBe('wounded');
  });

  test('should return "critical"', () => {
    const result = healthString({ name: 'Варвар', health: 3 });
    expect(result).toBe('critical');
  });
});
