export default function handler(req, res) {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state"
  ];

  const authUrl =
    "https://accounts.spotify.com/authorize" +
    "?response_type=token" +
    "&client_id=" + CLIENT_ID +
    "&scope=" + encodeURIComponent(scopes.join(" ")) +
    "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);

  res.redirect(authUrl);
}
