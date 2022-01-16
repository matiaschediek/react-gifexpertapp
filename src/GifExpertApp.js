import React, { useState } from 'react'
import { AddCaterory } from './components/AddCaterory'
import GifDrid from './GifDrid'

function GifExpertApp() {

    const [categories, setCategories] = useState(['HunterXHunter'])

    return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCaterory setCategories={setCategories}/>
          <hr/>


          <ol>
              {categories.map(category =>
                  <GifDrid key={category} category={category}/>)}
          </ol>
        </>
)};

export default GifExpertApp
