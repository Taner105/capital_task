import { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

const Main = () => {

    const [posts, setPosts] = useState([])
    // console.log(posts);
    const [searchCapital, setSearchCapital] = useState("")
    console.log(searchCapital);

    // useEffect(() => {
    //     const postList = async () => {
    //         const { data } = await axios(`https://restcountries.com/v2/all`)
    //         setPosts({ blogs: data })
    //         console.log(data);
    //     }
    //     postList()
    // }, [setPosts])

    const loadRecords = async () => {
        await axios.get(`https://restcountries.com/v2/all`)
            .then(res => {
                setPosts(res.data)
                console.log(res.data);
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        loadRecords();
    }, []);

    const handleChange = (e) => {
        setSearchCapital(e.target.value);
    };

    // const filteredCapital = () => {
    //     posts.blogs.filter(post => post.capital.toLowerCase().includes(searchCapital.toLowerCase()))
    // }
    return (
        <div>
            <ReactBootStrap.InputGroup className="mb-3" >
                <ReactBootStrap.FormControl
                    placeholder="Search a Capital..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="text"
                    value={searchCapital}
                    // onChange={(e) => setSearchCapital(e.target.value)}
                    onChange={handleChange}
                />
                {/* <ReactBootStrap.Button variant="outline-secondary" id="button-addon2">
                    Button
                </ReactBootStrap.Button> */}
            </ReactBootStrap.InputGroup>

            <ReactBootStrap.Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts?.filter((item) => (

                            item.capital?.toLowerCase().includes(searchCapital?.toLowerCase()))



                        ).map((item, index) => (
                            <tr className="table-country" key={index}>

                                <td>{item.name}</td>
                                <td>{item.capital}</td>
                                <td>{item.region}</td>
                                <td><img style={{ width: "180px", height: "90px" }} src={item.flag} alt="flag" /></td>
                            </tr>

                        ))
                    }


                </tbody>
            </ReactBootStrap.Table>

        </div>

    )
}
export default Main;