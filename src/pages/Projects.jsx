import CardComponent from "../components/CardComponent";

const products = [
    { id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Phone", price: 20000 },
{ id: 3, name: "Headphones", price: 3000 }
];

function Projects() {
    return (
        <div className="container">
        <h2>Products</h2>
        <div className="grid">
        {products.map(item => (
            <CardComponent key={item.id} item={item} />
        ))}
        </div>
        </div>
    );
}

export default Projects;
