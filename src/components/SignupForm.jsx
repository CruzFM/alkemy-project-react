import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export const SignupForm = () =>{
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //     },
    //     onSubmit: values =>{
    //         alert(JSON.stringify(values, null, 2))
    //     },
    // })

    const LoginSchema = Yup.object().shape({
        name: Yup.string()
            .min(4,'re corto el nombre')
            .required('Te falta el nombre pibe'),
        lastname: Yup.string()
            .min(2,'mas letras, mas')
            .required('Te falta el apellido amigo'),
        email: Yup.string()
            .email('Pifiaste el método del email, hermano')
            .required('Te falta el mail amigo'),
        password: Yup.string()
            .min(3, 'Cuchame, más de 3 pibe.')
            .required('sin contra, no pasás'),
        // age: Yup.number()
        //     .age('18 o más, o volvé a juntar las figus del mundial')
        //     .min(18, 'posta, 18 o andá a ver dbz')
    })

    console.log(Yup.object().shape())

    return(
        // <form onSubmit={formik.handleSubmit}>
        //     <label htmlFor='email'>Email</label>
        //     <input 
        //         id='email'
        //         name='email'
        //         type='email'
        //         onChange={formik.handleChange}
        //         value={formik.values.email}
        //     />
        //     <button type='submit'>Submit</button>
        // </form>
        <div className='container'>
            <h1>Login, here </h1>
            <Formik
                initialValues={{
                    name:'',
                    lastname: '',
                    email:'',
                    password:'',
                    // age: 0

                }}
                validationSchema={LoginSchema}
                onSubmit={ (e, values) =>{
                    e.preventDefault()
                    console.log(values)
                } }
            >
                {
                    ({touched, errors}) =>(
                        <Form>
                            
                            <div>
                                <label htmlFor='name'>Name</label>
                                <Field
                                    type='text'
                                    name='name'
                                    placehoder='Acá va el Nombre, querido'
                                />
                                {errors.name && touched.name && <div>{errors.name}</div>}
                            </div>
            
                            <div>
                                <label htmlFor='lastname'>Last name</label>
                                <Field
                                    type='text'
                                    name='lastname'
                                    placehoder='Acá va el apellido, troesma'
                                />
                                {errors.lastname && touched.lastname && <div>{errors.lastname}</div>}
                            </div>
                           
                            <div>
                                <label htmlFor='email'>Email</label>
                                <Field
                                    type='email'
                                    name='email'
                                    placehoder='Acá va el mail papi'
                                />
                                {errors.name && touched.email &&  <div>{errors.email}</div>}
                            </div>

                            <div>
                                <label htmlFor='password'>Password</label>
                                <Field 
                                    type='password'
                                    name='password'
                                    placehoder='Contraseña, pero que no sea 1234'
                                />
                                {errors.password &&  touched.password && <div>{errors.password}</div>}
                            </div>
                            {/* <div>
                                <label htmlFor='number'>Age</label>
                                <Field 
                                    type='number'
                                    name='age'
                                    placehoder='Qué viejo estás hermano'
                                />
                                {errors.name && <div>Acá no mientas, que ya estás grande</div>}
                            </div> */}
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>
        </div>

    )
}