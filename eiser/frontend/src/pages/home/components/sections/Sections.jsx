import React from 'react'
import Men from './men/Men'
import Money from './money/Money'
import Products from './products/Products'
import Collection from './collections/Collection'
import Inspared from './05-inspared/Inspared'

const Sections = () => {
  return (
    <div>
        <Men/>
        <Money/>
        <Collection/>
        <Products/>
        <Inspared/>
    </div>
  )
}

export default Sections