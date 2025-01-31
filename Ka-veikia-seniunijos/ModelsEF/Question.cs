﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Ka_veikia_seniunijos.ModelsEF
{
    public partial class Question
    {
        public Question()
        {
            Answer = new HashSet<Answer>();
        }

        public int Id { get; set; }
        public string Text { get; set; }
        public int? Rating { get; set; }
        public int Number { get; set; }
        public int ForeignSurvey { get; set; }

        public virtual Survey ForeignSurveyNavigation { get; set; }
        public virtual ICollection<Answer> Answer { get; set; }
    }
}
