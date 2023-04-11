const moment = require('moment');
require('moment/locale/pt-br');
moment.locale('pt-br');

function returnDiaSemana(dia) {
    if (dia === "ontem") {
      // obter a data de ontem
      const ontem = moment().subtract(1, 'days');
      // obter o nome do dia da semana de ontem
      const diaSemanaDesejado = ontem.format('dddd');
      //console.log(`Ontem foi ${diaSemanaDesejado}`);
      return diaSemanaDesejado;
    } else if (dia === "amanhã") {
      // obter a data de amanhã
      const amanha = moment().add(1, 'days');
      // obter o nome do dia da semana de amanhã
      const diaSemanaDesejado = amanha.format('dddd');
      //console.log(`Amanhã será ${diaSemanaDesejado}`);
      return diaSemanaDesejado;
    } else if (dia === "hoje") {
      // obter a data de hoje
      const hoje = moment()
      // obter o nome do dia da semana de hoje
      const diaSemanaDesejado = hoje.format('dddd');
      //console.log(`Hoje é ${diaSemanaDesejado}`);
      return diaSemanaDesejado;
    } 
  }
  
module.exports = returnDiaSemana;