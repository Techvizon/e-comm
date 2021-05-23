import { useAtom } from 'jotai';
import React,{useEffect} from 'react'
import { testAtom } from './atom/test.atom';
import useFireFetch from './hooks/firebase.hook';
import Routes from './Routes'

const App = () =>  {

//   useEffect(() => {
//     fetchTestData();
//   }, [])


//   const fetchTestData = async () => {
//     const response =  firestore.collection('test');
//     const testData =  (await response.get()).docs;
//     console.log('testData : ',testData);
//     testData.forEach((i)=>{
// console.log(i.data());
//     })
//   }

// const [testData,settestData] = useAtom(testAtom);

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
