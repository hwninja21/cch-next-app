import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input } from "reactstrap";
import { firebaseClient } from '../../firebase/firebaseClient';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

function Login({ openModal, isOpen, modalStat, redirectPath, formRef, userEmail }) {
    let db = null;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    if (typeof window !== "undefined") {
        db = firebaseClient.firestore();
    }

    useEffect(() => {
        if (userEmail) setEmail(userEmail);
    }, [userEmail])

    const handleSubmit = () => {

        if (!email) {
            toast.warn("Enter email address!");
            return
        }

        const reg = /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(email)) {
            toast.warn("Invalid Email format!");
            return;
        }

        if (password.length < 6) {
            toast.warn("Password must be 6 characters!");
            return
        }

        if (modalStat === 'login') {
            console.log("login request")
            firebaseClient
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(data => {
                    toast.success("Log in success!");

                    resetModal();
                    refresh();
                })
                .catch(err => {
                    console.log(err);
                    toast.warn(err.message);
                });
        }

        if (modalStat === 'signup') {
            console.log("signup reqeust")
            firebaseClient
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async credential => {
                    toast.success("Sign up success!");

                    console.log({ credential })
                    const { uid, email, emailVerified, displayName, phoneNumber, photoURL } = credential.user;

                    // Save user data to firestore
                    await db.collection('users')
                        .add({ uid, email, emailVerified, displayName, phoneNumber, photoURL })

                    // Semd Email verification link
                    await credential.user.sendEmailVerification()
                        .then(() => {
                            toast.success("Verification email has been sent. Please check your inbox!");
                        })
                        .catch(e => {
                            toast.error("Can't send a verification email!");
                        })

                    resetModal();
                    refresh();
                })
                .catch(err => {
                    console.log(err)
                    toast.warn(err.message);
                })
        }
    }

    // reset modal staate email and password
    const resetModal = () => {
        // reset state
        setEmail('');
        setPassword('');
        openModal(!isOpen);
    }

    // refresh page
    const refresh = () => {
        if (formRef) {
            formRef.current.makePayment();
        }

        if (redirectPath) {
            router.replace(redirectPath);
        }
    }

    /** Social Login Function */
    const socialLogin = (brand) => {
        let provider = null;
        if (brand === 'google') {
            provider = new firebaseClient.auth.GoogleAuthProvider();
        } else if (brand === 'twitter') {
            provider = new firebaseClient.auth.TwitterAuthProvider();
        } else if (brand === 'facebook') {
            provider = new firebaseClient.auth.FacebookAuthProvider();
        }

        firebaseClient.auth()
            .signInWithPopup(provider)
            .then(async (result) => {
                const { additionalUserInfo: { isNewUser }, user: { uid, email, emailVerified, displayName, phoneNumber, photoURL }, credential: { providerId } } = result;

                if (!email) {
                    toast.warn('Unverified account!')
                    return
                }

                if (isNewUser) {
                    // Save user data to firestore
                    await db.collection('users')
                        .add({
                            uid,
                            email,
                            emailVerified,
                            displayName,
                            phoneNumber,
                            photoURL
                        })

                }

                openModal(!isOpen);
                refresh(redirectPath);
            }).catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    }

    console.log(formRef, '==>>')

    return (
        <>
            <Modal toggle={() => { resetModal(); openModal(!isOpen) }} isOpen={isOpen} className="login">
                <div className="modal-header">
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => { resetModal(); openModal(!isOpen) }}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    <div className="login-form">
                        <h1>
                            Sign Up/Log In
                        </h1>
                        <Form id="LoginForm">
                            <FormGroup>
                                <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <Button className="submit main-btn" onClick={handleSubmit}>
                                Get my Cachy
                                <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.561 10.0492C17.2904 10.0652 17.0625 10.1775 16.8765 10.386C16.6906 10.595 16.6058 10.8343 16.6218 11.1035L16.74 13.0945C16.8539 15.0129 16.2674 16.6944 14.9812 18.1388C13.6946 19.5831 12.0895 20.3624 10.166 20.4766C8.24216 20.5908 6.55603 20.0069 5.10793 18.7249C3.65954 17.4429 2.87854 15.8426 2.76464 13.9241L2.64646 11.9335C2.63048 11.6643 2.51768 11.437 2.30864 11.2511C2.09937 11.0661 1.8594 10.9816 1.58912 10.9977C1.31856 11.0137 1.09027 11.126 0.90469 11.3345C0.718762 11.5435 0.633991 11.7828 0.649973 12.052L0.768152 14.0427C0.904193 16.3342 1.78899 18.2817 3.42377 19.8856C5.05796 21.4901 7.0109 22.3497 9.28215 22.4639L9.40405 24.5172L5.41112 24.7542C5.14055 24.7703 4.91223 24.882 4.72664 25.091C4.54072 25.2995 4.4559 25.5387 4.47192 25.8085C4.4879 26.0777 4.60042 26.3049 4.80974 26.4908C5.01873 26.6759 5.25865 26.7604 5.52926 26.7443L15.5117 26.1517C15.782 26.1356 16.0102 26.0234 16.1961 25.8149C16.3817 25.6059 16.4668 25.3665 16.4508 25.0973C16.4348 24.8276 16.322 24.6003 16.113 24.415C15.9037 24.2294 15.6638 24.1455 15.3935 24.1616L11.4006 24.3986L11.2787 22.3454C13.5202 21.9629 15.3573 20.8784 16.7909 19.092C18.2238 17.306 18.8726 15.2675 18.7365 12.9759L18.6183 10.9853C18.6024 10.7161 18.4895 10.4888 18.2805 10.3029C18.071 10.1179 17.8313 10.0331 17.561 10.0492Z" fill="white" />
                                    <path d="M7.20685 10.3988L4.56822 10.5555L4.67658 12.3808L7.31521 12.2242C7.71831 12.2002 8.06425 12.5065 8.08811 12.9084C8.11197 13.3103 7.8047 13.6554 7.4016 13.6793L4.76445 13.8359C4.85221 15.1908 5.40865 16.3236 6.43596 17.2332C7.47107 18.1501 8.67536 18.5669 10.0478 18.4854C11.4203 18.4039 12.5665 17.8476 13.4861 16.8146C14.3983 15.7899 14.8171 14.5992 14.7439 13.2434L12.1987 13.3945C11.7956 13.4185 11.4496 13.1122 11.4258 12.7103C11.4019 12.3083 11.7092 11.9633 12.1123 11.9394L14.659 11.7882L14.5506 9.96286L12.004 10.114C11.6008 10.138 11.2549 9.83167 11.231 9.42979C11.2072 9.02791 11.5144 8.68282 11.9176 8.65888L14.4642 8.5077L14.349 6.56768L11.8024 6.71886C11.3993 6.7428 11.0533 6.43649 11.0295 6.03461C11.0056 5.63273 11.3129 5.28764 11.716 5.2637L14.2566 5.11288C14.1468 3.80605 13.5959 2.70817 12.5964 1.82238C11.561 0.906077 10.357 0.488647 8.98449 0.570127C7.61179 0.65162 6.46559 1.20858 5.5462 2.24093C4.65817 3.23873 4.24139 4.39405 4.28699 5.70474L6.91947 5.54846C7.32257 5.52453 7.66851 5.83079 7.69237 6.23272C7.71623 6.63465 7.40896 6.97969 7.00586 7.00362L4.36723 7.16027L4.4824 9.10029L7.12103 8.94364C7.52414 8.91971 7.87007 9.22597 7.89393 9.6279C7.91779 10.0298 7.60995 10.3749 7.20685 10.3988Z" fill="white" />
                                </svg>
                            </Button>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="social-logins">
                        <p>or via social media:</p>
                        <div className="social-icons">
                            <button className="social-icon google" onClick={() => socialLogin('google')}>
                            <svg width="58" height="58" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M145.66 0C225.773 0 291.32 65.547 291.32 145.66C291.32 225.773 225.773 291.32 145.66 291.32C65.547 291.32 0 225.772 0 145.66C0 65.548 65.547 0 145.66 0Z" fill="#DD4B39"/>
                                <path d="M219.4 121.079V137.466H235.786V153.853H219.4V170.24H203.013V153.853H186.626V137.466H203.013V121.079H219.4Z" fill="white"/>
                                <path d="M71.919 186.626C50.07 164.777 50.07 126.541 72.829 104.693C89.216 88.306 112.885 84.665 133.824 92.858L142.017 97.41L151.121 103.783L136.555 118.349L131.093 114.708C118.348 106.515 100.14 108.335 88.306 120.17C74.65 133.826 73.74 158.406 88.306 172.972C101.962 187.538 126.542 187.538 139.287 172.972C142.928 169.331 146.57 163.868 147.48 158.406V156.585H114.707V138.378H166.598L167.508 142.93V155.675C166.598 167.51 162.046 179.345 153.852 187.538C132.004 208.475 93.768 208.475 71.919 186.626Z" fill="white"/>
                            </svg>
                            </button>
                            <button className="social-icon twitter" onClick={() => socialLogin('twitter')}>
                            <svg width="58" height="58" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.098 112.196C87.0801 112.196 112.196 87.0801 112.196 56.098C112.196 25.1159 87.0801 0 56.098 0C25.1159 0 0 25.1159 0 56.098C0 87.0801 25.1159 112.196 56.098 112.196Z" fill="#55ACEE"/>
                                <path d="M90.46 40.316C88.056 41.382 85.47 42.103 82.758 42.425C85.527 40.766 87.652 38.141 88.655 35.008C86.064 36.545 83.193 37.66 80.14 38.261C77.694 35.656 74.209 34.028 70.35 34.028C62.946 34.028 56.941 40.033 56.941 47.437C56.941 48.488 57.06 49.511 57.29 50.493C46.146 49.934 36.265 44.596 29.651 36.481C28.497 38.461 27.835 40.766 27.835 43.223C27.835 47.874 30.204 51.98 33.8 54.384C31.603 54.315 29.534 53.712 27.727 52.705C27.726 52.762 27.726 52.819 27.726 52.875C27.726 59.372 32.35 64.791 38.483 66.022C37.359 66.33 36.172 66.493 34.951 66.493C34.085 66.493 33.246 66.41 32.428 66.254C34.134 71.58 39.085 75.457 44.954 75.566C40.364 79.163 34.583 81.306 28.299 81.306C27.219 81.306 26.149 81.243 25.102 81.118C31.033 84.924 38.083 87.143 45.655 87.143C70.319 87.143 83.807 66.711 83.807 48.99C83.807 48.409 83.794 47.83 83.768 47.256C86.39 45.366 88.663 43.005 90.46 40.316Z" fill="#F1F2F2"/>
                            </svg>
                            </button>
                            <button className="social-icon facebook" onClick={() => socialLogin('facebook')}>
                            <svg width="58" height="58" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.098 112.196C87.0801 112.196 112.196 87.0801 112.196 56.098C112.196 25.1159 87.0801 0 56.098 0C25.1159 0 0 25.1159 0 56.098C0 87.0801 25.1159 112.196 56.098 112.196Z" fill="#3B5998"/>
                                <path d="M70.201 58.2939H60.191V94.9659H45.025V58.2939H37.812V45.4059H45.025V37.0659C45.025 31.1019 47.858 21.7629 60.326 21.7629L71.56 21.8099V34.3199H63.409C62.072 34.3199 60.192 34.9879 60.192 37.8329V45.4179H71.526L70.201 58.2939Z" fill="white"/>
                            </svg>

                            </button>
                        </div>
                        <div className="gesture">
                            <img src="/images/gesture.png" alt=""/>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
        </>

    )
}

export default Login;
