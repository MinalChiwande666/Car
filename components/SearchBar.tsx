"use client";
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
  const [manufacturer,setmanufacturer] = useState('')
  const handleSearch = ()=>{}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
        manufacture={manufacturer}
        setmanufacture={setmanufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar