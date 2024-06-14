export function generateRandomWeatherData() {
  // 온도 범위: 20도 ~ 30도
  const temperature = Math.floor(Math.random() * 11) + 20;

  // 습도 범위: 50% ~ 80%
  const humidity = Math.floor(Math.random() * 31) + 50;

  return { temperature, humidity };
}
