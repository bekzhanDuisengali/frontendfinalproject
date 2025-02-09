import { Component } from 'react';
import './employees-add-form.scss'
class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length > 2 && this.state.salary > 100) {
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        });
    } else {
        console.log('Некорректные данные');
    }
    }
    render(){
        const {name,salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What's his name?" 
                        onChange={this.onValueChange}
                        value={name}
                        name='name'/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?" 
                        onChange={this.onValueChange}
                        value={salary}
                        name='salary'/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}
export default EmployeesAddForm;