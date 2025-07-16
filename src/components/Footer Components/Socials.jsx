const socials = [
  {
    href: "#",
    imgSrc: "/img/footer-facebook.png",
    alt: "facebook",
  },
  {
    href: "#",
    imgSrc: "/img/footer-twitter.png",
    alt: "twitter",
  },
  {
    href: "#",
    imgSrc: "/img/footer-youtube.png",
    alt: "youtube",
  },
  {
    href: "#",
    imgSrc: "/img/footer-pinterest.png",
    alt: "pinterest",
  },
  {
    href: "#",
    imgSrc: "/img/footer-periscope.png",
    alt: "periscope",
  },
];

export default function Socials() {
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
