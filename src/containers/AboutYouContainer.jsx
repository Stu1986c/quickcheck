import React, { Component } from 'react';

import Input from '../components/Input';   
import Select from '../components/Select';

class AboutYouContainer extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            aboutYou: {
                title: '',
                firstName: '',
                lastName: '',
                dob: '',
                emailAddress: '',
                mobilePhone: '',
                homePhone: ''
            },

            titleOptions: ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']

        }   
        
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
    this.setState( prevState => ({ aboutYou : 
         {...prevState.aboutYou, [name]: value
         }
       }), () => console.log(this.state.aboutYou))
    }

    render(){
        return(
            <div class="col-xl-4">
            <h2 class="light-heading">About you</h2>
                <div class="about-you">


            <Select
            name={'title'}
            options = {this.state.titleOptions} 
            value = {this.state.aboutYou.title}
            placeholder = {'Title'}
            handleChange = {this.handleInput}
        />
        
        <Input inputType={'text'}
            title= {'First name'} 
            name= {'firstName'}
            value={this.state.aboutYou.firstName} 
            handleChange = {this.handleInput}                   
        />                            

        <Input inputType={'text'}
            title= {'Last name'} 
            name= {'lastName'}
            value={this.state.aboutYou.lastName} 
            handleChange = {this.handleInput}                   
        />

        <Input inputType={'text'}
            title= {'Email address'} 
            name= {'emailAddress'}
            value={this.state.aboutYou.emailAddress} 
            handleChange = {this.handleInput}                   
        />
                        
        <Input inputType={'text'}
            title= {'Mobile number'} 
            name= {'mobilePhone'}
            value={this.state.aboutYou.mobilePhone} 
            handleChange = {this.handleInput}                   
        />

        <Input inputType={'text'}
            title= {'Home number'} 
            name= {'homePhone'}
            value={this.state.aboutYou.homePhone} 
            handleChange = {this.handleInput}                   
        />

</div>
                    </div>

        );
    }
}

export default AboutYouContainer;