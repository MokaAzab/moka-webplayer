export default async function handler(req, res) {
  const { SPOTIFY_CLIENT_ID, REDIRECT_URI } = process.env;

  const scope = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state"
  ].join(" ");

  const authUrl =
    "https://accounts.spotify.com/authorize" +
    "?response_type=code" +
    "&client_id=" + SPOTIFY_CLIENT_ID +
    "&scope=" + encodeURIComponent(scope) +
    "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);

  res.redirect(authUrl);
}
