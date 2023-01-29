import Link from "next/link"
import { CSSProperties } from "react"

export const LinkCustom = ({ href, children }: Props) => {
  return (
    <Link href={href} style={styles}>
        {children}
    </Link>
  )
}

interface Props {
    href: string
    children: JSX.Element | JSX.Element | string
}

const styles: CSSProperties = { 
    textDecoration: 'none',
    color: '#fff'
}