export async function getData(ticker) {
  if (ticker == null)
    return { Error: "Unvalid Data", Message: "No Ticker Detected" };
  const promiseData = fetch(`https://wikinumber.org/read/${ticker}`, {
    crossDomain: true,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((scrapedData) => {
      if (Array.isArray(scrapedData)) {
        for (let i = 0; i < scrapedData.length; i++) {
          scrapedData[i].date = new Date(scrapedData[i].date);
        }
        return scrapedData;
      } else {
        return { Error: "Unvalid Data", Message: scrapedData };
      }
    });
  return promiseData;
}

export async function getOrders() {
  const promiseData = await fetch("https://wikinumber.org/read/allOrders", {
    method: "GET",
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw res;
    })
    .catch((err) => console.log(err));

  return promiseData;
}

export async function getTickers() {
  const promiseData = await fetch("https://wikinumber.org/read/getTickers", {
    method: "GET",
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  }).catch((err) => console.log(err));
  return promiseData.json();
}
