import OrderFormModalButton from '../../components/CustomOrderButton';
import products from '../../lib/products';

export default function Store() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-header text-grit-lightSteel mb-4">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-grit-steel max-w-70 p-4 rounded bg-grit-black text-grit-parchment">
            <img src={product.image} alt={product.name} className="w-50 h-70 object-fill mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-md font-bold mt-2">${product.price}</p>
            {/* Info to populate form should be passed through the OrderFormModalButton */}
            <OrderFormModalButton id={product.id} productName={product.name} productDesc={product.description}/>
          </div>
        ))}
      </div>
    </main>
  );
}
