const subs = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];

export default function DCSubs() {
  return (
    <>
      {subs.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </>
  );
}
