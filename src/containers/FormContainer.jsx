import React, { Component } from "react";
import AboutYouContainer from '../containers/AboutYouContainer';
import WorkFinancesContainer from '../containers/WorkFinancesContainer';
 
import Button from '../components/Button';

class FormContainer extends Component{
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
        

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let aboutYouData = this.state.aboutYou;
    
        fetch('http://example.com',{
            method: "POST",
            body: JSON.stringify(aboutYouData),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(response => {
            response.json().then(data =>{
              console.log("Successful" + data);
            })
        })
      }   
    

    render(){
        return(
            <div class="quickcheck-form wrapper hybrid">

                        <form onSubmit={this.handleFormSubmit}>

                            <AboutYouContainer/>
                            <WorkFinancesContainer/>

                            <Button 
                                action = {this.handleFormSubmit}
                                type = {'primary'} 
                                title = {'Check now'}
                            />

                        </form>
                    </div>
        );
            
    }
}

export default FormContainer;
