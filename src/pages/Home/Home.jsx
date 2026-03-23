import { Link } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { recipes } from '../../data/recipes'
import './Home.css'

function Home() {
  const featuredRecipes = recipes.slice(0, 3)
  
  const homeCategories = [
    { name: "Breakfast", image: "pancakes.jpg", link: "/recipes" },
    { name: "Categories", image: "categories-dinner.jpg", link: "/categories" },
    { name: "Popular", image: "categories-popular.jpg", link: "/recipes" },
    { name: "Quick & Easy", image: "quick-easy.jpg", link: "/recipes" }
  ]

  const baseUrl = import.meta.env.BASE_URL

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Delicious, High-Quality<br /><span>Meals Made Simple</span></h1>
            <p>Discover quick, flavorful recipes for everyday cooking. From easy breakfasts to satisfying dinners, Simply Savory helps make every meal feel effortless.</p>
            <Link to="/recipes" className="btn btn-primary">Browse Recipes →</Link>
          </div>

          <div className="hero-images">
            <Link to="/recipe/1" className="hero-img">
              <img src={`${baseUrl}images/hero-salad-bowl.jpg`} alt="Fresh Salad Bowl" />
              <div className="hero-overlay">
                <span>Fresh Salad Bowl</span>
              </div>
            </Link>

            <Link to="/recipes" className="hero-img">
              <img src={`${baseUrl}images/hero-pizza.jpg`} alt="Fresh Pizza" />
              <div className="hero-overlay">
                <span>Fresh Pizza</span>
              </div>
            </Link>

            <Link to="/recipes" className="hero-img">
              <img src={`${baseUrl}images/hero-eggs-toast.jpg`} alt="Eggs and Toast" />
              <div className="hero-overlay">
                <span>Eggs & Toast</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Browse By</span>
            <h2>Explore Our Categories</h2>
            <p>Find recipes by type, occasion, and cooking style.</p>
          </div>

          <div className="categories-grid">
            {homeCategories.map((category, index) => (
              <Link to={category.link} className="category-card" key={index}>
                <img src={`${baseUrl}images/${category.image}`} alt={category.name} />
                <div className="card-overlay">
                  <h3>{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Top Picks</span>
            <h2>Featured Recipes</h2>
            <p>Popular dishes our visitors love most.</p>
          </div>

          <div className="featured-grid">
            {featuredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home