function returnInfoAulas(aulas, diaSemanaDesejado) {
    const materiasComAulasNoDia = aulas.usuarios.flatMap(usuario =>
      usuario.cursos.flatMap(curso =>
        curso.materias.filter(materia =>
          materia.dia_semana === diaSemanaDesejado
        )
      )
    );
    return materiasComAulasNoDia;
  }

module.exports = returnInfoAulas;