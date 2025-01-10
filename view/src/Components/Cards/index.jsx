import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from 'axios'

const Cards = () => {

    let [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]); 

    function getData() {
        axios.get("http://localhost:3000/news/")
            .then((res) => setData(res.data))
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/news/${id}`)
        getData()
    }

    function toggleFavorite(newsId) {
        if (favorites.includes(newsId)) {

            setFavorites(favorites.filter(id => id !== newsId));
        } else {

            setFavorites([...favorites, newsId]);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container className="my-5">
            <div className="text-center mb-4">
                <h2>Requirements to be Immigrants</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Row>
                {data.map((news, index) => (
                    <Col lg={3} md={6} key={index}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={news.image} />
                            <Card.Body>
                                <Card.Title className="text-uppercase bg-color-red">{news.country}</Card.Title>
                                <Card.Text className="font-weight-bold">{news.headline}</Card.Text>
                                <button onClick={() => handleDelete(news._id)}><MdDelete style={{ fontSize: '25px' }} /></button>
                                <button onClick={() => toggleFavorite(news._id)}>
                                    {favorites.includes(news._id) ? (
                                        <MdFavorite style={{ fontSize: '25px', color: 'red' }} />
                                    ) : (
                                        <MdFavoriteBorder style={{ fontSize: '25px' }} />
                                    )}
                                </button>
                                <Card.Text>{news.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Cards;
