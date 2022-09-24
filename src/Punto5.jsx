// Validar un formulario en tiempo real
// Consigna

// Con el objetivo de mejorar la UX, vamos a implementar un formulario de registro con validaciones en tiempo real. Para ello, utilizaremos las librerías formik y yup. Si hay errores en el formulario, los mismos deberán mostrarse luego de hacer click en el botón de enviar (pueden mostrarse en cualquier lugar, debiendo respetarse los textos de error).

// Requisitos

// Los campos que deberá contener el formulario de registro son:

// Nombre:

// El atributo name del input debe ser `fullname` (Todo minuscula).

// Como mínimo 4 y como máximo 50 caracteres. Error a mostrar: "El campo nombre debe tener entre 4 y 50 caracteres".

// Solo podrá contener letras. Error a mostrar: "El campo nombre solo puede contener letras".

// El campo debe ser obligatorio.

// Edad:

// El atributo name del input debe ser `age`

// Su valor debe ser tomado como numero.

// Solo podrá contener números. Error a mostrar: "El campo edad solo puede contener numeros"

// El mínimo es 18, el máximo es 99. Error a mostrar: El campo edad debe tener un valor entre 18 y 99

// El campo debe ser obligatorio

// Email:

// El atributo name del input debe ser `email`

// Deberá tener un formato de email correcto (utilizar la validacion estandar proporcionada por Yup). Error a mostrar: "El campo email debe tener un formato válido"

// El campo debe ser obligatorio.

// Para todos los casos, cuando un campo obligatorio no fué completado, deberá aparecer el texto: "El campo X es obligatorio", donde X es elatributo name del input.

// Recorda que debes utilizar los mensajes de error que se encuentran disponibles en el objeto `validationMessages`.

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const useState = React.useState;
const useEffect = React.useEffect;

const validationMessages = {
  fullname: {
    required: "El campo fullname es obligatorio",
    fieldLength: "El campo nombre debe tener entre 4 y 50 caracteres",
    format: "El campo nombre solo puede contener letras",
  },
  age: {
    required: "El campo age es obligatorio",
    numbers: "El campo edad solo puede contener numeros",
    fieldLength: "El campo edad debe tener un valor entre 18 y 99",
  },
  email: {
    required: "El campo email es obligatorio",
    format: "El campo email debe tener un formato válido",
  },
};

const SignupSchema = Yup.object().shape({
  // COMPLETAR VALIDACIONES
});

const ValidationSchemaExample = () => {
  return (
    <div>
      <h1>Signup</h1>

      {/* CONFIGURAR VALIDACIONES */}
      <Formik>{/* COMPLETAR */}</Formik>
    </div>
  );
};

export { ValidationSchemaExample, validationMessages };
