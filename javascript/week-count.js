function weekCount() {
  const startDate = new Date("2024-01-22T09:00:00"); // First class time
  const currentDate = new Date();

  let timeDiff = currentDate - startDate;
  let weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

  // If it's Monday after 9am, show the upcoming week
  if (currentDate.getDay() === 1 && currentDate.getHours() >= 9) {
    weeks++;
  }

  // Make it not zero indexed
  return weeks;
}
