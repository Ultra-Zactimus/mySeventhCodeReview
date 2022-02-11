export default class Yen {
  static async moneyConverter(input) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/JPY/${input}`);
      if (!response.ok) {
        throw Error(response.status + " " + response.statusText);
      } return response.json();
    } catch(error) {
      return error.message;
    }
  }
}