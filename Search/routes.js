export default function SearchRoutes(app) {
  const findWeather = async (req, res) => {
    const { city } = req.query;
    if (city) {
      const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=de89c429a2fb44b595372203242304&q=${city}&aqi=no`)
      res.json(weather);
      return;
    }
  };
  app.get("/api/search", findWeather);
}
