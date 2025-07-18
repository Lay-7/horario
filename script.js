<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>

const materias = [
  {
    grupo: "4NM40",
    asignatura: "ADQUISICIÓN DE DATOS",
    profesor: "ORTIZ CASTREJON NANCY LORENA",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "11:00-13:00", jue: "11:00-13:00" }
  },
  {
    grupo: "4NM41",
    asignatura: "ADQUISICIÓN DE DATOS",
    profesor: "CASILLAS RIVAS ALEJANDRO",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "13:00-15:00", mie: "13:00-15:00" }
  },
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
  },
  {
    grupo: "5NM57",
    asignatura: "ESCENARIOS VIRTUALES",
    profesor: "BUSTAMANTE TRANQUILINO ROCIO",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "11:00-13:00", jue: "11:00-12:00" }
  },
  {
    grupo: "5NM58",
    asignatura: "HACKEO ÉTICO",
    profesor: "SANDOVAL GONZALEZ VICTOR L.",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "13:00-15:00", mie: "13:00-14:00" }
  },
  // Grupo 5NV50
  { grupo: "5NV50", 
    asignatura: "ÁLGEBRA LINEAL", 
    profesor: "BENITEZ LOPEZ RUBEN", 
    edificio: "CB", 
    salon: "000", 
    horarios: { mar: "18:00-20:00", mie: "18:00-20:00" } 
  },
  { grupo: "5NV50", 
    asignatura: "MÉTODOS NUMÉRICOS", 
    profesor: "GORDILLO RIVAS KARLA YOLANDA", 
    edificio: "CB", 
    salon: "000", 
    horarios: { mar: "20:00-22:00", jue: "20:00-22:00" } 
  },
  { grupo: "5NV50", 
    asignatura: "CONTABILIDAD FINANCIERA Y DE COSTOS", 
    profesor: "GONZALEZ RIVERA YESSICA ANNEL", 
    edificio: "X", 
    salon: "X", 
    horarios: { mie: "14:00-16:00", jue: "16:00-18:00" } 
  },
  { grupo: "5NV50", 
    asignatura: "APLICACIÓN DE LA CIENCIA ECONÓMICA",
    profesor: "DIAZ DIAZ ENRIQUE", 
    edificio: "CS", 
    salon: "000", 
    horarios: { mie: "20:00-22:00", vie: "20:00-22:00" } 
  },
  { grupo: "5NV50", 
    asignatura: "TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", 
    profesor: "MORTERA ZENTENO CARLOS", 
    edificio: "CI", 
    salon: "000", 
    horarios: { lun: "16:00-18:00", vie: "18:00-20:00" } 
  },
  { grupo: "5NV50", 
    asignatura: "COMUNICACIÓN DE DATOS", 
    profesor: "ORTIZ CASTREJON NANCY LORENA", 
    edificio: "CI", 
    salon: "000", 
    horarios: { mar: "14:00-16:00", jue: "14:00-16:00" } 
  },
  { grupo: "5NV50", 
    asignatura: "PROGRAMACIÓN WEB", 
    profesor: "VIERA HARO JORGE", 
    edificio: "CI", 
    salon: "000", 
    horarios: { mar: "16:00-18:00", mie: "16:00-18:00" } 
  },

  // Grupo 5NV51
  { grupo: "5NV51", 
    asignatura: "ÁLGEBRA LINEAL",
    profesor: "GORDILLO RIVAS KARLA YOLANDA", 
    edificio: "CB", 
    salon: "000", 
    horarios: { lun: "14:00-16:00", vie: "14:00-16:00" } 
  },
  { grupo: "5NV51",
    asignatura: "MÉTODOS NUMÉRICOS", 
    profesor: "RODRIGUEZ JIMENEZ RAMON", 
    edificio: "CB", 
    salon: "000", 
    horarios: { lun: "18:00-20:00", mie: "18:00-20:00" } 
  },
  { grupo: "5NV51", 
    asignatura: "CONTABILIDAD FINANCIERA Y DE COSTOS", 
    profesor: "GONZALEZ RIVERA YESSICA ANNEL", 
    edificio: "X", 
    salon: "X", 
    horarios: { lun: "16:00-18:00", mie: "16:00-18:00" } 
  },
  { grupo: "5NV51",
    asignatura: "APLICACIÓN DE LA CIENCIA ECONÓMICA", 
    profesor: "ARELLANO LOPEZ ANA VELIA", 
    edificio: "CS", 
    salon: "000", 
    horarios: { mar: "16:00-18:00", jue: "14:00-16:00" } 
  },
  { grupo: "5NV51",
    asignatura: "TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", 
    profesor: "MORTERA ZENTENO CARLOS", 
    edificio: "CI", 
    salon: "000", 
    horarios: { lun: "20:00-22:00", vie: "20:00-22:00" } 
  },
  { grupo: "5NV51", 
    asignatura: "COMUNICACIÓN DE DATOS", 
    profesor: "MENESES GONZALEZ RAYMUNDO", 
    edificio: "CI", 
    salon: "000", 
    horarios: { mar: "18:00-20:00", vie: "18:00-20:00" } 
  },
  { grupo: "5NV51", 
    asignatura: "PROGRAMACIÓN WEB", 
    profesor: "CASTRO MENDEZ GILBERTO SAUL", 
    edificio: "CI", 
    salon: "000", 
    horarios: { mar: "14:00-16:00", mie: "14:00-16:00" } 
  },

  // Grupo 5NV52
  { grupo: "5NV52", 
    asignatura: "ÁLGEBRA LINEAL", 
    profesor: "CERON VILLEGAS MIGUEL", 
    edificio: "CB", 
    salon: "000", 
    horarios: { mar: "20:00-22:00", vie: "20:00-22:00" } 
  },
  { grupo: "5NV52", 
    asignatura: "MÉTODOS NUMÉRICOS", 
    profesor: "RODRIGUEZ JIMENEZ RAMON", 
    edificio: "CB", 
    salon: "000", 
    horarios: { mie: "20:00-22:00", vie: "18:00-20:00" } 
  },
  { grupo: "5NV52", 
    asignatura: "CONTABILIDAD FINANCIERA Y DE COSTOS", 
    profesor: "GARCIA RODRIGUEZ MONICA ELIZABETH", 
    edificio: "CS", 
    salon: "000", 
    horarios: { mar: "18:00-20:00", mie: "18:00-20:00" } 
  },
  { grupo: "5NV52", 
    asignatura: "APLICACIÓN DE LA CIENCIA ECONÓMICA",
    profesor: "TELLO NOLASCO J. APOLINAR ALFONSO", 
    edificio: "CS", 
    salon: "000", 
    horarios: { mar: "14:00-16:00", mie: "14:00-16:00" } 
  },
  { grupo: "5NV52",
    asignatura: "TEORÍA DE LA COMPUTACIÓN Y COMPILADORES",
    profesor: "LUQUE MARQUEZ FERNANDO",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "14:00-16:00", vie: "14:00-16:00" } 
  },
  { grupo: "5NV52",
    asignatura: "COMUNICACIÓN DE DATOS",
    profesor: "MARTINEZ TLAHUEL MIGUEL A.",
    edificio: "CI",
    salon: "000",
    horarios: { mar: "16:00-18:00", mie: "16:00-18:00" }
  },
  { grupo: "5NV52",
    asignatura: "PROGRAMACIÓN WEB",
    profesor: "CASTRO MENDEZ GILBERTO SAUL",
    edificio: "CI",
    salon: "000",
    horarios: { lun: "16:00-18:00", jue: "18:00-20:00" } 
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
    return;
  }

  // Verificar si hay conflicto
  const conflictos = [];

  dias.forEach(dia => {
    const nuevoHorario = materia.horarios[dia];
    if (!nuevoHorario) return;

    // Revisar materias ya agregadas
    for (let fila of tabla.rows) {
      const otraMateria = materias.find(m => `fila-${materias.indexOf(m)}` === fila.id);
      if (!otraMateria || !otraMateria.horarios[dia]) continue;

      const existenteHorario = otraMateria.horarios[dia];
      if (seSuperpone(nuevoHorario, existenteHorario)) {
        conflictos.push(`${dia.toUpperCase()} ${nuevoHorario} con ${otraMateria.asignatura} (${existenteHorario})`);
      }
    }
  });

  if (conflictos.length > 0) {
    alert("⚠️ Conflicto de horario detectado:\n\n" + conflictos.join("\n"));
    checkbox.checked = false;
    return;
  }

  // Si no hay conflicto, agregar la materia
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

document.addEventListener("DOMContentLoaded", () => {
  cargarGrupos();
  mostrarMaterias();
  document.getElementById("grupoFiltro").addEventListener("change", mostrarMaterias);
});

function seSuperpone(h1, h2) {
  const [i1, f1] = h1.split("-").map(t => parseInt(t.replace(":", "")));
  const [i2, f2] = h2.split("-").map(t => parseInt(t.replace(":", "")));
  return i1 < f2 && i2 < f1;
}

function descargarHorarioComoImagen() {
  const horario = document.getElementById("tablaHorario");

  html2canvas(horario).then(canvas => {
    const link = document.createElement("a");
    link.download = "mi_horario.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
