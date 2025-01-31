﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Ka_veikia_seniunijos.ModelsEF
{
    public partial class User
    {
        public User()
        {
            Answer = new HashSet<Answer>();
            Message = new HashSet<Message>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Municipality { get; set; }
        public string PasswordHashed { get; set; }

        public virtual ICollection<Answer> Answer { get; set; }
        public virtual ICollection<Message> Message { get; set; }
    }
}
