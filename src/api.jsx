export const url_api = "http://localhost:3333"


export function LOGAR_POST(body) {
  return {
    url: url_api + "/sessions",
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}