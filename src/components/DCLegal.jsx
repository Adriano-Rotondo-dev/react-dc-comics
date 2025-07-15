const legal = [
  "Terms of Use",
  "Privacy Policy (New)",
  "Ad Choices",
  "Advertising",
  "Jobs",
  "Subscriptions",
  "Talent Workshops",
  "CPSC Certificates",
  "Ratings",
  "Shop Help",
  "Contact Us",
];

export default function DCLegal() {
  return (
    <>
      {legal.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </>
  );
}
