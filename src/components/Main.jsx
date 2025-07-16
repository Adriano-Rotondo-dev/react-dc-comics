import comics from "../data/comics";
import Comics from "./Main Components/ComicsRows";

export default function Main() {
  return (
    <main>
      <div className="content row">
        {comics.map((comic) => (
          <Comics comic={comic} key={comic.id} />
        ))}
      </div>
      <button className="loadMore btn">LOAD MORE</button>
    </main>
  );
}
