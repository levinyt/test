import PropTypes from 'prop-types'

function Greet(props){
    const welcomeMsg=<h2 className="Welcome">Welcome : {props.username} </h2>
    const loginPrompt=<h2 className="Login"> Please login</h2>

    return(props.isLogedIn ?welcomeMsg :loginPrompt)


    
}
Greet.propTypes={
    username:PropTypes.string,
    isLogedIn:PropTypes.bool
}
Greet.defaultProps={
    isLogedIn:false,
    username:"Guest"
}
export default Greet