import { useAtom } from 'jotai';
import React,{useEffect} from 'react'
import { testAtom } from './atom/test.atom';
import firestore from './configs/firebase.config';
import useFireFetch from './hooks/firebase.hook';
import Routes from './Routes'

const App = () =>  {

  //  useEffect(() => {
  //   fetchTestData();
  // }, [])


  // const fetchTestData = async () => {
   //  const response =  await firestore.collection('test').doc().set({age:10, name:"a1"});
   //  console.log("res",response)
  // }
     
     

 //const [testData,settestData] = useAtom(testAtom);

// const { data, error, isLoading } = useFireFetch('test');

// useEffect(()=>{
//   console.log('data',data,isLoading);
//   settestData(data);
// },[data])

// if(isLoading){
//   console.log("loading",isLoading);
// }else{
//   console.log('data',data,isLoading);
//   // settestData(data);
// }

  return(
    
  <Routes/>
  );

}

export default App;
