const React = require('react');
const { Link } = require('react-router-dom');

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                description: '',
                color: '',
                price: '',
                model: ''
            },
            message: ''            
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(event) {
        event.preventDefault();
        const { description, price, model, color } = this.state.form;
        const payload = { description, price: parseInt(price, 10), model, color };

        fetch('/api/bikes', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(() => {
            this.setState({ message: 'element inserted successfully' });
        }).catch(() => {
            this.setState({ message: 'internal server error' });
        });
    }

    onChange(event) {
        const { value, name } = event.target;
        this.setState((prev) => {
            const { form: prevForm } = prev;
            const form = Object.assign({}, prevForm, { [name]: value });

            return { form };
        });
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h2>New bike</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input type='text' className='form-control' id='description' name='description' onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='color'>Color</label>
                        <input type='text' className='form-control' id='color' name='color' onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input type='number' className='form-control' id='price' name='price' onChange={this.onChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='model'>Model</label>
                        <input type='text' className='form-control' id='model' name='model' onChange={this.onChange} />
                    </div>
                    <div>{message}</div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <Link to='/list' className='btn btn-secondary'>Back</Link>
                </form>
            </div>
        );
    }
}

module.exports = Add;