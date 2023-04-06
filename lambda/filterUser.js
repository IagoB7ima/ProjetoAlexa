 function filtrarCurso(usuarios, handlerInput) {
    const filterCurso = handlerInput.requestEnvelope.request.intent.slots.curso.value;
    const curso = usuarios[0].cursos.find(curso => curso.nome === filterCurso);
  
    return curso;
  }
  
  module.exports = filtrarCurso;
  
  //qual a agenda do coordenador do curso de engenharia de software