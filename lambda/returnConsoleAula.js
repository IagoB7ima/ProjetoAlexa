function returnConsoleAula(materiasComAulasNoDia, tempo) {
    if (materiasComAulasNoDia.length === 0) {
        return 'Você não tem aula neste dia!';
      }
    
      const frase = materiasComAulasNoDia.map(aula => {
        const { dia_semana, nome, horario, sala, professor } = aula;
        const acao = tempo ? 'terá' : 'teve';
        return `${dia_semana} você ${acao} aula de ${nome} das ${horario} horas na ${sala} com ${professor}`;
      });
    
      return frase.join(' e ');
  }

  module.exports = returnConsoleAula;