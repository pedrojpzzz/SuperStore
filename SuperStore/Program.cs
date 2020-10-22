using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace SuperStore
{
    public class Program
    {
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
            ProductList.InitializeProductList();
        }
    }
}
