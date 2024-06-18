import {arc} from "d3"
import {useEffect} from "react"
const Arc = ()=>{
    const getData = async() =>{
        const response  = await fetch(`https://gist.githubusercontent.com/AndresF97/fd44d950e1fb83d18a699e17ceb17979/raw/fcfab7bbb3e2b11883572ec738bff74fdbcd683f/hajimenoippodata.csv`)
        const data =  await response.text()
        console.log(data)
    }
    
    useEffect(()=>{
        getData()
    },[])
    return (
        <section>

        </section>
    )
};

export default Arc;