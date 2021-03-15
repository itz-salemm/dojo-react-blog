import{ useState } from 'react';

const Home = () => {
    //let name ='Mario';

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('salem');
        setAge('42');
    }

    return ( 
        <div className="home">
            <h2>Hompage</h2>
            <p>{name}  is { age } years old</p>
            <button onClick={handleClick}>click me</button>
        </div>


     );
}
 
export default Home;