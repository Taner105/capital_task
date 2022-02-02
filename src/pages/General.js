import { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const General = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [searchCapital, setSearchCapital] = useState("")
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
    return (

        <div>
            <h1>COUNTRY INFORMATION</h1>
            <ReactBootStrap.ButtonToolbar aria-label="Toolbar with button groups">
                <ReactBootStrap.ButtonGroup className="me-2 m-2" aria-label="First group">
                    <ReactBootStrap.Button onClick={() => navigate("/")} className="m-2">Capital Search</ReactBootStrap.Button>
                    <ReactBootStrap.Button className="m-2">General Search</ReactBootStrap.Button>
                </ReactBootStrap.ButtonGroup>

            </ReactBootStrap.ButtonToolbar>

            <ReactBootStrap.InputGroup className="mb-3" >
                <ReactBootStrap.FormControl
                    placeholder="Search a General..."
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

                            item.region?.toLowerCase().includes(searchCapital.toLowerCase()) ||
                            item.name?.toLowerCase().includes(searchCapital.toLowerCase()) ||
                            item.capital?.toLowerCase().includes(searchCapital.toLowerCase())

                        )).map((item, index) => (
                            <tr className="table-country align-middle" key={index}>

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
export default General;