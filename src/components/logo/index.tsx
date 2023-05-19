import React from 'react'
import Link from 'next/link'

import Title from '../titles'

const Logo = () => {
  return (
    <Link href='/'>
      <Title content='#SM' textStyle='logo' titlingScale={1.1} />
    </Link>
  )
}

export default Logo
