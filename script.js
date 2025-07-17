const materias = [
  // Grupo 5NM50
  {
    grupo: "5NM50",
    asignatura: "ÁLGEBRA LINEAL",
    profesor: "RIOS SURIANO FRANCISCO JAVIER",
    edificio: "CB",
    salon: "000",
    horarios: { mar: "13:00-15:00", mie: "13:00-15:00" }
  },
  {
    grupo: "5NM50",
    asignatura: "MÉTODOS NUMÉRICOS",
    profesor: "GUTIERREZ ESTRADA RAFAEL",
    edificio: "CB",
    salon: "000",
    horarios: { mie: "11:00-13:00", vie: "11:00-13:00" }
  },
  {
    grupo: "5NM50",
    asignatura: "CONTABILIDAD FINANCIERA Y DE COSTOS",
    profesor: "RAMIREZ CLEMENTE MIGUEL ANGEL",
    edificio: "CS",
    salon: "000",
    horarios: { mar: "07:00-09:00", jue: "07:00-09:00" }
  },
  {
    grupo: "5NM50",
    asignatura: "APLICACIÓN DE LA CIENCIA ECONÓMICA",
    profesor: "HERNANDEZ CRUZ BERNARDO",
    edificio: "CS",
    salon: "000",
    horarios: { mar: "09:00-11:00", jue: "09:00-11:00" }
  },
  {
    grupo: "5NM50",
    asignatura: "TEORÍA DE LA COMPUTACIÓN Y COMPILADORES",
    profesor: "X RODRIGUEZ JOSE LUIS",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "11:00-13:00", sab: "09:00-11:00" }
  },
  {
    grupo: "5NM50",
    asignatura: "COMUNICACIÓN DE DATOS",
    profesor: "X RODRIGUEZ JOSE LUIS",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "07:00-09:00", vie: "07:00-09:00" }
  },
  {
    grupo: "5NM50",
    asignatura: "PROGRAMACIÓN WEB",
    profesor: "GONZÁLEZ JÍMENEZ MIGUEL ÁNGEL",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "09:00-11:00", mie: "09:00-11:00" }
  },
  // Grupo 5NM51
  {
    grupo: "5NM51",
    asignatura: "ÁLGEBRA LINEAL",
    profesor: "RIOS SURIANO FRANCISCO JAVIER",
    edificio: "CB",
    salon: "000",
    horarios: { mar: "11:00-13:00", mie: "11:00-13:00" }
  },
  {
    grupo: "5NM51",
    asignatura: "MÉTODOS NUMÉRICOS",
    profesor: "LAZARO GONZALEZ SERGIO",
    edificio: "CB",
    salon: "000",
    horarios: { mie: "09:00-11:00", vie: "11:00-13:00" }
  },
  {
    grupo: "5NM51",
    asignatura: "CONTABILIDAD FINANCIERA Y DE COSTOS",
    profesor: "RAMIREZ CLEMENTE MIGUEL ANGEL",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "13:00-15:00", mie: "13:00-15:00" }
  },
  {
    grupo: "5NM51",
    asignatura: "APLICACIÓN DE LA CIENCIA ECONÓMICA",
    profesor: "JUAREZ MILLAN MARGARITA",
    edificio: "CS",
    salon: "000",
    horarios: { mar: "13:00-15:00", vie: "13:00-15:00" }
  },
  {
    grupo: "5NM51",
    asignatura: "TEORÍA DE LA COMPUTACIÓN Y COMPILADORES",
    profesor: "X RODRIGUEZ JOSE LUIS",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "07:00-09:00", jue: "07:00-09:00" }
  },
  {
    grupo: "5NM51",
    asignatura: "COMUNICACIÓN DE DATOS",
    profesor: "CUEVAS ESCOBAR SUSANA",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "09:00-11:00", vie: "09:00-11:00" }
  },
  {
    grupo: "5NM51",
    asignatura: "PROGRAMACIÓN WEB",
    profesor: "LOPEZ VALERIANO ILIANA",
    edificio: "CI",
    salon: "000",
    horarios: { mie: "07:00-09:00", jue: "09:00-11:00" }
  },
  // Grupo 5NM52
  {
    grupo: "5NM52",
    asignatura: "ÁLGEBRA LINEAL",
    profesor: "CALVA CRUZ CARLOS",
    edificio: "CB",
    salon: "000",
    horarios: { mar: "11:00-13:00", jue: "07:00-09:00" }
  },
  {
    grupo: "5NM52",
    asignatura: "MÉTODOS NUMÉRICOS",
    profesor: "HERNANDEZ RUBI VICTOR",
    edificio: "CB",
    salon: "000",
    horarios: { mie: "13:00-15:00", vie: "13:00-15:00" }
  },
  {
    grupo: "5NM52",
    asignatura: "CONTABILIDAD FINANCIERA Y DE COSTOS",
    profesor: "GONZALEZ RIVERA YESSICA ANNEL",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "09:00-11:00", mie: "09:00-11:00" }
  },
  {
    grupo: "5NM52",
    asignatura: "APLICACIÓN DE LA CIENCIA ECONÓMICA",
    profesor: "ARELLANO LOPEZ ANA VELIA",
    edificio: "CS",
    salon: "000",
    horarios: { lun: "11:00-13:00", mie: "07:00-09:00" }
  },
  {
    grupo: "5NM52",
    asignatura: "TEORÍA DE LA COMPUTACIÓN Y COMPILADORES",
    profesor: "JESUS CARRILLO CARLOS",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "09:00-11:00", vie: "09:00-11:00" }
  },
  {
    grupo: "5NM52",
    asignatura: "COMUNICACIÓN DE DATOS",
    profesor: "CASILLAS RIVAS ALEJANDRO",
    edificio: "CI",
    salon: "000",
    horarios: { mie: "11:00-13:00", vie: "11:00-13:00" }
  },
  {
    grupo: "5NM52",
    asignatura: "PROGRAMACIÓN WEB",
    profesor: "MONTES CASIANO HERMES FRANCISCO",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "07:00-09:00", vie: "07:00-09:00" }
  },
  // Grupo 5NM53
  {
    grupo: "5NM53",
    asignatura: "ÁLGEBRA LINEAL",
    profesor: "CALVA CRUZ CARLOS",
    edificio: "CB",
    salon: "000",
    horarios: { mar: "07:00-09:00", mie: "07:00-09:00" }
  },
  {
    grupo: "5NM53",
    asignatura: "MÉTODOS NUMÉRICOS",
    profesor: "LAZARO GONZALEZ SERGIO",
    edificio: "CB",
    salon: "000",
    horarios: { lun: "13:00-15:00", mar: "13:00-15:00" }
  },
  {
    grupo: "5NM53",
    asignatura: "CONTABILIDAD FINANCIERA Y DE COSTOS",
    profesor: "MARTINEZ RAMIREZ ERLY",
    edificio: "CS",
    salon: "000",
    horarios: { lun: "09:00-11:00", mie: "09:00-11:00" }
  },
  {
    grupo: "5NM53",
    asignatura: "APLICACIÓN DE LA CIENCIA ECONÓMICA",
    profesor: "CRUZ RODRIGUEZ RAFAEL",
    edificio: "CS",
    salon: "000",
    horarios: { lun: "07:00-09:00", vie: "09:00-11:00" }
  },
  {
    grupo: "5NM53",
    asignatura: "TEORÍA DE LA COMPUTACIÓN Y COMPILADORES",
    profesor: "MENDEZ GARCIA SARA",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "09:00-11:00", vie: "09:00-11:00" }
  },
  {
    grupo: "5NM53",
    asignatura: "COMUNICACIÓN DE DATOS",
    profesor: "CASILLAS RIVAS ALEJANDRO",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "11:00-13:00", mar: "11:00-13:00" }
  },
  {
    grupo: "5NM53",
    asignatura: "PROGRAMACIÓN WEB",
    profesor: "LOPEZ VALERIANO ILIANA",
    edificio: "CI",
    salon: "000",
    horarios: { jue: "07:00-09:00", vie: "07:00-09:00" }
  }
];

