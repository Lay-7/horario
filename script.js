const materias = [
  // Grupo 5NM50
  { grupo:"5NM50", asignatura:"ÁLGEBRA LINEAL", profesor:"RIOS SURIANO FRANCISCO JAVIER", edificio:"CB", salon:"000", horarios:{ Mar:"13:00-15:00", Mie:"13:00-15:00" } },
  { grupo:"5NM50", asignatura:"MÉTODOS NUMÉRICOS", profesor:"GUTIERREZ ESTRADA RAFAEL", edificio:"CB", salon:"000", horarios:{ Mie:"11:00-13:00", Vie:"11:00-13:00" } },
  { grupo:"5NM50", asignatura:"CONTABILIDAD FINANCIERA Y DE COSTOS", profesor:"RAMIREZ CLEMENTE MIGUEL ANGEL", edificio:"CS", salon:"000", horarios:{ Mar:"07:00-09:00", Jue:"07:00-09:00" } },
  { grupo:"5NM50", asignatura:"APLICACIÓN DE LA CIENCIA ECONÓMICA", profesor:"HERNANDEZ CRUZ BERNARDO", edificio:"CS", salon:"000", horarios:{ Mar:"09:00-11:00", Jue:"09:00-11:00" } },
  { grupo:"5NM50", asignatura:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", profesor:"X RODRIGUEZ JOSE LUIS", edificio:"CI", salon:"000", horarios:{ Mar:"11:00-13:00", Sab:"09:00-11:00" } },
  { grupo:"5NM50", asignatura:"COMUNICACIÓN DE DATOS", profesor:"X RODRIGUEZ JOSE LUIS", edificio:"CI", salon:"000", horarios:{ Lun:"07:00-09:00", Vie:"07:00-09:00" } },
  { grupo:"5NM50", asignatura:"PROGRAMACIÓN WEB", profesor:"GONZÁLEZ JÍMENEZ MIGUEL ÁNGEL", edificio:"CI", salon:"000", horarios:{ Lun:"09:00-11:00", Mie:"09:00-11:00" } },

  // Grupo 5NM51
  { grupo:"5NM51", asignatura:"ÁLGEBRA LINEAL", profesor:"RIOS SURIANO FRANCISCO JAVIER", edificio:"CB", salon:"000", horarios:{ Mar:"11:00-13:00", Mie:"11:00-13:00" } },
  { grupo:"5NM51", asignatura:"MÉTODOS NUMÉRICOS", profesor:"LAZARO GONZALEZ SERGIO", edificio:"CB", salon:"000", horarios:{ Mie:"09:00-11:00", Vie:"11:00-13:00" } },
  { grupo:"5NM51", asignatura:"CONTABILIDAD FINANCIERA Y DE COSTOS", profesor:"RAMIREZ CLEMENTE MIGUEL ANGEL", edificio:"CI", salon:"000", horarios:{ Lun:"13:00-15:00", Mie:"13:00-15:00" } },
  { grupo:"5NM51", asignatura:"APLICACIÓN DE LA CIENCIA ECONÓMICA", profesor:"JUAREZ MILLAN MARGARITA", edificio:"CS", salon:"000", horarios:{ Mar:"13:00-15:00", Vie:"13:00-15:00" } },
  { grupo:"5NM51", asignatura:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", profesor:"X RODRIGUEZ JOSE LUIS", edificio:"CI", salon:"000", horarios:{ Mar:"07:00-09:00", Jue:"07:00-09:00" } },
  { grupo:"5NM51", asignatura:"COMUNICACIÓN DE DATOS", profesor:"CUEVAS ESCOBAR SUSANA", edificio:"CI", salon:"000", horarios:{ Mar:"09:00-11:00", Vie:"09:00-11:00" } },
  { grupo:"5NM51", asignatura:"PROGRAMACIÓN WEB", profesor:"LOPEZ VALERIANO ILIANA", edificio:"CI", salon:"000", horarios:{ Mie:"07:00-09:00", Jue:"09:00-11:00" } },

  // Grupo 5NM52
  { grupo:"5NM52", asignatura:"ÁLGEBRA LINEAL", profesor:"CALVA CRUZ CARLOS", edificio:"CB", salon:"000", horarios:{ Mar:"11:00-13:00", Jue:"07:00-09:00" } },
  { grupo:"5NM52", asignatura:"MÉTODOS NUMÉRICOS", profesor:"HERNANDEZ RUBI VICTOR", edificio:"CB", salon:"000", horarios:{ Mie:"13:00-15:00", Vie:"13:00-15:00" } },
  { grupo:"5NM52", asignatura:"CONTABILIDAD FINANCIERA Y DE COSTOS", profesor:"GONZALEZ RIVERA YESSICA ANNEL", edificio:"CI", salon:"000", horarios:{ Lun:"09:00-11:00", Mie:"09:00-11:00" } },
  { grupo:"5NM52", asignatura:"APLICACIÓN DE LA CIENCIA ECONÓMICA", profesor:"ARELLANO LOPEZ ANA VELIA", edificio:"CS", salon:"000", horarios:{ Lun:"11:00-13:00", Mie:"07:00-09:00" } },
  { grupo:"5NM52", asignatura:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", profesor:"JESUS CARRILLO CARLOS", edificio:"CI", salon:"000", horarios:{ Mar:"09:00-11:00", Vie:"09:00-11:00" } },
  { grupo:"5NM52", asignatura:"COMUNICACIÓN DE DATOS", profesor:"CASILLAS RIVAS ALEJANDRO", edificio:"CI", salon:"000", horarios:{ Mie:"11:00-13:00", Vie:"11:00-13:00" } },
  { grupo:"5NM52", asignatura:"PROGRAMACIÓN WEB", profesor:"MONTES CASIANO HERMES FRANCISCO", edificio:"CI", salon:"000", horarios:{ Mar:"07:00-09:00", Vie:"07:00-09:00" } },

  // Grupo 5NM53
  { grupo:"5NM53", asignatura:"ÁLGEBRA LINEAL", profesor:"CALVA CRUZ CARLOS", edificio:"CB", salon:"000", horarios:{ Mar:"07:00-09:00", Mie:"07:00-09:00" } },
  { grupo:"5NM53", asignatura:"MÉTODOS NUMÉRICOS", profesor:"LAZARO GONZALEZ SERGIO", edificio:"CB", salon:"000", horarios:{ Lun:"13:00-15:00", Mar:"13:00-15:00" } },
  { grupo:"5NM53", asignatura:"CONTABILIDAD FINANCIERA Y DE COSTOS", profesor:"MARTINEZ RAMIREZ ERLY", edificio:"CS", salon:"000", horarios:{ Lun:"09:00-11:00", Mie:"09:00-11:00" } },
  { grupo:"5NM53", asignatura:"APLICACIÓN DE LA CIENCIA ECONÓMICA", profesor:"CRUZ RODRIGUEZ RAFAEL", edificio:"CS", salon:"000", horarios:{ Lun:"07:00-09:00", Vie:"09:00-11:00" } },
  { grupo:"5NM53", asignatura:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", profesor:"MENDEZ GARCIA SARA", edificio:"CI", salon:"000", horarios:{ Mar:"09:00-11:00", Vie:"09:00-11:00" } },
  { grupo:"5NM53", asignatura:"COMUNICACIÓN DE DATOS", profesor:"CASILLAS RIVAS ALEJANDRO", edificio:"CI", salon:"000", horarios:{ Lun:"11:00-13:00", Mar:"11:00-13:00" } },
  { grupo:"5NM53", asignatura:"PROGRAMACIÓN WEB", profesor:"LOPEZ VALERIANO ILIANA", edificio:"CI", salon:"000", horarios:{ Jue:"07:00-09:00", Vie:"07:00-09:00" } },
];

function crearFilaMateria(materia, index, incluirCheckbox = true) {
  const tr = document.createElement("tr");

  if (incluirCheckbox) {
    const tdCheck = document.createElement("td");
    tdCheck.innerHTML = `<input type="checkbox" value="${index}">`;
    tr.appendChild(tdCheck);
  }

  const campos = ["grupo", "asignatura", "profesor", "edificio", "salon"];
  campos.forEach(campo => {
    const td = document.createElement("td");
    td.textContent = materia[campo];
    tr.appendChild(td);
  });

  const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  dias.forEach(dia => {
    const td = document.createElement("td");
    td.textContent = materia.horarios[dia] || "";
    tr.appendChild(td);
  });

  return tr;
}

function cargarTablaMaterias() {
  const tbody = document.querySelector("#tabla-materias tbody");
  materias.forEach((mat, i) => {
    const fila = crearFilaMateria(mat, i, true);
    tbody.appendChild(fila);
  });
}

function generarHorario() {
  const seleccionadas = Array.from(document.querySelectorAll('#tabla-materias input[type="checkbox"]:checked'))
    .map(input => materias[input.value]);

  const tbody = document.querySelector("#tabla-horario tbody");
  tbody.innerHTML = "";

  seleccionadas.forEach(mat => {
    const fila = crearFilaMateria(mat, null, false);
    tbody.appendChild(fila);
  });
}

cargarTablaMaterias();
