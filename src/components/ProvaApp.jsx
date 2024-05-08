function getSaludo() {
  const saludo = {
    nom: 'David',
    cognoms: 'Castelló',
  };

  const { nom, cognoms } = saludo;

  return `Hola ${nom} ${cognoms}`;
}

export function ProvaApp() {
  const nom = 'David';

  return (
    <>
      <h1>Hola {nom}</h1>
      <p>Prova React</p>
      <p>{getSaludo()}</p>
    </>
  );
}
