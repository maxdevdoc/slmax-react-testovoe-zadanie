import Link from 'next/link'
import module from '../style/index.module.css'
import Image from 'next/image'
 
export default function Page() {

    const linkStyle = {
    textDecoration: "none",
    color: 'black'
  }
  return (
  <div className={module.container}>
    <h1 className={module.name_page}>Home</h1>

    <div className={module.block_category}>
        <Link href='/cats'  style={linkStyle}>
        <div className={module.block_category_cats}>
            <h3>See cats</h3>
            <Image src='/cats.jpg' alt='cat category' width={350} height={350} />
        </div>
        </Link>
        <Link href='/dogs'  style={linkStyle}>
        <div className={module.block_category_dogs}>
            <h3>See dogs</h3>
            <Image src='/dogs.jpg' alt='cat category' width={350} height={350} />
        </div>
        </Link>
    </div>
    </div>
  )
}
 
