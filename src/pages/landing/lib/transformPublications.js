export const transformPublications = (publications) => {
  const transform = publications.map((publication) => {
    const date = new Date(publication.fechaDeCreacion).toLocaleDateString("es-ES");

    const descripcion = publication.descripcion.split(/\r\n\r\n/);

    const paragraphs = publication.descripcion.split(/\r\n\r\n/);

    const firstParagraph = paragraphs.shift();

    return {
      id: publication.id,
      descripcion: descripcion,
      title: publication.titulo,
      images: publication.imagenes.map((imagen) => ({
        id: imagen.id,
        url: imagen.url,
      })),
      date: date,
      firstParagraph: firstParagraph,
      paragraphs: paragraphs,
      deleted: publication.deleted,
    };
  });
  return transform;
};
