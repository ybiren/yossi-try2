using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;


namespace WebApplication2.Models
{
    [DataContract]
    public class PriceItem
    {
        [DataMember(Name="id")]

        public int Id { get; set; }
        [DataMember(Name = "name")]
        public string Name { get; set; }
        [DataMember(Name = "price")]
        public double Price { get; set; }

    }
}