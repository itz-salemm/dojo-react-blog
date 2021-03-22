import{ useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        {title:'My new website...', body:'Lorem ipsum...', author:'salem', id:1},
        {title:'Welcome Party...', body:'Lorem ipsum...', author:'goodness', id:2},
        {title:'Web dev top tips', body:'Lorem ipsum...', author:'pelumi', id:3},
    ]);

    const [name, setName] = useState('goodness');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(newBlogs);
    }

    useEffect(() => {
        console.log('Use effect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
           <button onClick={() => setName('luigi')}>Change name</button>
           <p>{ name }</p>
        </div>


     );
}
 
export default Home;