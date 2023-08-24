import CardCategories from "../components/navbar/CardCategories";

export default function Categories() {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl">Explore by Category</h2>
        <div className="flex items-center mt-7  gap-3 "></div>
      </div>
      {/* imagenes solo de prueba */}
      <CardCategories
        Categorie="Bedroom"
        imageUrl="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80s"
      />
      <CardCategories
        Categorie="Dining Romm"
        imageUrl="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tZWRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <CardCategories
        Categorie="Living"
        imageUrl="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbWVkb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
    </section>
  );
}
