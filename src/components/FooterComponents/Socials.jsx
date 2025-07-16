export default function Socials({ socials }) {
  return (
    <>
      {socials.map((link, index) => (
        <a key={index} href={link.href}>
          <img src={link.imgSrc} alt={link.alt} />
        </a>
      ))}
    </>
  );
}
