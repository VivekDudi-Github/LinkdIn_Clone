import React from 'react'
import { Post_Container , Create_Post , Right_bar, App_layout, Post_Box ,NavBar , NavBar_down , InPagebox_layout } from "../../index"

function Home() {
  return (
    <>
        <App_layout>
        {/* <InPagebox_layout/> */}
        <NavBar/>
        <NavBar_down/>
                <Post_Container>
                    <Create_Post/>
                    <Post_Box/>
                    {/* <Post_Box/>
                    <Post_Box/>
                    <Post_Box/>
                    <Post_Box/>
                    <Post_Box/>
                    <Post_Box/>
                    <Post_Box/> */}
                </Post_Container>
              {/* <Right_bar/> */}
        </App_layout>
    </>
  )
}

export default Home