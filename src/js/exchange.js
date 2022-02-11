export default class Exchange {
  static async moneyConverter() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      } return response.json();
    } catch(error) {
      return error.message;
    }
  }
}