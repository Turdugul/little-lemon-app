import { fetchAPI, submitAPI } from './bookingsAPI';

describe('API Functions', () => {

  // Test for fetchAPI function
  test('fetchAPI returns available time slots based on a given date', () => {
    const date = new Date('2024-10-11');
    const result = fetchAPI(date);

    // Since fetchAPI results are random, we just want to check that the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Additionally, we can check if the array contains valid times in the format like "17:00", "17:30"
    result.forEach(time => {
      expect(time).toMatch(/^(1[7-9]|2[0-3]):(00|30)$/); // Matches 17:00 to 23:30
    });
  });

  // Test for submitAPI function
  test('submitAPI returns true when form data is submitted', () => {
    const formData = {
      fName: 'John',
      lName: 'Doe',
      email: 'john@example.com',
      tel: '123-456-7890',
      people: 2,
      date: '2024-10-11',
      time: '19:00',
      occasion: 'Birthday',
      preferences: 'Indoors',
      comments: 'No comments'
    };

    const result = submitAPI(formData);

    expect(result).toBe(true);
  });
});
