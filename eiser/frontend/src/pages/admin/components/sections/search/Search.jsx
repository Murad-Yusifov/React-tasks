import React from 'react'

const Search = () => {
  return (
    <div className="contain">
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setSorted('asc')}>ASC</button>
      <button onClick={() => setSorted('dsc')}>DSC</button>
      <button onClick={() => setSorted('default')}>Default</button>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder={formik.errors.price || 'Enter price'}
            {...formik.getFieldProps('price')}
          />
        </label>

        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder={formik.errors.title || 'Enter title'}
            {...formik.getFieldProps('title')}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div className="cover">
        {filterData.map((item) => (
          <div className="container" key={item._id}>
            {item.image && <img className="image" src={item.image} alt={item.title} />}
            <span>{item.title}</span>
            <span>{item.price}</span>
            <button onClick={() => dispatch(removeFromBasketAsync(item._id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Search