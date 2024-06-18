import React, { useState } from 'react'
import axios from "axios"
import { Input, message } from 'antd';
import "./search.css"
import Skeletonrs from './Skeleton-rs';
import SeacrcResults from './SeacrcResults';
const { Search } = Input;

function SearchComp() {

    const [Searchinput, setSearchinput] = useState("")
    const [Loading, setloading] = useState(false)
    const [Display, setDisplay] = useState("none")
    const [Results, setResults] = useState([])

    const SearchBook = async () => {

        try {
            console.log(Searchinput);
            setloading(true)
            setDisplay("block")
            const res = await axios.get("/sa-api/v1/search/search-book", { params: { Searchinput: Searchinput } })
            console.log(res.data["results"])
            if (res.data["results"].length > 0) {

                setDisplay("block")
                setloading(true)
                setResults(res.data["results"].map(data=>({
                    key:data._id,
                    label:data.Bookname,
                    children:(
                        <>
                        <h4 style={{margin:"5px"}}>{data.Author}</h4>
                        <p>{data.Description}</p>
                        </>
                    )
                })))
                setloading(false)

            } else {
                message.warning("No results found")
                setSearchinput("")
                setloading(false)
            }

        } catch (error) {
            console.log(error);
            message.error("No results found")
        }
    }
console.log(Results);
    return (
        <div className='ds-main'>

            <h2>Search Your Book</h2>

            <Search placeholder="Search a book"
                className='searchinput'
                onSearch={SearchBook} size="large" onChange={(e) => { setSearchinput(e.target.value) }} value={Searchinput} loading={Loading} enterButton />


            <div className='results' style={{ display: Display }}>

                {Loading === false || Results.length !== 0 ? (

                    <SeacrcResults Results={Results}/>

                )
                    :
                    (
                        <Skeletonrs />
                    )
                }


            </div>
        </div>
    )
}

export default SearchComp