const dias = ["lun", "mar", "mie", "jue", "vie", "sab"];

function cargarGrupos() {
  const grupos = [...new Set(materias.map(m => m.grupo))];
  const select = document.getElementById("grupoFiltro");
  grupos.forEach(g => {
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    select.appendChild(option);
  });
}

function mostrarMaterias() {
  const grupoSeleccionado = document.getElementById("grupoFiltro").value;
  const cuerpo = document.getElementById("tablaMaterias");
  cuerpo.innerHTML = "";

  const filtradas = grupoSeleccionado === "todos"
    ? materias
    : materias.filter(m => m.grupo === grupoSeleccionado);

  filtradas.forEach((m) => {
    const index = materias.indexOf(m);
    const fila = document.createElement("tr");

    // Ver si esta materia ya está seleccionada en el horario
    const seleccionada = document.getElementById(`fila-${index}`) !== null;

    fila.classList.toggle("selected", seleccionada);

    fila.innerHTML = `
      <td><input type="checkbox" id="chk-${index}" onchange="toggleMateria(${index})" ${seleccionada ? "checked" : ""}></td>
      <td>${m.grupo}</td>
      <td>${m.asignatura}</td>
      <td>${m.profesor}</td>
      <td>${m.edificio}</td>
      <td>${m.salon}</td>
      ${dias.map(d => `<td>${m.horarios[d] || ""}</td>`).join("")}
    `;
    cuerpo.appendChild(fila);
  });
}

function toggleMateria(index) {
  const materia = materias[index];
  const tabla = document.getElementById("tablaHorario");
  const id = `fila-${index}`;
  const existente = document.getElementById(id);

  const checkbox = document.getElementById(`chk-${index}`);
  const filaMateria = checkbox.closest("tr");

  if (existente) {
    existente.remove();
    filaMateria.classList.remove("selected");
  } else {
    const fila = document.createElement("tr");
    fila.id = id;
    fila.innerHTML = `
      <td>${materia.grupo}</td>
      <td>${materia.asignatura}</td>
      <td>${materia.profesor}</td>
      <td>${materia.edificio}</td>
      <td>${materia.salon}</td>
      ${dias.map(d => `<td>${materia.horarios[d] || ""}</td>`).join("")}
    `;
    tabla.appendChild(fila);
    filaMateria.classList.add("selected");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarGrupos();
  mostrarMaterias();
  document.getElementById("grupoFiltro").addEventListener("change", mostrarMaterias);
});
