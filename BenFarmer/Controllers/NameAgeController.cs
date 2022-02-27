using Microsoft.AspNetCore.Mvc;
using BenFarmer.Model;
using System.Net;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BenFarmer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NameAgeController : ControllerBase
    {
        // GET: api/<NameAge>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://api.agify.io/?name=michael");
            if (!response.IsSuccessStatusCode)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return Ok(await response.Content.ReadAsAsync<NameAge>());

        }

        // GET api/<NameAge>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

    }
}
