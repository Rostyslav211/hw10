let counter = 0;

const intervalId = setInterval(() => {
    counter++;
    console.log(`Повідомлення №${counter} (${new Date().toLocaleTimeString()})`);

    if (counter >= 5) {
        clearInterval(intervalId);
        console.log("Таймер зупинено після 5 повідомлень");
    }
}, 1000);