import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/errorBoundry';
import './App.css';


function App(){
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfild] = useState('');
    const [count, setCount] = useState(0);
       
        

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))    
        }, []);


        
    const onSearchChange = (event) => {
        setSearchfild(event.target.value)    
        }


    const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        }) 

        console.log(count);
    return(
        
         !robots.length ? 
            <h1>Loading</h1> :
             
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <button onClick={() =>setCount(count+1)}>Click me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry> 
                         <CardList robots ={filteredRobots}/>
                    </ErrorBoundry>
                  
                </Scroll>
            </div>
        
    )
}
    


export default App;
