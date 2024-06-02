function formatDate(date) {
  // Funzione per aggiungere uno zero davanti ai numeri minori di 10
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  let day = pad(date.getDate());
  let month = pad(date.getMonth() + 1); // I mesi vanno da 0 a 11, quindi aggiungi 1
  let year = date.getFullYear();

  let hours = pad(date.getHours());
  let minutes = pad(date.getMinutes());
  let seconds = pad(date.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export {formatDate};