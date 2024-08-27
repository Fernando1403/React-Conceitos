import Card from "../Cards";

function Skills({ skills }) {
  
  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Avançado",
      tempoXp: "10 anos",
      color:"#15E077"
    },
    {
      titulo: "React",
      nivel: "Intermediario",
      tempoXp: "1 ano"
    },
    {
      titulo: "SQL",
      nivel: "Basico",
      tempoXp: "15 dias"
    },
    {
      titulo: "Python",
      nivel: "Intemediario",
      tempoXp: "2 anos"
    }
  ]
  
  return (
    <div className="skills">
      <h2>Habilidades</h2>

      <Card dataHabilidades={habilidades}/>
    </div>
  );
}

export default Skills;