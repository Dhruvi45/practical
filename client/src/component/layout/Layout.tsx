import React, { ReactNode } from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../header/Header'
import { useLocation } from "react-router-dom";

interface Props {
    children: ReactNode
}

export default function Layout(props: Props) {
    const location = useLocation();
    return (
        <>
        <Container fluid className='custom-con'>
            <Row>
                {location.pathname === "/login" || location.pathname === "/" || location.pathname === "/signUp" ?
                    <div>{props.children}</div> :
                    <>
                        <Header />
                        <div>{props.children}</div>
                    </>
                }
            </Row>
            </Container>
        </>
    )
}
