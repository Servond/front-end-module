import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Text, Button, Card } from '@chakra-ui/react';
import ReactHooks from './modules/ReactHooks';
import Counter from './modules/Counter';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  // const [item, setItem] = useState('test');

  // useEffect(() => {
  //   localStorage.setItem('items', item);
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => setUsers(json));
  // }, [item]);

  const textStyles = {
    fontSize: '3x1',
    fontWeight: 'bold',
    as: 'ins'
  }

  // const renderData = () => {
  //   return users.map((item, index) => {
  //     return (
  //       <tr key={index}>
  //         <td>{item.id}</td>
  //         <td>{item.name}</td>
  //         <td>{item.username}</td>
  //         <td>{item.email}</td>
  //       </tr>
  //     );
  //   });
  // };

  return (
    <Box textAlign="center">
      <Text sx={textStyles}>
        Ini tailwind CSS
      </Text>
      <Counter />
      <Routes>
        <Route path="/react-hooks" element={<ReactHooks />} />
      </Routes>
    </Box>
     
  );
}

export default App;
