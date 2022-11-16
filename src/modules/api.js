export default class API {
  static BASE_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores`;

  static sendGame = async ({ user, score }) => {
    const game = {
      user,
      score,
    };

    const data = await fetch(this.BASE_URL, {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await data.json();
    return response;
  };

  static retrieveScoreGame = async () => {
    const response = await fetch(this.BASE_URL);
    const games = await response.json();
    return games.result;
  };
}
