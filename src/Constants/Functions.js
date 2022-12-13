export const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

export const getCategory = (gender, age, event) => `${age}-${gender}-${event}`;

export const formatScore = (score) => [
  parseInt(score.substring(0, score.indexOf("-"))),
  parseInt(score.substring(score.indexOf("-") + 1)),
];
