import React from 'react'
import Wrapper from '../assets/wrappers/SearchContainer'
import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions, statusOptions, jobTypeOptions, handleChange, clearFilters } = useAppContext()

  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({name:e.target.name, value: e.target.value})
    console.log(e.target.name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }

  return <Wrapper>
    <form className='form'>
      <h4> search form</h4>
      <div className='form-center'>
        <FormRow type='text' name='search' value={search} handleChange={handleSearch} />
        <FormRowSelect labelText='status' name='searchStatus' value={searchStatus} handleChange={handleSearch} list={['all', ...statusOptions]} /> 
        <FormRowSelect labelText='type' name='searchType' value={searchType} handleChange={handleSearch} list={['all', ...jobTypeOptions]} /> 
        <FormRowSelect labelText='sort' value={sort} handleChange={handleSearch} list={sortOptions} /> 
        <button className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit}>
          clear filters
        </button>
      </div>
        
    </form>
  </Wrapper>
}

export default SearchContainer