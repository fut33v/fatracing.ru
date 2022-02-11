import Link from "next/link";
import s from "../styles/header.module.css";

export default function Header() {
  const links = [
    {
      title: "ТИПА ЦИКЛОКРОСС",
      url: "/tipacyclo"
    },
    {
      title: "Тур Де Селищи",
      url: "/tourdeselishi"
    },
    {
      title: "Вяломарафон",
      url: "/vyalomarafon"
    },
    {
      title: "ЦАРЬ ГРЕЙДЕР",
      url: "/tsargravel"
    },
    {
      title: "НОВГОРОДСКИЙ КРИТ",
      url: "/critvn"
    },
    {
      title: "DIRT TRACK FGVN",
      url: "/dirttrackfgvn"
    },
    {
      title: "SNOW TRACK",
      url: "/snowtrackfatracing"
    },
    {
      title: "ГОЛДСПРИНТ",
      url: "/fatsprints"
    }
  ];

  return (
    <header className={s.header}>
      <Link href='/fatracing'>
        <a className={s.header__logo}>
          <img
            width='150'
            src='/images/fatracing.svg'
            style={{ display: "inline" }}
          ></img>
        </a>
      </Link>
      <ul className={s.header__linksList}>
        {links.map((l) => (
          <li className={s.header__link}>
            <Link href={l.url}>
              <a className={s.header__title}>{l.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
