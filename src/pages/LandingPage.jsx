import React from 'react'

const LandingPage = () => {
  return (
    <div className='container my-3'><h2>Cart Management Using Context</h2><p>Cart management in a React web application can be efficiently handled using Context API, a custom useFetch hook, and Axios for API requests. In this setup, the app fetches product data from an API and allows users to add items to the cart. The cart state is managed globally using Context API, ensuring that changes reflect across components in real time. When a user adds a product, it updates the cart state, which dynamically updates the cart count displayed in the Navbar. The custom useFetch hook efficiently handles API calls, while React Router DOM enables smooth navigation between the Products Page and the Cart Page. The UI is styled with Bootstrap, ensuring a responsive and visually appealing design. This setup provides a seamless shopping experience with instant updates to the cart count without page reloads. </p></div>
  )
}

export default LandingPage