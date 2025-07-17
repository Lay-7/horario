const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
const horas = [
  "07:00-09:00",
  "09:00-11:00",
  "11:00-13:00",
  "13:00-15:00"
];

const materias = [
  { grupo: "5NM50", nombre: "ÁLGEBRA LINEAL", profesor: "RIOS", horarios: { Mar: "13:00-15:00", Mie: "13:00-15:00" } },
  { grupo: "5NM50", nombre: "MÉTODOS NUMÉRICOS", profesor: "GUTIERREZ", horarios: { Mie: "11:00-13:00", Vie: "11:00-13:00" } },
  { grupo: "5NM50", nombre: "CONTABILIDAD", profesor: "RAMIREZ", horarios: { Mar: "07:00-09:00", Jue: "07:00-09:00" } },
  // Puedes agregar el resto aquí
];

function crearSelector() {
  const cont = document.getElementById("selector-materias");
  materias.forEach((mat, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${index}"> ${mat.nombre} (${mat.grupo}) - ${mat.profesor}<br>`;
    cont.appendChild(label);
  });
}

function generarHorario() {
  const horario = document.getElementById("horario");
  horario.innerHTML = "";

  // Fila de encabezados
  horario.appendChild(crearCelda("Hora", "hora"));
  dias.forEach(dia => horario.appendChild(crearCelda(dia, "dia")));

  horas.forEach(hora => {
    horario.appendChild(crearCelda(hora, "hora"));
    dias.forEach(dia => {
      horario.appendChild(crearCelda("", `${dia}-${hora}`));
    });
  });

  const seleccionadas = [...document.querySelectorAll("input[type='checkbox']:checked")].map(i => materias[i.value]);

  seleccionadas.forEach(mat => {
    for (const [dia, hora] of Object.entries(mat.horarios)) {
      const celda = document.querySelector(`.grid div[class="${dia}-${hora}"]`);
      if (celda) {
        celda.textContent = mat.nombre;
        celda.style.backgroundColor = "#b3e5fc";
      }
    }
  });
}

function crearCelda(texto, clase) {
  const div = document.createElement("div");
  div.textContent = texto;
  div.className = clase;
  return div;
}

crearSelector();
