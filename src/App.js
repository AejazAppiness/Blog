import axios from './apis/jsonPlaceHoder';
import {useState, useEffect} from 'react'
import PostList  from './components/PostList';

function App() {
// const [bloglist, setBloglist] = useState([]);
// const getBlogs= () => {
//   axios.get('/posts').then(response => setBloglist(response.data))
// }  

// useEffect(() => {
// getBlogs()
// }, []);
// console.log(bloglist);
 return (
    <div className="App">
<PostList />
    </div>
  );
}

export default App;
