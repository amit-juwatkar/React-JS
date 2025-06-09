import React, { type ReactNode } from "react";

type child  = {
    children: ReactNode
}

export default function AboutUsPage({children}:child){
    return (
        <>
            I am About Us Page
            <br/>
            {children}
        </>
    )
}

const ContactUSPage = (prop) => {
    return (
        <>
            I am Contact Us Page
            {prop.myName}
            {prop.id}
            {prop.name}
            <br/>
            <div {...prop}>Hello New Prop </div>
        </>
    )
}
export { ContactUSPage };


class Portfolio extends React.Component {
  render() {
    return (
        <>
            I am Portfolio Us Page
            <br/>
        </>
    );
  }
}

export { Portfolio }