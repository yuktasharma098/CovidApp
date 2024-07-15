import React from 'react'
import { NavLink } from "react-router-dom"
function Contact() {
    return (
        <div>

            <div class="container mt-5 text-dark bg-light">
                <h1 class=" mb-5 border-bottom font-weight-bold contactus text-center ">CONTACT US</h1>
                <div class="row text-dark mb-5">
                    <p class="mx-auto mb-5">Do you have any questions? Please do not hesitate to contact.I will come back to you within a matter of hours to help you.</p>
                    <div class="col-sm-9 mb-5">
                        <form action="">
                            <div class="form-group col-md-6">
                                <label class="inputName">Your Name</label>
                                <input type="text" name="" class="form-control" id="inputName" />

                            </div>
                            <div class="form-group col-md-6">
                                <label class="inputEmail">Your Email</label>
                                <input type="text" name="" class="form-control" id="inputEmail" />

                            </div>
                            <div class="form-group col-md-6">
                                <label class="inputSubject">Your Subject</label>
                                <input type="text" name="" class="form-control" id="inputName" />

                            </div>
                            <div class="mb-3">
                                <label for="inputTextArea"> Your Message</label>
                                <textarea class="form-control" id="inputTextarea" required></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">Send</button>

                        </form>
                    </div>
                    <div class="col-sm-3 text-center">
                        <ul class="list-unstyled">
                            <li class="contactlist">
                                <i class="fas fa-map-marker-alt fa-3x i-colo"></i>
                                <p>New Delhi,India</p>
                            </li>
                            <li class="contactlist">
                                <i class="fas fa-phone mt-4 fa-3x i-colo"></i>
                                <p>+91 7229948751</p>
                            </li>
                            <li class="contactlist">
                                <i class="fas fa-envelope mt-4 fa-3x i-c
                                olo"></i>
                                <p>shivankpandey23@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center mt-1">
                    <NavLink to="/" target="black"><i class="fab fa-twitter fa-2x i-colo mr-3"></i></NavLink>
                    <NavLink to="/" target="black"><i class="fab fa-facebook-f fa-2x  i-colo mr-3 "></i></NavLink>
                    <NavLink to="/" target="black"><i class="fab fa-instagram  fa-2x i-colo mr-3"></i></NavLink>
                    <NavLink to="/" target="black"><i class="fab fa-dribbble fa-2x i-colo mr-3"></i></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Contact
