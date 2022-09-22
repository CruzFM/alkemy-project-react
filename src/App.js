import './App.css';
import React from 'react';
import { Formik,Form,Field} from 'formik'

function App() {
 
//el HtmlFor sirve para linkear el label con el input, si hago click
// en el label Frist name me lleva a escribir en el input a traves del id = '...', una relacion innecesaria
//Field es el input en Formik
  return (<div>
    <Formik
     initialValues={{
      firstName: '',
    }}
    onSubmit={(values)=>{
      console.log(values)
    }}
    >
       <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" type='email' />       
        <button type="submit">Submit</button>
      </Form>
    </Formik>
   
    </div>
  );
}

export default App;
