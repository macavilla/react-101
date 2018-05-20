import React, { Component } from 'react';
import profile_pic from '../assets/img/profile_pic.jpg'


export default class Home extends Component{
    render() {
        return (
            <div className="home">
                <img src={profile_pic} alt="Profile pic" />
                <h1>Maca Villa</h1>
                <p>Primeros pasos con React ⚛️ <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit nesciunt nemo, tempore adipisci voluptate, pariatur distinctio repellendus at commodi non! Dolorum aut sint eum est consequatur illo iusto veniam!</p>
            </div>
        );
    }
}
