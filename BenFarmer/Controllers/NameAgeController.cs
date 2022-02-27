using Microsoft.AspNetCore.Mvc;
using BenFarmer.Model;
namespace BenFarmer.Controllers
{
    public class NameAgeController : Controller
    {
        // GET: test
        public NameAge Index()
        {
            NameAge test = new NameAge();
            test.Name = "test";
            test.Age = 1;
            test.Count = 1;

            return test;
        }

        public NameAge getNameAge()
        {
            string api = "https://api.agify.io?name=michael";

            return new NameAge();
        }
    }
}
