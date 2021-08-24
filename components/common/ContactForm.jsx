import React from "react";
import { Formik, Form, ErrorMessage, FastField } from "formik";
import Recaptcha from 'react-google-recaptcha';
import axios from "axios";
import * as Yup from 'yup';
import { FiMessageSquare, FiCheckCircle, FiFrown, FiLoader } from "react-icons/fi";

const ErrorDiv = ({ error }) => <div className="invalid-feedback font-weight-bold">{ error }</div>;

function Email() {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
                recaptcha: '',
                success: false,
                failed: false
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Name field is required'),
                email: Yup.string()
                  .email('Invalid email')
                  .required('Email field is required'),
                message: Yup.string().required('Message field is required'),
                recaptcha:
                  process.env.NODE_ENV !== 'development'
                    ? Yup.string().required('Robots are not welcome yet!')
                    : Yup.string(),
            })}
            onSubmit={async (
                { name, email, message },
                { setSubmitting, resetForm, setFieldValue }
              ) => {
                try {
                    await axios({
                        method: 'POST',
                        url: '/api/contact',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        data: JSON.stringify({
                            name,
                            email,
                            message,
                        })
                    });
                    setSubmitting(false);
                    setFieldValue('success', true);
                    setTimeout(() => resetForm(), 3000);
                } catch (err) {
                    setSubmitting(false);
                    setFieldValue('success', false);
                    setFieldValue('failed', true);
                    alert('Something went wrong, please try again!');
                }
            }}
        >
            {({ values, touched, errors, setFieldValue, isSubmitting }) => (
                <Form className="mt-5">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={e => setFieldValue("email", e.currentTarget.value)}
                            className={
                                "form-control" + (errors.email && touched.email ? " is-invalid" : "")
                            }
                            disabled={isSubmitting}
                            value={values.email}
                        />
                        { errors.email && <ErrorDiv error={errors.email} /> }
                        {/* <ErrorMessage
                            component={ErrorDiv}
                            name="email"
                        /> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={e => setFieldValue("name", e.currentTarget.value)}
                            className={
                                "form-control" + (errors.name && touched.name ? " is-invalid" : "")
                            }
                            disabled={isSubmitting}
                            value={values.name}
                        />
                        { errors.name && <ErrorDiv error={errors.name} /> }
                        {/* <ErrorMessage
                            component={ErrorDiv}
                            name="name"
                        /> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className={
                                "form-control" +
                                (errors.message && touched.message ? " is-invalid" : "")
                            }
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            value={values.message}
                            onChange={e => setFieldValue("message", e.currentTarget.value)}
                            disabled={isSubmitting}
                        ></textarea>
                        { errors.message && <ErrorDiv error={errors.message} /> }
                        {/* <ErrorMessage
                            component={ErrorDiv}
                            name="message"
                        /> */}
                    </div>
                    {
                        values.name &&
                        values.email &&
                        values.message &&
                        (
                            <>
                                <FastField
                                    component={Recaptcha}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                                    name="recaptcha"
                                    onChange={(value) => setFieldValue('recaptcha', value)}
                                />
                                <ErrorMessage component={ErrorDiv} name="recaptcha" />
                            </>
                    )}
                    <button
                        type="submit"
                        className="btn-purple d-flex align-items-center mt-5 mx-auto"
                        disabled={isSubmitting}
                        style={{ background: values.success ? "green" : undefined }}
                    >
                        <span>Send Message</span>
                        <div className="icon ml-2">
                            {
                                isSubmitting ? 
                                    (<FiLoader />)
                                    : 
                                    values.success ? 
                                        (<FiCheckCircle />)
                                        :
                                        values.failed ?
                                            (<FiFrown />)
                                            :
                                            (<FiMessageSquare />)
                            }
                        </div>
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default Email;
