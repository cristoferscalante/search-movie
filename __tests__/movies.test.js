import { movies } from '../src/services/movies.js';

describe('movies function', () => {
    test('should return an array of movies when search is not empty', async () => {
      // Arrange
      const search = 'Batman';
  
      // Act
      const result = await movies({ search });
  
      // Assert
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty('id');
      expect(result[0]).toHaveProperty('title');
      expect(result[0]).toHaveProperty('year');
      expect(result[0]).toHaveProperty('image');
    });
  });

