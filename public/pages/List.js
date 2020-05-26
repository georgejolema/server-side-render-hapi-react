'use strict';
const React = require('react');
const { Link } = require('react-router-dom');


class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bikes: []
        };

        this.delete=this.delete.bind(this);
    }

    fechBikes() {
        fetch('/api/bikes',{
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            return result.json();
           
        }).then(bikes => {
            this.setState({ bikes });
        });
    }

    componentDidMount() {
        this.fechBikes();
    }

    delete(id) {
        return () => {
            fetch(`/api/bikes/${id}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                this.fechBikes();
            });
        };
    }

    render() {
        const { bikes } = this.state;

        return (            
            <div>
                <h1>Bikes list</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>color</th>
                            <th>price</th>
                            <th>model</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikes.map((bike, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{bike.description}</td>
                                        <td>{bike.color}</td>
                                        <td>{bike.price}</td>
                                        <td>{bike.model}</td>
                                        <td>
                                            <button 
                                                className='btn btn-danger'
                                                onClick={this.delete(bike._id)}>delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>           
                <Link to='/add' className='btn btn-primary'>Add</Link>     
            </div>
        );
    }   
}

module.exports = List;
