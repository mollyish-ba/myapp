const Secondcomponent = () => {
    // here is where we declare our variables 
    let message = "I love programming"
    let age = 25
    let gender = "female"
    let salary = 350000
    let friend = "Iris"
    let grade= "A"
    return (
        <div>
            <h1>Understanding Variables in ReactJS</h1>
            {/* bInD THE MESSAGE VARIABLE  */}
            <h2>{ message }</h2>
            {/* bind age variable  */}
            <p> Barry will be {age} years old next year.</p>
            {/* BING GENDER VARIABLE  */}
            <p>The most reasonable { gender } to ever exist.</p>
            {/* bind salary variable  */}
            <p>She gets { salary } every month.</p>
            {/* bind friend variable  */}
            <p> { friend } came through today.</p>
            {/* bing grade variable  */}
            <p> In law { grade } is sure way to attain the course.</p>
        </div>
    )
}
export default Secondcomponent