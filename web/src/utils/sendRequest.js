export const sendRequest = async (requestRoute, body, requestType) => {
  try {
    const response = await fetch(`http://192.168.1.104:8000/${requestRoute}`, {
      method: requestType,
      body: JSON.stringify(body),
      mode: "cors",
      headers: { "Content-type": "application/json;charset=utf-8" },
    });

    const x = await response.json();

    return x;
  } catch (e) {
    console.log("The Error is", e);
  }
};
