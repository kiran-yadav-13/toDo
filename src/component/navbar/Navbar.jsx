{/*
 Header
    -logo
    nav items
    cart
Body
    SEARCH BAR
    Restaurant List
    Restaurant Card
        -Image
        -Name
        -Rating
        -Cusines
Footer
    -Links
    -Copyrights


React.Fragment - a component which is exported by the react. which help us wrap all the component in a one tag. which is empty tag (orignaal <React.Fragment> </React.Fragment>  shortfor <> </>)
Jsx can have only one parent

you can't give the style through react fragment


one way data binding?
modify the variable on the screen or window when any changes occur in the variable

what is state?
if we need to maintain a variable that changes. we have maintain a variable that is react variable.(sate)
every component in raet maintains a state. and we can put in all the variables in state.
everytime we have to create a local variable use state
we  can only modify the state using only setState

why state?
react never keep in check of js variable  it didn't know whwn its get updated
hence if you want to syn your variable changes in sync with the ui then create state variables


what is hooks?
Hooks are nothing but a normal js function(just like functional component).
ex- useState (come from react)(named import)
this function returns an array in which 1st thing is local variable which is state


onchange - when change occur in a input 
onchange ={(e) =>{setState(e.target.value)}} e is the event
value - is what will be shown on the input

1) React inputs are different from html inputs 
2) we have to bind the input from the state

when the state gets updated only that element or the div gets re-render(re-concilation)




Homework

can we use reactFragment inside react fragment?

*/}

import "./Index.css"
const Title =()=>(
    <div className="title">
        <a href="/">
            <img className="logo" 
                alt="logo"
                src="data:image/jpeg;base64,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"   />
    
        </a>
        <h1 className="heading">Food Villa</h1>
        </div>
)
const Header=()=>{
    return(
      
        <div className="header">
            <Title />
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>

    )
}

const Body =() =>{
    return (
        <>
        <h1>Body</h1>
        </>
    )
}
const Footer =() =>{
    return (
        <>
        <h1>Footer</h1>
        </>
    )
}

const AppLayout =() =>{
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}
const jsx =(
    <div  style={{}}>
         <h1>heading</h1>
    </div>
)

export {AppLayout}