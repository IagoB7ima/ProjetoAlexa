function returnConsoleAula(materiasComAulasNoDia, tempo) {
    var frase = '';
    if(materiasComAulasNoDia.length === 1 && tempo === true) {
      return frase = `${materiasComAulasNoDia[0].dia_semana} você terá aula de ${materiasComAulasNoDia[0].nome} das ${materiasComAulasNoDia[0].horario} horas na ${materiasComAulasNoDia[0].sala} com ${materiasComAulasNoDia[0].professor}`;
    } else if(materiasComAulasNoDia.length === 1 && tempo === false) {
      return frase = `${materiasComAulasNoDia[0].dia_semana} você teve aula de ${materiasComAulasNoDia[0].nome} das ${materiasComAulasNoDia[0].horario} horas na ${materiasComAulasNoDia[0].sala} com ${materiasComAulasNoDia[0].professor}`;
    }else if (materiasComAulasNoDia.length === 2 && tempo === true) {
      return frase = `${materiasComAulasNoDia[0].dia_semana} você terá aula de ${materiasComAulasNoDia[0].nome} das ${materiasComAulasNoDia[0].horario} horas na ${materiasComAulasNoDia[0].sala} com ${materiasComAulasNoDia[0].professor} e ${materiasComAulasNoDia[1].nome} das ${materiasComAulasNoDia[1].horario} horas na ${materiasComAulasNoDia[1].sala} com ${materiasComAulasNoDia[1].professor}`;
    } else if (materiasComAulasNoDia.length === 2 && tempo === false) {
      return frase = `${materiasComAulasNoDia[0].dia_semana} você teve aula de ${materiasComAulasNoDia[0].nome} das ${materiasComAulasNoDia[0].horario} horas na ${materiasComAulasNoDia[0].sala} com ${materiasComAulasNoDia[0].professor} e ${materiasComAulasNoDia[1].nome} das ${materiasComAulasNoDia[1].horario} horas na ${materiasComAulasNoDia[1].sala} com ${materiasComAulasNoDia[1].professor}`;
    } else {
      return frase = 'Você não tem aula neste dia!';
    }
  }

  module.exports = returnConsoleAula;