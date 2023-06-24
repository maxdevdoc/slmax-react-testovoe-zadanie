import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '../../Components/Card';
import module from '../../style/solo-animal.module.css'

const Details =  () => {
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  
  const router = useRouter();
  
  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
    }
  }, [router.query.id]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/items/${id}`);
      const json = await res.json();
      setData(json);
    };
    
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className={module.solo_animal_block}>
      <Card name={data.name} image={data.image}/>
    </div>
  );
}

export default Details;