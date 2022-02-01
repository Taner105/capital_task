import { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

const Main = () => {

    const [posts, setPosts] = useState({ blogs: [] })
    // console.log(posts);
    const [searchCapital, setSearchCapital] = useState("")

    useEffect(() => {
        const postList = async () => {
            const { data } = await axios("https://restcountries.com/v2/all")
            setPosts({ blogs: data })
            console.log(data);
        }
        postList()
    }, [setPosts])

    // useEffect(() => {
    //     axios.get("https://restcountries.com/v2/all")
    //         .then(res => {
    //             setSearchCapital(res.data)
    //             console.log(res.data);
    //         })
    //         .catch(error => console.log(error))
    // }, []);

    const filteredCapital = () => {
        posts.blogs.filter(post => post.capital.toLowerCase().includes(searchCapital.toLowerCase()))
    }
    return (
        <div>
            <ReactBootStrap.InputGroup className="mb-3" >
                <ReactBootStrap.FormControl
                    placeholder="Search a Country..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="search"
                    value={searchCapital}
                    onChange={(e) => setSearchCapital(e.target.value)}
                />
                <ReactBootStrap.Button variant="outline-secondary" id="button-addon2">
                    Button
                </ReactBootStrap.Button>
            </ReactBootStrap.InputGroup>


            <ReactBootStrap.Table striped bordered hover>
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
                        filteredCapital.blogs && filteredCapital.blogs.map((item) => (
                            <tr key={item.id}>

                                <td>{item.blogs.name}</td>
                                <td>{item.blogs.capital}</td>
                                <td>{item.blogs.region}</td>
                                <td><img style={{ width: "180px", height: "90px" }} src={item.blogs.flag} alt="flag" /></td>
                            </tr>

                        ))
                    }


                </tbody>
            </ReactBootStrap.Table>

        </div>

    )
}
export default Main;