using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace SuperStore
{
    public class Program
    {
        public static Dictionary<int, Product> ProductVault;

        public static void Main(string[] args)
        {
            CreateProductList();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        private static void CreateProductList()
        {
            ProductVault = new Dictionary<int, Product>();

            ProductVault.Add(1, new Product { Identifier = 1, Name = "Angular Ready", Description = "book about Angular", Price = 20.2, Stock = 100 });
            ProductVault.Add(2, new Product { Identifier = 2, Name = "TypeScript in Action", Description = "Book about TypeScript", Price = 32.27, Stock = 100 });
            ProductVault.Add(3, new Product { Identifier = 3, Name = "Asp.net Core jump start", Description = "Book about asp.net core", Price = 50.2, Stock = 100 });
            ProductVault.Add(4, new Product { Identifier = 4, Name = "Docker for dummies", Description = "Book about docker", Price = 15.6, Stock = 2 });
        }
    }
}
