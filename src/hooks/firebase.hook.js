import React, { useEffect, useState } from "react";
import firestore from "../configs/firebase.config";

const useFireFetch = (collection) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 

    

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                

                const response =  firestore.collection(collection);
                const testData =  (await response.get()).docs;
                let tmpData = [];
                testData.forEach((i)=>{
                    console.log(i.data());
                    tmpData.push(i.data());
                        })
                setData(tmpData);

            } catch (e) {
                setData([]);
                setError(e);
            }
            setIsLoading(false);
        }

        fetchData();
    }, []);
    return { data, error, isLoading }
} 

export default useFireFetch;