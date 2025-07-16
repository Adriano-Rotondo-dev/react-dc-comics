const comicLinks = [
  "Characters",
  "Comics",
  "Movies",
  "TV",
  "Games",
  "Videos",
  "New",
];

export default function ComicLinks() {
  return (
    <>
      {comicLinks.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </>
  );
}
