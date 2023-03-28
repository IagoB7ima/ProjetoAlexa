function filtrarUsuario(usuarios, handlerInput) {
    const parMateria = handlerInput.requestEnvelope.request.intent.slots.materia.value;
    const parCurso = handlerInput.requestEnvelope.request.intent.slots.curso.value;
    const curso = usuarios[0].cursos.find(curso => curso.nome === parCurso);
    const aula = curso.materias.find(materia => materia.nome === parMateria);
  
    return aula;
  }

  module.exports = filtrarUsuario;