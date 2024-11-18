// Fetch both tickets and users from the single endpoint
export const fetchData = async () => {
    const url = 'https://api.quicksell.co/v1/internal/frontend-assignment'; // The provided API URL
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse JSON response
      const { tickets, users } = data; // Destructure tickets and users from the response
  
      return { tickets, users };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  
