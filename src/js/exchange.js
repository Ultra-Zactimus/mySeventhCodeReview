export default class Exchange {
  static async moneyConverter(money) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.status + " " + response.statusText);
      } return response.json();
    } catch(error) {
      return error.message;
    }
  }
}