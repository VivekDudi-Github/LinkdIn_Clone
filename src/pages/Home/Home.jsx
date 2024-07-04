import React from 'react'
import {SideBar , Post_Container , Create_Post , Right_bar, Container_app, Post_Box } from "../../index"

function Home() {
  return (
    <>
        <Container_app>
            <SideBar/>
                <Post_Container>
                    <Create_Post/>
                    <Post_Box/>
                </Post_Container>
        </Container_app>
    </>
  )
}

export default Home