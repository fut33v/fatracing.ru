import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href="/fatracing">
          <img width="150" src="/images/fatracing.svg" style={{display:'inline'}}></img>
      </Link>
      ++
      <Link href="/tipacyclo">
        <a>ТИПА ЦИКЛОКРОСС</a>
      </Link>
      ++
      <Link href="/tourdeselishi">
        <a>Тур Де Селищи</a>
      </Link>
      ++
      <Link href="/vyalomarafon">
        <a>Вяломарафон</a>
      </Link>
      ++
      <Link href="/tsargravel">
        <a>ЦАРЬ ГРЕЙДЕР</a>
      </Link>
      ++
      <Link href="/critvn">
        <a>НОВГОРОДСКИЙ КРИТ</a>
      </Link>
      ++
      <Link href="/dirttrackfgvn">
        <a>DIRT TRACK FGVN</a>
      </Link>
      ++
      <Link href="/snowtrackfatracing">
        <a>SNOW TRACK</a>
      </Link>
      ++
      <Link href="/fatsprints">
        <a>ГОЛДСПРИНТ</a>
      </Link>
    </div>
  )
}
