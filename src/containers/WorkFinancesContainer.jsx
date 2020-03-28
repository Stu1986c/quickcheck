import React, {Component} from 'react';

import Input from '../components/Input';
import Select from '../components/Select';

class WorkFinancesConainter extends Component{
    constructor(props){
        super(props);

        this.state = {
            workFinance : {
                employmentStatus: '',
                occupation: '',
                income: '',
                additionalIncome: false,
                numberOfDependents: '',
                cashAdvance: false
            },

            employmentStatusOptions: ['Employed', 'Self-employed', 'Retired', 'Homemaker', 'Student', 'Unemployed'],
            binaryOptions: ['Yes', 'No']
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
    this.setState( prevState => ({ workFinance : 
         {...prevState.workFinance, [name]: value
         }
       }), () => console.log(this.state.workFinance))
    }

    render(){
        return(
            <div class="col-xl-4">
            <h2 class="light-heading">Work & finances</h2>
                <div class="work-finances">


            <Select
                name={'employmentStatus'}
                options = {this.state.employmentStatusOptions} 
                value = {this.state.workFinance.employmentStatus}
                placeholder = {'Please select'}
                handleChange = {this.handleInput}
            />

            <Input
                inputType={'text'}
                name={'occupation'}
                title={'Occupation'}
                value={this.state.workFinance.occupation}
                handleChange = {this.handleInput}
            />

            <Input
                inputType={'text'}
                name={'income'}
                title={'Year incomce, before tax'}
                value={this.state.workFinance.income}
                handleChange = {this.handleInput}
            />

            <Input
                inputType={'radio'}
                name={'additionalIncome'}
                value={this.state.workFinance.additionalIncome}
                handleChange = {this.handleInput}
            />
           
            
           <Select title={'Gender'}
                  name={'additionalIncome'}
                  options = {this.state.binaryOptions} 
                  value = {this.state.workFinance.additionalIncome}
                  placeholder = {'Select Gender'}
                  handleChange = {this.handleInput}
            />

            </div>
        </div>

        );
    }
}

export default WorkFinancesConainter;