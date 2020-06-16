using System;
using System.Collections.Generic;
using System.Text;

namespace Decision.Model
{
    public class Question
    {
        public string QuestionBody { get; set; }
        public string RightChoice { get; set; }
        public Question RightQuestion { get; set; }
        public string LeftChoice { get; set; }
        public Question LeftQuestion { get; set; }
    }

}
