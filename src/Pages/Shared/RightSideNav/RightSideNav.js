import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarusel from '../BrandCarusel/BrandCarusel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>


                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>

            </ButtonGroup>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-4'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><FaTwitch /> Twitch</ListGroup.Item>

                </ListGroup>

            </div>
            <div>
                <BrandCarusel/>
            </div>
        </div>
    );
};

export default RightSideNav;