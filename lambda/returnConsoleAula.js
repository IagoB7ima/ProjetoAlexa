/*function returnConsoleAula(materiasComAulasNoDia, tempo) {
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

  module.exports = returnConsoleAula;*/
  
 function returnConsoleAula(materiasComAulasNoDia, tempo) {
  if (materiasComAulasNoDia.length === 0) {
    return 'Você não tem aula neste dia!';
  }

  const frases = materiasComAulasNoDia.map(aula => {
    const { dia_semana, nome, horario, sala, professor } = aula;
    const acao = tempo ? 'terá' : 'teve';
    return {
      dia_semana,
      acao,
      frase: `aula de ${nome} das ${horario} horas na sala ${sala} com ${professor}`
    };
  });

  if (frases.length === 1) {
    const { dia_semana, acao, frase } = frases[0];
    return `${dia_semana} você ${acao} ${frase}`;
  } else {
    const ultimaFrase = frases.pop();
    const frasesAnteriores = frases.map(({ frase }) => frase);
    return `${ultimaFrase.dia_semana} você ${ultimaFrase.acao} ${frasesAnteriores.join(', ')} e ${ultimaFrase.frase}`;
  }
}

module.exports = returnConsoleAula;