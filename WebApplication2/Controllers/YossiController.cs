using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using Newtonsoft.Json;
using WebApplication2.Models;
using WebGrease.Css.Ast;


namespace WebApplication2.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class YossiController : ApiController
    {

        private HttpCookie CreateStudentCookie()
        {
            HttpCookie StudentCookies = new HttpCookie("StudentCookies");
            StudentCookies.Value = "hallo";
            StudentCookies.Expires = DateTime.Now.AddHours(1);
            return StudentCookies;
        }

        
        // GET api/<controller>/5
        public async Task<PriceItem> Get()
        {
            HttpContext.Current.Request.Cookies.Add(CreateStudentCookie());
            async Task<PriceItem> InnerFunc()
            {
                //UrlHelper url = new UrlHelper(HttpContext.Current.Request.RequestContext);
                string host = HttpContext.Current.Request.Url.Authority;
                using (HttpClient httpClient = new HttpClient())
                {
                    string priceDat = await httpClient.GetStringAsync($"http://{host}/assets/dat.json");
                    PriceItem pItem = JsonConvert.DeserializeObject<PriceItem>(priceDat);
                    return pItem;
                }
            }
            return await InnerFunc();
        }

        // POST api/<controller>
        [System.Web.Http.HttpPost]
        public void Post([FromBody]PriceItem priceItem)
        {
            string txt = JsonConvert.SerializeObject(priceItem);
            var fileName = Path.Combine(HttpContext.Current.Server.MapPath(@"\"), @"assets\item33.json");
            File.WriteAllText(fileName, txt);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        [System.Web.Http.HttpGet]
        public async Task<PriceItem> Func2()
        {
            
            async Task<PriceItem> InnerFunc()
            {
                //UrlHelper url = new UrlHelper(HttpContext.Current.Request.RequestContext);
                string host = HttpContext.Current.Request.Url.Authority;
                using (HttpClient httpClient = new HttpClient())
                {
                    string priceDat = await httpClient.GetStringAsync($"http://{host}/assets/dat.json");
                    PriceItem pItem = JsonConvert.DeserializeObject<PriceItem>(priceDat);
                    return pItem;
                }
             }
          return await InnerFunc();
        }

        [System.Web.Http.HttpPost]
        public void Func3([FromBody] PriceItem priceItem)
        {
            string txt = JsonConvert.SerializeObject(priceItem);
            var fileName = Path.Combine(HttpContext.Current.Server.MapPath(@"\"), @"assets\item22.json");
            File.WriteAllText(fileName,txt);  
        }


        //File.WriteAllText
    }
}