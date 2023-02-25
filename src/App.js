import Post from './components/Post'

function App() {
  const post_titles = [
    { id: '1',
      title: "Recipe Name"},
    { id: '2',
      title: "Second Recipe"}
  ]
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Post title={post_titles[0].title}/>
      
      <Post title={post_titles[1].title}/>
    </div>
  );
}

export default App;