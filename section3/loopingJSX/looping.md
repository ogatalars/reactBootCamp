It is common to use array.map(fn) to output loops in JSX:

class Messages extends React.Component {
render() {
const msgs = [ {id:1, text: "Greetings"},
{id:2, text: "Meeting"}]
return(
<ul> {msgs.map(m => <li>{m.text})</li>}
)
}
}
