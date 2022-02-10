import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href="/">
        {/* <a className="hover:underline">{title}</a> */}
  {/* style="display:inline-block; margin: 0 auto;" */}
            {/* <img width="700" style={{display:'inline-block', margin:'0 auto'}} src="/images/fatracing.svg"></img> */}
            <img width="150" src="/images/fatracing.svg" style={{display:'inline'}}></img>
      </Link>
      |
      <Link href="/tipacyclo">
        <a>ТИПА ЦИКЛОКРОСС</a>
      </Link>
      |
      <Link href="/tourdeselishi">
        <a>Тур Де Селищи</a>
      </Link>
      |
      <Link href="/vyalomarafon">
        <a>Вяломарафон</a>
      </Link>

    </div>
  )
}
