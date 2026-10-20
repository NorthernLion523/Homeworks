const readline = require('node:readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ticketPrice(category) {
  switch(category) {
    case 1: {
      return 300;
    }
    case 2: {
      return 500
    }
    case 3: {
      return 900;
    }
    default: {
      return 0;
    }
  }
}

function maxTicket(budget, price) {
  let num = 0;
  while (budget > price) {
    num += 1;
    budget -= price;
  }
  return num;
}

function printTicketResult(category, budget) {
  ticPrice = ticketPrice(category);
  if (ticPrice) {
    maxTicket = maxTicket(budget, ticPrice);
    console.log(`Категория: ${category}, билет ${ticPrice} руб., ` +
      `бюджет: ${budget} руб.: можно купить ${maxTicket} шт.`);
  }
  else {
    console.log('неизвестная категория');
  }
}

function deliveryPrice(distance, total) {
  if (total > 3000 || distance <= 3) {
    return 0;
  }
  else if (distance >= 4 && distance <= 10) {
    return 200;
  }
  else {
    return 200 + 25 * (distance - 10);
  }
}

function printDelivery(distance, total) {
  console.log(`Расстояние: ${distance} км, заказ ${total} руб,: ` +
    `доставка ${deliveryPrice(distance, total)} руб.`);
}

function printSteps(height) {
  let countSteps = 0;
  for (let i = 1; i <= height; i++) {
    if (i === 4) {
      continue;
    }
    if (i > 10) {
      console.log('Дальше лестница не построена');
      break;
    }
    console.log(`Ступень ${i}`);
    countSteps++;
  }
  console.log(`Всего построено: ${countSteps}`);
}

async function main() {
  console.log('Выберите задачу:');
  console.log('1 - билетная касса');
  console.log('2 - доставка заказа');
  console.log('3 - лестница');
  const choice = Number(await rl.question('Ваш выбор: '));

  switch (choice) {
    case 1: {
      const category = Number(await rl.question('Категория билета '));
      const budget = Number(await rl.question('Бюджет: '));

      printTicketResult(category, budget);
      break;
    }
    case 2: {
      const distance = Number(await rl.question('Расстояние: '));
      const totalSum = Number(await rl.question('Сумма заказа: '));

      printDelivery(distance, totalSum);
      break;
    }
    case 3: {
      const hStairs = Number(await rl.question('Высота лестницы: '));

      printSteps(hStairs);
      break;
    }
    default: {
      console.log('такой задачи нет');
    }
  }

  rl.close();
}

main()
