import './app.css';
import { Routes, Route } from 'react-router-dom';
import { Component, Fragment } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../seach-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import AppFilter from '../app-filter/app-filter';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import AppAdditionalInfo from '../app-additional-info/app-addition-info';
import Top from '../top/top';
import Fade from '../carousel/carousel';
import Cards from '../cards/cards';
import store from '../../redux/store';
// import RightWidget from '../right-widget/right-widget';
import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';
import News from '../../service/News';
import NewsList from '../news/newsList';
class App extends Component{
    constructor(props){
        super(props)
        this.state= {
            data: [
                {name: 'John C.', salary: 1200, increase: false, like: false ,id : 1},
                {name: 'Joshua W.', salary: 1700, increase: false, like: false ,id : 2},
                {name: 'Eleni B.', salary: 900, increase: false, like: false ,id : 3},
                {name: 'David M.', salary: 1900, increase: false, like: false ,id : 4},
                {name: 'Roger K.', salary: 3200, increase: false, like: false ,id : 5},
                {name: 'Emily E.', salary: 2100, increase: false, like: false ,id : 6},
                {name: 'Cristine L.', salary: 1100, increase: false, like: false ,id : 7},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
        this.news = new News();
    }
    
    getMaxSalary = () =>{
        const {data} = this.state;
        let maxSalary = -Infinity;
        let maxSalaryIndex = -1;
        data.forEach((item,index)=>{
            if(item.salary>maxSalary){
                maxSalary = item.salary;
                maxSalaryIndex = index;
            }
        })
        return{
            maxSalary: maxSalary,
            nameOfMaxSalaryEmployee: maxSalaryIndex !== -1 ? data[maxSalaryIndex].name : null
        }
    }
    
    deleteItem = (id) => {
        this.setState(({data})=>{
            return {
                data: data.filter(item=>item.id!==id)
            }
        })
    }
    addItem = (name,salary) =>{
        const newItem ={
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }
    onToggleIncrease = (id) =>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id===id){
                    return{...item,increase: !item.increase}
                }
                return item
            })
        }))
    }
    onToggleDecrease = (id) =>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id===id){
                    return{...item,like: !item.like}
                }
                return item
            })
        }))
    }
    searchEmp =(items,term) =>{
        if(term.length === 0){
            return items;
        }
        return items.filter(item=>{
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) =>{
        this.setState({term});
    }
    filterPost = (items,filter) =>{
        switch(filter){
            case "like":
                return items.filter(item=>item.like===true)
            case "salary":
                return items.filter(item=>item.salary>=1000)
            default:
                return items

        }
    }    
    
    onFilterSelect = (filter) =>{
        this.setState({filter})
    }
    render(){
        const {data,term,filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item=>item.increase).length;
        const liked = this.state.data.filter(item=>item.like).length;
        const visibleData = this.filterPost(this.searchEmp(data,term),filter);
        return (
            <>
                <div className="app">
                <Top />
                <Routes>
                <Route path="/" element={
                    <Fragment>
                        <AppInfo employees={this.state.data.length} increased={this.state.data.filter(item => item.increase).length} liked={this.state.data.filter(item => item.like).length} />
                        <Cards getMaxSalary={this.getMaxSalary} data={this.state.data} />
                        <AppAdditionalInfo />
                        <Footer/>
                    </Fragment>
                    } />
                    <Route path="/info" element={
                    <Fragment>
                        <NewsList/>
                        <Fade />
                        <AppAdditionalInfo />
                        <Footer/>
                    </Fragment>
                    } />
                    <Route path="/additional-info" element={<AppAdditionalInfo />} />
                    <Route path="/search-panel" element={
                    <Fragment>
                        
                    </Fragment>
                    } />
                    <Route path="/employees-list" element={
                    <Fragment>
                        <div className='app-filter-block'>
                        <AppFilter filter={this.state.filter} onFilterSelect={this.onFilterSelect} />
                        <EmployeesList data={this.filterPost(this.searchEmp(this.state.data, this.state.term), this.state.filter)} onDelete={this.deleteItem} onToggleIncrease={this.onToggleIncrease} onToggleDecrease={this.onToggleDecrease} />
                        <EmployeesAddForm onAdd={this.addItem} />
                        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                        </div>
                    </Fragment>
                    } />
                    <Route path="/employees-add-form" element={<EmployeesAddForm onAdd={this.addItem} />} />
                    <Route path="/fade" element={<Fade />} />
                    <Route path='/contacts' element={<Contacts 
                                                name="Bekzhan"
                                                email="beckzhan04@gmail.com"
                                                phone="87785850711"/>}/>
                </Routes>
                
            </div>
            
            </>
            
        )
    }
}
export default App;