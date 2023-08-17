import  CartWidget from './CartWidget'
const Navbar = () => {
    return (

    
        <nav className='nav'>
            <h1>nonForsit</h1>
            <section className='buttons'>
                <button>remera</button>
                <button>cap corderoy</button>
                <button>pantalones</button>
            </section>

            <div className='cart'>
            < CartWidget />
            </div>
        </nav>
    )
}

export default Navbar