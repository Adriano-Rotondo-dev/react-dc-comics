export default function Socials({ socials }) {
  return (
    <>
      <h3 className="follow">FOLLOW US</h3>
      {socials.map((link, index) => (
        <a key={index} href={link.href}>
          <img src={link.imgSrc} alt={link.alt} />
        </a>
      ))}
    </>
  );
}
