import "./Searchbar.css"
export const SearchBar = ({ marginHorizontal = 0, marginVertical = 0, text }) => {
  console.log(marginVertical)
  return (
    <div style={{
      margin: `${marginVertical} ${marginHorizontal}`
    }}>
      <input
        className="search-bar"

        type="text"
        placeholder={text || "Search for services"}
      />
    </div>
  )
}