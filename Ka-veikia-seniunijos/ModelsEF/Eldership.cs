﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Ka_veikia_seniunijos.ModelsEF
{
    public partial class Eldership
    {
        public Eldership()
        {
            Message = new HashSet<Message>();
            Post = new HashSet<Post>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Municipality { get; set; }
        public string PasswordHashed { get; set; }

        public virtual ICollection<Message> Message { get; set; }
        public virtual ICollection<Post> Post { get; set; }
    }
}
