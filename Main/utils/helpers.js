module.exports = {
  format_date: (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  get_emoji: () => {
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻'];
    const index = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[index];

    return `<span for="img" aria-label="emoji">${emoji}</span>`;
},
  next: () => { 
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    return showCalendar(currentMonth, currentYear);
},

};
