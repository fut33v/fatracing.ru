import Link from 'next/link'

export default function Header() {
  return (
    <Link href="/">
      {/* <a className="hover:underline">{title}</a> */}
{/* style="display:inline-block; margin: 0 auto;" */}
    <div>
          {/* <img width="700" style={{display:'inline-block', margin:'0 auto'}} src="/images/fatracing.svg"></img> */}
          <img width="200" src="/images/fatracing.svg"></img>
    </div>
    </Link>
  )
}
