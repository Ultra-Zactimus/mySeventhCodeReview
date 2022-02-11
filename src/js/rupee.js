export default class Rupee {
  static async moneyConverter(input) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/INR/${input}`);
      if (!response.ok) {
        throw Error(response.status + " " + response.statusText);
      } return response.json();
    } catch(error) {
      return error.message;
    }
  }
}