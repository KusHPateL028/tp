import moment from 'moment'
function App() {
 
  const date = moment("12-04-1014");
  return (
    <>
      {date.format('MMMM DD YYYY, h:mm:ss a')}
    </>
    
  );
}

export default App;
