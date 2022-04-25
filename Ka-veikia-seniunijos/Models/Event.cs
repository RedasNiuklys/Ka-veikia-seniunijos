using System;

namespace Ka_veikia_seniunijos.Models
{
    public class Event
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public DateTime Date { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public int Eldership_FK { get; set; }
        public string Address { get; set; }
        public float Latitude { get; set; }
        public float Longtitude { get; set; }
        public DateTime PostDate { get; set; }
    }
}