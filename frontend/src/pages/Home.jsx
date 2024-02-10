import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'


const Home = () => {
  const [groceries, setGroceries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true);
      axios.get("http://localhost:3000/grocery")
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home