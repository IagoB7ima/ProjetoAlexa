const moment = require('moment');
require('moment/locale/pt-br');
moment.locale('pt-br');

function obterDiaSemana(dia) {
  const diasValidos = ["ontem", "hoje", "amanhã"];

  if (!diasValidos.includes(dia)) {
    throw new Error("Dia inválido");
  }

  const diaAtual = moment();
  let diaSemanaDesejado = "";

  switch (dia) {
    case "ontem":
      diaSemanaDesejado = diaAtual.subtract(1, 'days').format('dddd');
      break;
    case "hoje":
      diaSemanaDesejado = diaAtual.format('dddd');
      break;
    case "amanhã":
      diaSemanaDesejado = diaAtual.add(1, 'days').format('dddd');
      break;
  }

  return diaSemanaDesejado;
}

module.exports = obterDiaSemana;