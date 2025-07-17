const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
const horas = ["07:00-09:00","09:00-11:00","11:00-13:00","13:00-15:00"];

const materias = [
  // Grupo 5NM50
  { grupo:"5NM50", nombre:"ÁLGEBRA LINEAL", horarios:{Mar:"13:00-15:00", Mie:"13:00-15:00"} },
  { grupo:"5NM50", nombre:"MÉTODOS NUMÉRICOS", horarios:{Mie:"11:00-13:00", Vie:"11:00-13:00"} },
  { grupo:"5NM50", nombre:"CONTABILIDAD FINANCIERA Y DE COSTOS", horarios:{Mar:"07:00-09:00", Jue:"07:00-09:00"} },
  { grupo:"5NM50", nombre:"APLICACIÓN DE LA CIENCIA ECONÓMICA", horarios:{Mar:"09:00-11:00", Jue:"09:00-11:00"} },
  { grupo:"5NM50", nombre:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", horarios:{Mar:"11:00-13:00", Vie:"09:00-11:00"} },
  { grupo:"5NM50", nombre:"COMUNICACIÓN DE DATOS", horarios:{Lun:"07:00-09:00", Vie:"07:00-09:00"} },
  { grupo:"5NM50", nombre:"PROGRAMACIÓN WEB", horarios:{Lun:"09:00-11:00", Mie:"09:00-11:00"} },
  // Grupo 5NM51
  { grupo:"5NM51", nombre:"ÁLGEBRA LINEAL", horarios:{Mar:"11:00-13:00", Mie:"11:00-13:00"} },
  { grupo:"5NM51", nombre:"MÉTODOS NUMÉRICOS", horarios:{Mie:"09:00-11:00", Vie:"11:00-13:00"} },
  { grupo:"5NM51", nombre:"CONTABILIDAD FINANCIERA Y DE COSTOS", horarios:{Lun:"13:00-15:00", Mie:"13:00-15:00"} },
  { grupo:"5NM51", nombre:"APLICACIÓN DE LA CIENCIA ECONÓMICA", horarios:{Mar:"13:00-15:00", Vie:"13:00-15:00"} },
  { grupo:"5NM51", nombre:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", horarios:{Mar:"07:00-09:00", Vie:"07:00-09:00"} },
  { grupo:"5NM51", nombre:"COMUNICACIÓN DE DATOS", horarios:{Mar:"09:00-11:00", Vie:"09:00-11:00"} },
  { grupo:"5NM51", nombre:"PROGRAMACIÓN WEB", horarios:{Mie:"07:00-09:00", Jue:"09:00-11:00"} },
  // Grupo 5NM52
  { grupo:"5NM52", nombre:"ÁLGEBRA LINEAL", horarios:{Mar:"11:00-13:00", Jue:"07:00-09:00"} },
  { grupo:"5NM52", nombre:"MÉTODOS NUMÉRICOS", horarios:{Mie:"13:00-15:00", Vie:"13:00-15:00"} },
  { grupo:"5NM52", nombre:"CONTABILIDAD FINANCIERA Y DE COSTOS", horarios:{Lun:"09:00-11:00", Mie:"09:00-11:00"} },
  { grupo:"5NM52", nombre:"APLICACIÓN DE LA CIENCIA ECONÓMICA", horarios:{Lun:"11:00-13:00", Mie:"07:00-09:00"} },
  { grupo:"5NM52", nombre:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", horarios:{Mar:"09:00-11:00", Vie:"09:00-11:00"} },
  { grupo:"5NM52", nombre:"COMUNICACIÓN DE DATOS", horarios:{Mie:"11:00-13:00", Vie:"11:00-13:00"} },
  { grupo:"5NM52", nombre:"PROGRAMACIÓN WEB", horarios:{Mar:"07:00-09:00", Vie:"07:00-09:00"} },
  // Grupo 5NM53
  { grupo:"5NM53", nombre:"ÁLGEBRA LINEAL", horarios:{Mar:"07:00-09:00", Mie:"07:00-09:00"} },
  { grupo:"5NM53", nombre:"MÉTODOS NUMÉRICOS", horarios:{Lun:"13:00-15:00", Mar:"13:00-15:00"} },
  { grupo:"5NM53", nombre:"CONTABILIDAD FINANCIERA Y DE COSTOS", horarios:{Lun:"09:00-11:00", Mie:"09:00-11:00"} },
  { grupo:"5NM53", nombre:"APLICACIÓN DE LA CIENCIA ECONÓMICA", horarios:{Lun:"07:00-09:00", Vie:"09:00-11:00"} },
  { grupo:"5NM53", nombre:"TEORÍA DE LA COMPUTACIÓN Y COMPILADORES", horarios:{Mar:"09:00-11:00", Vie:"09:00-11:00"} },
  { grupo:"5NM53", nombre:"COMUNICACIÓN DE DATOS", horarios:{Lun:"11:00-13:00", Mar:"11:00-13:00"} },
  { grupo:"5NM53", nombre:"PROGRAMACIÓN WEB", horarios:{Jue:"07:00-09:00", Vie:"07:00-09:00"} },
];

function crearSelector() {
  const cont = document.getElementById("selector-materias");
  materias.forEach((mat, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${i}"> [${mat.grupo}] ${mat.nombre}`;
    cont.appendChild(label);
    cont.appendChild(document.createElement("br"));
  });
}

function crearCelda(texto, clase) {
  const div = document.createElement("div");
  div.textContent = texto;
  div.className = clase;
  return div;
}

function generarHorario() {
  const cont = document.getElementById("horario");
  cont.innerHTML = "";
  
  // Cabecera
  cont.appendChild(crearCelda("Hora","hora"));
  dias.forEach(d => cont.appendChild(crearCelda(d,"dia")));
  
  horas.forEach(h => {
    cont.appendChild(crearCelda(h,"hora"));
    dias.forEach(d => cont.appendChild(crearCelda("","cell "+d+"-"+h)));
  });
  
  const seleccionadas = Array.from(document.querySelectorAll("input:checked"))
    .map(ch => materias[ch.value]);
  
  seleccionadas.forEach(mat => {
    Object.entries(mat.horarios).forEach(([d,h]) => {
      const cel = document.querySelector(`.cell.${d}-${h}`);
      if (cel && !cel.textContent) {
        cel.textContent = `${mat.nombre} (${mat.grupo})`;
        cel.style.backgroundColor = "#b3e5fc";
      } else if (cel) {
        cel.textContent += " / " + `${mat.nombre}`;
        cel.style.backgroundColor = "#ffcc80"; // conflicto
      }
    });
  });
}

crearSelector();
