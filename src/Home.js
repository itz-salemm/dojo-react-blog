import{ useState } from 'react';

const Home = () => {
    const [blogs, setBlog] = useState([
        {title:'My new website...', body:'Lorem ipsum...', author:'salem', id:1},
        {title:'Welcome Party...', body:'Lorem ipsum...', author:'goodness', id:2},
        {title:'Web dev top tips', body:'Lorem ipsum...', author:'pelumi', id:3},
    ]);
    return ( 
        <div className="home">
           {blogs.map((blog) => (
               <div className="blog-preview" key={blog.id}>
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <hr/>

               </div>
           )

           )}
        </div>


     );
}
 
export default Home;