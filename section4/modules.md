Modules -> CRA uses ES2015 modules. This is a newer, standarzided version of Node's require()
You use this to export/import classes/data/functions between JS files

- To default or not?
- Conventionally, default exports are used when there`s a most likely thing to exporting.
- For example, in a React component file, it is common to have the component be the default export.
- You never need to make a default export, but it can be helpful to indicate the most important thing in a file.
