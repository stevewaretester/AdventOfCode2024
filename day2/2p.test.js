test('basic math works', () => {
    expect(2 + 2).toBe(4); // Simple assertion that will always pass
});


const { determineSafe } = require('./2p'); // Import the function from 2p.js
test('determineSafe returns 2 for the provided lines', () => {
    const lines = [
        "7 6 4 2 1", // safe
        "1 2 7 8 9", // unsafe
        "9 7 6 2 1", // unsafe
        "1 3 2 4 5", // unsafe
        "8 6 4 4 1", // unsafe
        "1 3 6 7 9"  // safe
    ];
    
    const result = determineSafe(lines);
    
    // Assert that the function returns 2
    expect(result).toBe(2);
});

const { determineSaferp2 } = require('./2p'); // Import the function from 2p.js
test('determineSafe returns 2 for the provided lines', () => {
    const lines = [
        "7 6 4 2 1", // Safe without removing any level
        "1 2 7 8 9", // Unsafe regardless of which level is removed
        "9 7 6 2 1", // Unsafe regardless of which level is removed
        "1 3 2 4 5", // Safe by removing the second level, 3
        "8 6 4 4 1", // Safe by removing the third level, 4
        "1 3 6 7 9"  // Safe without removing any level
    ];
    const result = determineSaferp2(lines);
    
    // Assert that the function returns 4
    expect(result).toBe(4);
});