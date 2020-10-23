using System.Collections.Generic;

namespace SuperStore
{
    public class ProductList
    {
        public static Dictionary<int, Product> _productList;

        public static void InitializeProductList()
        {
            _productList = new Dictionary<int, Product>();

            _productList.Add(1, new Product { Identifier = 1, Name = "Angular Ready", Description = "book about Angular", Price = 20.2, Units = 100 });
            _productList.Add(2, new Product { Identifier = 2, Name = "TypeScript in Action", Description = "Book about TypeScript", Price = 32.27, Units = 100 });
            _productList.Add(3, new Product { Identifier = 3, Name = "Asp.net Core jump start", Description = "Book about asp.net core", Price = 50.2, Units = 100 });
            _productList.Add(4, new Product { Identifier = 4, Name = "Docker for dummies", Description = "Book about docker", Price = 15.6, Units = 2 });
        }

        public static Dictionary<int, Product> GetProductList()
        {
            return _productList;
        }

        public static Product GetProduct(int id)
        {
            return _productList[id];
        }
    }
}
