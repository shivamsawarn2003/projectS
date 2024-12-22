import React from "react";
import {Navbar , MailNQuote} from "./NavCommon";
import Filter from "./Filter";

function  paymentGateway(){
    return(
        <div>
            <Navbar />
            <MailNQuote />
            <Filter />

        </div>
    )
}
export default paymentGateway;
