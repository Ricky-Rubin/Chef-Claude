import chef_logo from "/chef-claude-icon.png"

function Header() {
    return (
        <div className="header">
            <img src={chef_logo}/>
            <span className="header-text">Chef Claude</span>
        </div>
    )
}

export { Header };