import axios from 'axios';
import { getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem'

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const fetchTodos = async ()=>{
      setLoading(true)
      const res=await axios.get('/api/todo');
      setTodos(res.data)
      setLoading(false);
    }
    fetchTodos();
  },[]);
  return (
    <div>
      <Nav />
      <main>
        <TodoInput todo={todo} setTodo={setTodo} />
        <div>
          {
            todos.map(tod => (
              <TodoItem key={tod._id} tod={tod} />
            ))
          }
        </div>
        { loading && <h2>Loading ....</h2> }
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  if(!session){
    return {
      redirect: {
        destination: '/login',
        parmanent: false
      }
    }
  }
  return {
    props: {session}
  }
}

export default Home
