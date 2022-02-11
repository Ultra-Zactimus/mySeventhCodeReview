export default class Ruble {
  static async moneyConverter(input) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/RUB/${input}`);
      if (!response.ok) {
        throw Error(response.status + " " + response.statusText);
      } return response.json();
    } catch(error) {
      return error.message;
    }
  }
}