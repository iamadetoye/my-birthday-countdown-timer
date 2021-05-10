"use strict";

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const countDownDate = new Date("July 7, 2021 00:00:00").getTime();

const countDownTimer = setInterval(() => {
  const now = new Date().getTime();

  const timeDifference = countDownDate - now;

  days.textContent = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor(
    (days.textContent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.textContent = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  seconds.textContent = Math.floor((timeDifference % (1000 * 60)) / 1000);

  if (timeDifference < 0) {
    clearTimeout(countDownTimer);
    days.textContent = 0;
    hours.textContent = 0;
    minutes.textContent = 0;
    seconds.textContent = 0;
  }
}, 1000);
