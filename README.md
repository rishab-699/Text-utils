In the react app.js component all the html elements you write should be embedded in a single div block. i.e 
<div>
    --your code here--
</div>

but, if you want something to display outside the div then you should be using something called JSX fragments. i.e
<>
    --your elements here--
    <div>
    --your code here--
    </div>
</>

for example:
<> 
    <h1>This is the text outside the div</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with rishab
        </a>
      </header>
    </div>
    </>
    ___________________________________________

    JSX
    their are some changes in jsx and moreover we can directly use the js elements inside the html

    let name = "Rushab"
function App() {
  return (
    <> 
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>hello {name}</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet praesentium modi aliquam voluptas, amet similique veniam hic quod harum totam? Consectetur quas, omnis laudantium iste ipsam nulla, deserunt obcaecati maiores, repellendus quibusdam excepturi? Cum.
      </div>
    </>
  );
}

