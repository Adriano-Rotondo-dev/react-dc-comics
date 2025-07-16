import comics from "../../data/comics";

export default function Comics() {
  return (
    <div className="content row">
      {comics.map((comic) => (
        <div className="col" key={comic.id}>
          <div className="card">
            <div className="cardHead">
              <img src={comic.thumb} alt={comic.title} />
            </div>
            <div className="cardBody">
              <h4>{comic.series}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
