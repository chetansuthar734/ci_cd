
import './App.css';

function App() {
const api = process.env.REACT_APP_API 

console.log(api)

async function handle(user_id){
  const res = await fetch(`${api}/users/${user_id}`,
    {method:'GET',
      // headers:{"authorization":`Bearer ${token}`}
    })
  if(!res.ok){alert(res.status);return}
  const data = await res.json()
  console.log("data : ",data)
}

async function demo(){
  const res = await fetch(`${api}/`,{method:'GET'})
  if (!res.ok){alert('error') ; return } 
  const data = await res.json()
  console.log(data)

}

  return (
    <div className="App">
      <header className="App-header">
        api:{api}   <button onClick={demo} >test "/" route </button>
        <form onSubmit={(e)=>{e.preventDefault();const inp = e.target.user_id.value ; handle(inp) }}>
      user_id<input name='user_id' placeholder=' user id integer'/>
      <button type='submit'>submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
