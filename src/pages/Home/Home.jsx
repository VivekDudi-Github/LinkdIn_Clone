import React from 'react'
import { Post_Container , Create_Post , Right_bar, App_layout, Post_Box } from "../../index"

function Home() {
  return (
    <>
        <App_layout>
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