Components -> Each React component goes in separate file -
src/Car.js for Car component
src/House.js for House component
(capitlize name component)

- Components extends Component (imported from react )
- Export the component as the default object

- Skeletons assumes top object is App in App.js -> Best to keep this

---

CSS

-> Make a CSS file for each React Component
House.css for House component

- Import it at the top of House.js
- Create-React-App will automatically load that CSS
  Conventional to add className = "House" onto House div
  and use that as prefix for sub-items to style
