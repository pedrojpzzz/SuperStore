using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperStore
{
    public class ShoppingCart
    {
        private static Dictionary<int, Product> _productsInCart;

        public static void InitializeShoppingCart()
        {
            _productsInCart = new Dictionary<int, Product>();
        }

        public static Dictionary<int, Product> GetShoppingCartContent()
        {
            return _productsInCart;
        }

        public static void AddToCart(Product addedProduct)
        {
            _productsInCart.Add(addedProduct.Identifier, addedProduct);
        }

        public Dictionary<int, Product> GetProductsInCart()
        {
            return _productsInCart;
        }
    }
}
