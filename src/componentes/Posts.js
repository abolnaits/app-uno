import React from 'react';

class Posts extends React.Component{

    state = {
        posts:[]
    };
    //Fetch API del navegador 
    async componentDidMount(){
        console.log('!Componente Posts montado');
        //Se cargo el componente???
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(resp);
        //Convierto la respuesta
        const posts = await resp.json();
        console.log(posts);
        this.setState({posts:posts});
    }

    render(){
        {/* Devuelvo los datos del post */}
        return(
            
            <div id="posts">
                {
                    
                    this.state.posts.map((post)=>{
                    return(
                        <div key={post.id}>
                        
                        <h3>{post.id} - {post.title}</h3>
                        <p>
                            {post.body}
                        </p>
                    </div>
                    )
                    })
                }
            </div>
        )
    }
}

export default Posts;